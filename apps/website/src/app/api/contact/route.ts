import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { contactFormSchema } from '@marvinho/forms';
import { siteConfig, enquiryTypes } from '@marvinho/config';

export const runtime = 'nodejs';

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || entry.resetAt < now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

function cleanIp(value: string | null): string {
  if (!value) return 'unknown';
  return value.split(',')[0].trim();
}

export async function POST(request: NextRequest) {
  const ip = cleanIp(request.headers.get('x-forwarded-for'));

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many submissions. Please try again later.' },
      { status: 429 }
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const body = payload as Record<string, unknown>;

  if (typeof body.company === 'string' && body.company.length > 0) {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Please check your details and try again.', fields: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { name, email, phone, organization, enquiryType, subject, message } = parsed.data;

  const mailHost = process.env.MAIL_HOST;
  const mailPort = process.env.MAIL_PORT;
  const mailUser = process.env.MAIL_USERNAME;
  const mailPass = process.env.MAIL_PASSWORD;
  const mailFrom = process.env.MAIL_FROM_ADDRESS ?? siteConfig.email;
  const mailRecipient = process.env.CONTACT_RECIPIENT ?? siteConfig.email;

  if (!mailHost || !mailPort) {
    console.warn(
      '[api/contact] SMTP not configured — skipping email send. Set MAIL_HOST/MAIL_PORT to enable.'
    );
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: mailHost,
      port: Number(mailPort),
      secure: Number(mailPort) === 465,
      auth: mailUser && mailPass ? { user: mailUser, pass: mailPass } : undefined,
    });

    const enquiryLabel =
      enquiryTypes.find((type) => type.value === enquiryType)?.label ?? enquiryType;

    await transporter.sendMail({
      from: mailFrom,
      to: mailRecipient,
      replyTo: email,
      subject: `[Website] ${enquiryType} — ${subject}`,
      text: [
        `You received a new enquiry through the ${siteConfig.name} website.`,
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || 'Not provided'}`,
        `Organization: ${organization || 'Not provided'}`,
        `Enquiry Type: ${enquiryLabel}`,
        `Subject: ${subject}`,
        '',
        'Message:',
        message,
        '',
        `Sent from IP: ${ip}`,
      ].join('\n'),
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('[api/contact] Failed to send email:', error);
    return NextResponse.json(
      { error: 'Unable to send your message. Please try again later.' },
      { status: 500 }
    );
  }
}
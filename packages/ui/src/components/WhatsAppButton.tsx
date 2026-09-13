'use client';

import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@marvinho/shared';

interface WhatsAppButtonProps {
  message?: string;
}

export function WhatsAppButton({
  message = 'Hello! I would like to enquire about D KING SAP Academy programmes and services.',
}: WhatsAppButtonProps) {
  const phone = WHATSAPP_NUMBER.replace(/[^0-9]/g, '');
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
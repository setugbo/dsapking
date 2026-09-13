import type { TrainingProgramme, ConsultingService } from '@marvinho/types';

export function getTrainingProgramme(slug: string): TrainingProgramme | undefined {
  const { trainingProgrammes } = require('@marvinho/config');
  return trainingProgrammes.find((p: TrainingProgramme) => p.slug === slug);
}

export function getTrainingProgrammes(): TrainingProgramme[] {
  const { trainingProgrammes } = require('@marvinho/config');
  return trainingProgrammes;
}

export function getConsultingService(slug: string): ConsultingService | undefined {
  const { consultingServices } = require('@marvinho/config');
  return consultingServices.find((s: ConsultingService) => s.slug === slug);
}

export function getConsultingServices(): ConsultingService[] {
  const { consultingServices } = require('@marvinho/config');
  return consultingServices;
}

export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || 'D KING SAP ACADEMY LTD';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dkingacademy.com';
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+[WHATSAPP NUMBER]';
export const STUDENT_PORTAL_URL = process.env.NEXT_PUBLIC_STUDENT_PORTAL_URL || '';
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';
import type { BusinessUnit, BusinessUnitInfo } from '@marvinho/types';

export function getBusinessUnit(slug: string): BusinessUnitInfo | undefined {
  const { businessUnits } = require('@marvinho/config');
  return businessUnits.find((bu: BusinessUnitInfo) => bu.slug === slug);
}

export function getBusinessUnits(): BusinessUnitInfo[] {
  const { businessUnits } = require('@marvinho/config');
  return businessUnits;
}

export function getServicesForBusiness(businessSlug: string) {
  const unit = getBusinessUnit(businessSlug);
  return unit ? unit.services : [];
}

export function getServiceBySlug(businessSlug: string, serviceSlug: string) {
  const services = getServicesForBusiness(businessSlug);
  return services.find((s: { slug: string }) => s.slug === serviceSlug);
}

export function getBusinessColor(business: BusinessUnit): string {
  const colors: Record<BusinessUnit, string> = {
    studio: '#C9A84C',
    agency: '#2D2D2D',
    nani: '#8B6F47',
    tiling: '#5B7553',
    frame: '#7B6BA0',
    merchandise: '#C47A2B',
  };
  return colors[business];
}

export function getBusinessIcon(business: BusinessUnit): string {
  const icons: Record<BusinessUnit, string> = {
    studio: 'Camera',
    agency: 'Building2',
    nani: 'Heart',
    tiling: 'Hammer',
    frame: 'Frame',
    merchandise: 'Package',
  };
  return icons[business];
}

export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+234XXXXXXXXXX';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://marvinho.com';
export const SITE_NAME = 'Marvinho Limited';

'use client';

import type { LucideIcon } from 'lucide-react';
import {
  GraduationCap,
  MonitorCog,
  Briefcase,
  FileText,
  MessageSquare,
  Compass,
  Users,
  Shield,
  ShieldCheck,
  Award,
  Lightbulb,
  HeartHandshake,
  BookOpen,
  ClipboardCheck,
  TrendingUp,
  CalendarClock,
  Projector,
  Building2,
  Database,
  Workflow,
  FlaskConical,
  LifeBuoy,
  Rocket,
  Settings,
  BarChart3,
  ArrowUpDown,
  Package,
  Truck,
  Factory,
  Wrench,
  Heart,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  MonitorCog,
  Briefcase,
  FileText,
  MessageSquare,
  Compass,
  Users,
  Shield,
  ShieldCheck,
  Award,
  Lightbulb,
  HeartHandshake,
  BookOpen,
  ClipboardCheck,
  TrendingUp,
  CalendarClock,
  Projector,
  Building2,
  Database,
  Workflow,
  FlaskConical,
  LifeBuoy,
  Rocket,
  Settings,
  BarChart3,
  ArrowUpDown,
  Package,
  Truck,
  Factory,
  Wrench,
  Heart,
};

interface ModuleIconProps {
  name: string;
  className?: string;
}

export function ModuleIcon({ name, className }: ModuleIconProps) {
  const Icon = iconMap[name] ?? Briefcase;
  return <Icon className={className} />;
}

export { iconMap };
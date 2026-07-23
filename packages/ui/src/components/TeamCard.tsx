'use client';

import { cn } from '@marvinho/utils';
import type { TeamMember } from '@marvinho/types';

interface TeamCardProps {
  member: TeamMember;
  className?: string;
}

export function TeamCard({ member, className }: TeamCardProps) {
  return (
    <div
      className={cn(
        'group rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-premium transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
        className
      )}
    >
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#C9A84C]/10 text-2xl font-bold text-[#C9A84C]">
        {member.name.charAt(0)}
      </div>
      <h3 className="mt-4 text-lg font-bold text-[#141414]">{member.name}</h3>
      <p className="mt-1 text-sm font-medium text-[#C9A84C]">{member.role}</p>
      <p className="mt-3 text-sm leading-relaxed text-gray-500">{member.bio}</p>
    </div>
  );
}

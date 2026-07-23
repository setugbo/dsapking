'use client';

import { cn } from '@marvinho/utils';
import { ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
import { formatDate } from '@marvinho/utils';
import type { BlogPost } from '@marvinho/types';

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export function BlogCard({ post, className }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article
        className={cn(
          'group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-premium transition-all duration-500 hover:shadow-2xl hover:-translate-y-1',
          className
        )}
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
          <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/20 to-[#C9A84C]/5 transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#C9A84C] backdrop-blur-sm">
            {post.category}
          </div>
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span>{formatDate(post.publishedAt)}</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" /> {post.readTime} min read
            </span>
          </div>
          <h3 className="mt-3 text-lg font-bold text-[#141414] transition-colors group-hover:text-[#C9A84C] line-clamp-2">
            {post.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-2">{post.excerpt}</p>
          <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#C9A84C] transition-all duration-300 group-hover:gap-2">
            Read More <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </div>
      </article>
    </Link>
  );
}

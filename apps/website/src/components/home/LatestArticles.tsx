'use client';

import { motion } from 'framer-motion';
import { Container, SectionHeader, BlogCard } from '@marvinho/ui';
import { useInView } from '@marvinho/hooks';
import { blogPosts } from '@marvinho/config';
import Link from 'next/link';
import { Button } from '@marvinho/ui';
import { ArrowRight } from 'lucide-react';

export function LatestArticles() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeader
          badge="Blog"
          title="Latest Insights"
          description="Expert tips, industry trends, and company news from the Marvinho team."
        />

        <div ref={ref} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/blog">
            <Button variant="secondary" size="lg" icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
              Read More Articles
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}

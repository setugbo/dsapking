import type { Metadata } from 'next';
import { PageHeader, Container, SectionHeader } from '@marvinho/ui';
import { blogPosts } from '@marvinho/config';
import { BlogContent } from '@/components/blog/BlogContent';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights, tips, and news from Marvinho Limited. Stay updated with industry trends and company announcements.',
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Blog & Insights"
        description="Expert advice, industry trends, and stories from the Marvinho team."
        breadcrumbs={[{ label: 'Blog' }]}
      />

      <section className="py-20 lg:py-28">
        <Container>
          <BlogContent posts={blogPosts} />
        </Container>
      </section>
    </>
  );
}

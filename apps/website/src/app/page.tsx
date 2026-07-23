import { Hero } from '@/components/home/Hero';
import { Introduction } from '@/components/home/Introduction';
import { BusinessUnits } from '@/components/home/BusinessUnits';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { IndustriesServed } from '@/components/home/IndustriesServed';
import { Statistics } from '@/components/home/Statistics';
import { Testimonials } from '@/components/home/Testimonials';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { LatestArticles } from '@/components/home/LatestArticles';
import { HomeFAQ } from '@/components/home/HomeFAQ';
import { CTASection } from '@/components/home/CTASection';
import { NewsletterSection } from '@/components/home/NewsletterSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <BusinessUnits />
      <WhyChooseUs />
      <IndustriesServed />
      <Statistics />
      <Testimonials />
      <FeaturedProjects />
      <LatestArticles />
      <HomeFAQ />
      <CTASection />
      <NewsletterSection />
    </>
  );
}

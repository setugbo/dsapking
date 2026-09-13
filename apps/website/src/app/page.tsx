import { HeroTrustStrip } from '@marvinho/ui';
import { heroTrustItems } from '@marvinho/config';
import { Hero } from '@/components/home/Hero';
import { AboutPreview } from '@/components/home/AboutPreview';
import { Pillars } from '@/components/home/Pillars';
import { TrainingProgrammes } from '@/components/home/TrainingProgrammes';
import { PracticalExperience } from '@/components/home/PracticalExperience';
import { Consulting } from '@/components/home/Consulting';
import { CareerDevelopment } from '@/components/home/CareerDevelopment';
import { CorporateTraining } from '@/components/home/CorporateTraining';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { LearningCTA } from '@/components/home/LearningCTA';
import { HomeFAQ } from '@/components/home/HomeFAQ';
import { FinalCTA } from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <HeroTrustStrip items={heroTrustItems} />
      <AboutPreview />
      <Pillars />
      <TrainingProgrammes />
      <PracticalExperience />
      <Consulting />
      <CareerDevelopment />
      <CorporateTraining />
      <WhyChooseUs />
      <LearningCTA />
      <HomeFAQ />
      <FinalCTA />
    </>
  );
}
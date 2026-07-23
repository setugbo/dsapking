import type { Metadata } from 'next';
import { PageHeader, Container, SectionHeader, FeatureCard, TeamCard } from '@marvinho/ui';
import { coreValues, teamMembers, timeline } from '@marvinho/config';
import { AboutStory } from '@/components/about/AboutStory';
import { AboutMission } from '@/components/about/AboutMission';
import { AboutTimeline } from '@/components/about/AboutTimeline';
import { AboutCulture } from '@/components/about/AboutCulture';
import { AboutCTA } from '@/components/about/AboutCTA';
import { Star, Shield, Lightbulb, Clock, Heart, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Marvinho Limited - our story, mission, vision, and the team behind Nigeria\'s premier multi-service corporation.',
};

const valueIcons: Record<string, React.ReactNode> = {
  Star: <Star className="h-6 w-6" />,
  Shield: <Shield className="h-6 w-6" />,
  Lightbulb: <Lightbulb className="h-6 w-6" />,
  Clock: <Clock className="h-6 w-6" />,
  Heart: <Heart className="h-6 w-6" />,
  TrendingUp: <TrendingUp className="h-6 w-6" />,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Marvinho Limited"
        description="Discover our journey, our mission, and the values that drive everything we do."
        breadcrumbs={[{ label: 'About' }]}
      />

      <AboutStory />
      <AboutMission />

      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeader
            badge="Our Values"
            title="Core Values"
            description="These principles guide every decision we make and every service we deliver."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => (
              <FeatureCard
                key={value.title}
                icon={valueIcons[value.icon]}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </Container>
      </section>

      <AboutTimeline />
      <AboutCulture />

      <section className="py-20 lg:py-28 bg-gray-50/50">
        <Container>
          <SectionHeader
            badge="Leadership"
            title="Meet Our Team"
            description="The passionate professionals driving Marvinho's success across every business unit."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </Container>
      </section>

      <AboutCTA />
    </>
  );
}

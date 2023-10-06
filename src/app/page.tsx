// import { ExampleSection } from '@/views/ExampleSection';
// import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton';

import { ExpertiseSection } from '@/views/ExpertiseSection';
import { ApplyFormSection } from '@/views/ApplyFormSection';
import { TimelineSection } from '@/views/TimelineSection';
import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton';
import { HeroSection } from '@/views/HeroSection';
import { TeamSection } from '@/views/TeamSection';
import { CasesSection } from '@/views/CasesSection';
import { AboutSection } from '@/views/AboutSection';
import { TrustSection } from '@/views/TrustSection';
import { QASection } from '@/views/QASection';

export default function Home() {
  return (
    <>
      {/* <ExampleSection />
      <ScrollToTopButton sectionIdStart="advantages" /> */}
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <TeamSection />
      <CasesSection />
      <TrustSection />
      <TimelineSection />
      <QASection />
      <ApplyFormSection />
      <ScrollToTopButton sectionIdStart="advantages" />
    </>
  );
}

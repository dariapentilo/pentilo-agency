// import { ExampleSection } from '@/views/ExampleSection';
// import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton';

import { ExpertiseSection } from '@/views/ExpertiseSection';
import { ApplyFormSection } from '@/views/ApplyFormSection';
import { TimelineSection } from '@/views/TimelineSection';
import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton';
import { TeamSection } from '@/views/TeamSection';
import { CasesSection } from '@/views/CasesSection';
import { AboutSection } from '@/views/AboutSection';
import { TrustSection } from '@/views/TrustSection';

export default function Home() {
  return (
    <>
      {/* <ExampleSection />
      <ScrollToTopButton sectionIdStart="advantages" /> */}

      <AboutSection />
      <ExpertiseSection />
      <TeamSection />
      <CasesSection />
      <TrustSection />
      <TimelineSection />
      <ApplyFormSection />
      <ScrollToTopButton sectionIdStart="advantages" />
    </>
  );
}

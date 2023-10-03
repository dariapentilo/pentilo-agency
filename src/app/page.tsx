import { Expertise } from '@/views/Expertise';
import { ApplyForm } from '@/views/ApplyForm';
import { ExampleSection } from '@/views/ExampleSection';
import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton';

export default function Home() {
  return (
    <>
      <div className="pt-[56px]"></div>
      <Expertise />
      <ApplyForm />
      <ExampleSection />
      <ScrollToTopButton sectionIdStart="advantages" />
    </>
  );
}

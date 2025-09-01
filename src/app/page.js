import NewspaperHeader from '@/components/NewspaperHeader';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import ClassifiedsSection from '@/components/ClassifiedsSection';
import NewspaperFooter from '@/components/NewspaperFooter';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NewspaperHeader />
      <main>
        <HeroSection />
        <ProjectsSection />
        <ClassifiedsSection />
      </main>
      <NewspaperFooter />
    </div>
  );
}

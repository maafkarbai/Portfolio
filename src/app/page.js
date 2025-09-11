import NewspaperHeader from "@/components/NewspaperHeader";
import NewspaperLayout from "@/components/NewspaperLayout";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import HireMeSection from "@/components/HireMeSection";
import ClassifiedsSection from "@/components/ClassifiedsSection";
import NewspaperFooter from "@/components/NewspaperFooter";
import { BreakingNews } from "@/components/NewspaperDecorations";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header role="banner">
        <BreakingNews message="Full-stack developer available for hire." />
        <NewspaperHeader />
      </header>
      <NewspaperLayout>
        <HeroSection />
        <ProjectsSection />
        <HireMeSection />
        <ClassifiedsSection />
      </NewspaperLayout>
      <NewspaperFooter />
    </div>
  );
}

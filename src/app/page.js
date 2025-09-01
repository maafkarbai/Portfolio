import NewspaperHeader from "@/components/NewspaperHeader";
import NewspaperLayout from "@/components/NewspaperLayout";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ClassifiedsSection from "@/components/ClassifiedsSection";
import NewspaperFooter from "@/components/NewspaperFooter";
import { BreakingNews } from "@/components/NewspaperDecorations";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <BreakingNews message="Portfolio 2.0 launched with newspaper theme! Full-stack developer available for hire." />
      <NewspaperHeader />
      <NewspaperLayout>
        <HeroSection />
        <ProjectsSection />
        <ClassifiedsSection />
      </NewspaperLayout>
      <NewspaperFooter />
    </div>
  );
}

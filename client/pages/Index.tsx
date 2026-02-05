import Header from "@/components/Header";
import RoadmapSection from "@/components/RoadmapSection";
import ResourcesSection from "@/components/ResourcesSection";
import CompaniesSection from "@/components/CompaniesSection";
import MotivationSection from "@/components/MotivationSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-retro-bg overflow-hidden">
      {/* Retro CRT overlay effect */}
      <div className="scanner-overlay" />

      <Header />
      <RoadmapSection />
      <ResourcesSection />
      <CompaniesSection />
      <MotivationSection />

      {/* Floating retro decoration */}
      <div className="fixed bottom-8 right-8 text-6xl opacity-20 pointer-events-none">
        💻
      </div>
    </div>
  );
}

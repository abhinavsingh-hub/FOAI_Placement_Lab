import Header from "@/components/Header";
import RoadmapSection from "@/components/RoadmapSection";
import ResourcesSection from "@/components/ResourcesSection";
import CompaniesSection from "@/components/CompaniesSection";
import MotivationSection from "@/components/MotivationSection";
import Navbar from "@/components/Navbar";
import FloatingObjects from "@/components/FloatingObjects";

export default function Index() {
  return (
    <div className="min-h-screen bg-retro-bg overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Floating Objects Background */}
      <FloatingObjects />

      {/* Retro CRT overlay effect */}
      <div className="scanner-overlay" />

      <Header />
      <RoadmapSection />
      <ResourcesSection />
      <CompaniesSection />
      <MotivationSection />
    </div>
  );
}

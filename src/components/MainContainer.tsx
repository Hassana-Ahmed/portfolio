import { Suspense } from "react";
import PortfolioNavbar from "./PortfolioNavbar";
import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import SkillsSection from "./SkillsSection";
import CertificationsSection from "./CertificationsSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";

const MainContainer = () => {
  return (
    <div className="portfolio-root">
      <PortfolioNavbar />
      <main>
        <HeroSection />
        <StatsSection />
        <SkillsSection />
        <CertificationsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default MainContainer;

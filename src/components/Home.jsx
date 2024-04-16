import AboutSection from "./sections/AboutSection";
import CallToActionSection from "./sections/CallToActionSection";
import ClientsSection from "./sections/ClientsSection";
import ContactSection from "./sections/ContactSection";
import FeaturesSection from "./sections/FeaturesSection";
import HeroSection from "./sections/HeroSection";
import PortfolioSection from "./sections/PortfolioSection";
import RecentPostsSection from "./sections/RecentPostsSection";
import ServicesSection from "./sections/ServicesSection";
import StatsSection from "./sections/StatsSection";
import TeamSection from "./sections/TeamSection";
import TestimonialSection from "./sections/TestimonialSection";

export default function Home() {
    return (
        <main id="main">
            <HeroSection />
            <ClientsSection />
            <AboutSection />
            <StatsSection />
            <ServicesSection />
            <FeaturesSection />
            <PortfolioSection />
            <TeamSection />
            <CallToActionSection />
            <TestimonialSection />
            <RecentPostsSection />
            <ContactSection/>
        </main>
    )
}

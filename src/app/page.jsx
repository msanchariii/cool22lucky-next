import AccessibilitySection from "@/components/AccessibilitySection";
import FAQs from "@/components/FAQ";
import DownloadApp from "@/components/DownlodApp";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PricingPlans from "@/components/Pricing";
import ProofreaderSection from "@/components/ProofreaderSection";
import VideoPlayer from "@/components/VideoPlayer";
import VoiceGeneratorSection from "@/components/VoiceGeneratorSection";

export default function Home() {
    return (
        <div className="">
            <Header />
            <Hero />
            <Features />
            <ProofreaderSection />
            <VoiceGeneratorSection />
            <AccessibilitySection />
            <DownloadApp />
            <VideoPlayer />
            <PricingPlans />
            <FAQs />
            <Footer />
        </div>
    );
}

import AccessibilitySection from "@/components/AccessibilitySection";
import FAQs from "@/components/Contact";
import DownloadApp from "@/components/DownlodApp";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PricingPlans from "@/components/Pricing";
import ProofreaderSection from "@/components/ProofreaderSection";
import VideoPlayer from "@/components/VideoPlayer";
import VoiceGeneratorSection from "@/components/VoiceGeneratorSection";
import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Header />
            <Hero />
            <div className="h-12"></div>
            <Features />
            <VideoPlayer />
            <ProofreaderSection />
            <VoiceGeneratorSection />
            <AccessibilitySection />
            <DownloadApp />
            <PricingPlans />
            <FAQs />
            <Footer />
        </div>
    );
}

import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PricingPlans from "@/components/Pricing";
import VideoPlayer from "@/components/VideoPlayer";
import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Header />
            <Hero />
            <div className="h-12"></div>
            <Features />
            <VideoPlayer />
            <PricingPlans />
            <Footer />
        </div>
    );
}

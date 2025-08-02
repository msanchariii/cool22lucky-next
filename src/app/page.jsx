import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PricingPlans from "@/components/Pricing";
import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Header />
            <Hero />
            <div className="h-screen"></div>
            <Features />
            <PricingPlans />
            <Footer />
        </div>
    );
}

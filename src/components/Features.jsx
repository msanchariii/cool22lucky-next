import Image from "next/image";
import React from "react";

const features = [
    {
        img: "/features/feature1.png",
        title: "Best quality development",
        desc: "We includes well designed components which always gives.",
    },
    {
        img: "/features/feature2.png",
        title: "On-time tracker",
        desc: "We includes well designed components which always gives.",
    },
    {
        img: "/features/feature3.png",
        title: "Business & finance app",
        desc: "We includes well designed components which always gives.",
    },
];

const Features = () => {
    return (
        <section className="py-20 bg-lavender text-center">
            {/* Section Header */}
            <div className="mb-12">
                <span className="uppercase text-sm text-lavender-dark bg-linear-to-r from-lavender to-transparent font-semibold tracking-wide">
                    Features
                </span>
                <h2 className="text-4xl font-bold mt-2">
                    Why choose <span className="text-purple-600">cour app</span>
                </h2>
            </div>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 lg:px-24">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white/50 backdrop-blur-lg border border-white/20 p-8 text-center shadow-md hover:shadow-xl transition"
                    >
                        <div className="mb-6 flex justify-center">
                            <Image
                                src={feature.img}
                                alt={feature.title}
                                width={220}
                                height={180}
                                className="rounded-xl"
                            />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">
                            {feature.title}
                        </h3>
                        <p className="text-gray-500 text-sm">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;

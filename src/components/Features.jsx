import Image from "next/image";
import React from "react";

const features = [
    {
        img: "/assets/feature1.png",
        title: "Best quality development",
        desc: "We includes well designed components which always gives.",
    },
    {
        img: "/assets/feature2.png",
        title: "On-time tracker",
        desc: "We includes well designed components which always gives.",
    },
    {
        img: "/assets/feature3.png",
        title: "Business & finance app",
        desc: "We includes well designed components which always gives.",
    },
];

const Features = () => {
    return (
        <section className=" w-full max-w-none p-4 bg-white text-center">
            <div className="bg-lavender py-20">
                {/* Section Header */}
                <div className="mb-12">
                    <h2 className="uppercase text-sm text-lavender-darkest p-1 rounded-full px-4 bg-linear-to-r from-lavender-dark w-fit mx-auto to-transparent font-semibold tracking-wide">
                        Features
                    </h2>
                    <h3 className="text-5xl font-semibold mt-2 capitalize">
                        Why choose
                        <span className="font-bold"> our app</span>
                    </h3>
                </div>

                {/* Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 lg:px-24">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="border-4 rounded-lg border-white p-8 text-center hover:shadow transition"
                        >
                            <div className="mb-6 flex justify-center">
                                <div className="relative w-full aspect-square">
                                    <Image
                                        src={feature.img}
                                        alt={feature.title}
                                        // width={220}
                                        // height={180}
                                        fill
                                        className="rounded-xl object-cover"
                                    />
                                </div>
                            </div>
                            <h3 className="font-semibold text-xl mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-500 font-medium">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

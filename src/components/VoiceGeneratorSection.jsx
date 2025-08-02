import Image from "next/image";
import React from "react";
import { ArrowButton } from "./Button";

const VoiceGeneratorSection = () => {
    return (
        <section className="px-6 py-16 bg-white grid md:grid-cols-2 gap-10 items-center">
            <div className="">
                <Image
                    src="/assets/img2.png"
                    alt="Voice Generator"
                    width={500}
                    height={300}
                    className="object-cover"
                />
            </div>

            <div className="flex flex-col gap-8">
                <h2 className="text-5xl font-bold text-gray-900">
                    Generate Any
                    <br />
                    Voices using our
                    <br />
                    Smart AI.
                </h2>
                <p className="mt-4 text-gray-600 max-w-md">
                    Create high-quality speech in any voice, style or language.
                    Our powerful AI captures human-like inflections, delivering
                    contextually accurate results.
                </p>
                <ArrowButton className="border-2 max-w-fit">
                    Generate Voice
                </ArrowButton>
            </div>
        </section>
    );
};

export default VoiceGeneratorSection;

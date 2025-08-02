import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const iconData = [
    { icon: "/assets/icon1.png", title: "Grammar Check" },
    { icon: "/assets/icon2.png", title: "Tone Analysis" },
    { icon: "/assets/icon3.png", title: "Language Suggestions" },
    { icon: "/assets/icon4.png", title: "Plagiarism Detection" },
];

const IconCard = ({ icon, children }) => {
    return (
        <div className="flex gap-4 max-w-xs">
            <Image
                src={icon}
                alt={icon}
                width={80}
                height={80}
                className="object-cover"
            />
            <h4 className="text-xl font-medium py-4">{children}</h4>
        </div>
    );
};

const ProofreaderSection = () => {
    return (
        <section className="px-6 py-12 md:flex items-center justify-between bg-white">
            <div className="max-w-xl gap-y-5 flex flex-col">
                <h2 className="uppercase w-fit text-sm text-lavender-darkest p-1 rounded-full px-4 bg-linear-to-r from-lavender-dark to-transparent font-semibold tracking-wide">
                    Data Driven Coaching
                </h2>
                <h3 className="text-5xl font-semibold mt-2 capitalize">
                    It will find and fix
                    <span className="font-bold"> anything that hurts</span>
                </h3>
                <p className="text-gray-600 max-w-lg">
                    Detect grammar mistakes, improve tone, and get language
                    suggestions powered by AI.
                </p>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                    {iconData.map(({ icon, title }) => (
                        <IconCard key={title} icon={icon}>
                            {title}
                        </IconCard>
                    ))}
                </div>
                <button className="mt-4 px-6 max-w-fit py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition">
                    <IoIosArrowForward
                        className="inline-block mr-2"
                        size={24}
                    />
                    Proof Your Words
                </button>
            </div>
            <div className="mt-10 md:mt-0 md:ml-10">
                <img
                    src="/assets/img1.png"
                    alt="Proofreading AI"
                    className="w-full"
                />
            </div>
        </section>
    );
};

export default ProofreaderSection;

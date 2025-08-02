import Image from "next/image";
import React from "react";

const Hero = () => {
    return (
        <>
            <div className="absolute inset-4 h-[150vh] flex items-center justify-center">
                <Image
                    src="/assets/hero.svg"
                    alt="Hero Image"
                    fill
                    className="object-cover absolute top-4 -z-10 rounded-3xl"
                    priority
                />
            </div>
            <section className="relative top-6 min-h-screen pt-32 flex flex-col items-center justify-center overflow-hidden">
                <h1 className="text-[9rem] leading-[1.2] font-medium text-center text-white">
                    AI Voice <br /> Transform <br /> Reality
                </h1>

                <div className="bg-white/5 backdrop-blur-lg p-6 mt-12">
                    <h2 className="text-white text-2xl  max-w-3xl font-light text-center mt-4 mb-12">
                        Generate human-like voices with Retro's AI
                        text-to-speech technology. The best online AI voice
                        generator
                    </h2>
                    {/* client cards */}
                    <div className="flex relative bg-white items-center justify-between rounded-full py-3 mx-auto px-6 shadow-lg w-[450px]">
                        {/* Avatars */}
                        <div className="flex -space-x-3">
                            <Image
                                src="/assets/user1.jpg"
                                alt="User 1"
                                width={40}
                                height={40}
                                className="rounded-full h-11 w-11 aspect-square border-3 border-white object-cover"
                            />
                            <Image
                                src="/assets/user2.jpg"
                                alt="User 2"
                                width={40}
                                height={40}
                                className="rounded-full h-11 w-11 aspect-square border-3 border-white object-cover"
                            />
                            <Image
                                src="/assets/user3.jpg"
                                alt="User 3"
                                width={40}
                                height={40}
                                className="rounded-full h-11 w-11 border-3 border-white object-cover"
                            />
                        </div>

                        {/* Center Gradient Circle */}
                        {/* <div className="  bg-gradient-to-tr from-pink-500 to-orange-400 flex items-center justify-center"> */}
                        <Image
                            src="/assets/mic.svg"
                            alt="Microphone Icon"
                            width={32}
                            height={32}
                            className="text-white h-32 w-32 absolute left-1/2  -translate-x-1/2 "
                        />
                        {/* </div> */}

                        {/* Text */}
                        <div className="text-right">
                            <p className="text-xl font-bold">1.7mil+</p>
                            <p className="text-gray-500 text-sm">
                                Active Clients
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;

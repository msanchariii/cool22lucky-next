import Image from "next/image";
import React from "react";
import { FaPaypal } from "react-icons/fa";

const BrandonDentaCard = () => {
    return (
        <div className="absolute w-64 bg-white rounded-xl shadow-md p-5 top-[35%] left-0 hidden lg:block    ">
            {/* Avatar */}
            <div className="w-12 h-12 bg-gray-300 rounded-full mb-4"></div>

            {/* "New" Badge */}
            <span className="absolute top-3 right-3 text-xs text-cyan-500 font-medium">
                New
            </span>

            {/* Name & Title */}
            <h3 className="text-lg font-semibold">Brandon Denta</h3>
            <p className="text-gray-500 text-sm mb-4">UI/UX Designer</p>

            {/* Placeholder Lines */}
            <div className="space-y-2">
                <div className="h-2 bg-gray-200 rounded-full w-4/5"></div>
                <div className="h-2 bg-gray-200 rounded-full w-2/3"></div>
            </div>
        </div>
    );
};

const PaymentCard = () => {
    return (
        <div className="w-72 bg-white rounded-xl shadow-md p-5 absolute top-[30%] right-0 hidden lg:block">
            {/* Top Section: Avatar + Name + PayPal */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                    <div>
                        <h3 className="text-lg font-semibold">Johnia</h3>
                        <p className="text-gray-500 text-sm">UI/UX Designer</p>
                    </div>
                </div>
                <FaPaypal className="text-2xl text-black" />
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-3"></div>

            {/* Payment Info */}
            <div className="flex justify-between text-center">
                <div>
                    <p className="text-gray-500 text-sm">Total Cost</p>
                    <p className="text-purple-600 font-semibold text-lg">
                        $5,890.00
                    </p>
                </div>
                <div>
                    <p className="text-gray-500 text-sm">Net Pay</p>
                    <p className="text-purple-600 font-semibold text-lg">
                        $3,890.00
                    </p>
                </div>
            </div>
        </div>
    );
};

const Hero = () => {
    return (
        <>
            <div className="absolute inset-0 lg:inset-4 h-[160vh] flex items-center justify-center">
                <Image
                    src="/assets/hero.svg"
                    alt="Hero Image"
                    fill
                    className="object-cover absolute top-4 -z-10 lg:rounded-3xl"
                    priority
                />
            </div>
            <section className="relative top-6 min-h-screen pt-32 flex flex-col items-center justify-center overflow-hidden">
                <h1 className="text-[7rem] lg:text-[9rem] leading-[1.2] font-medium text-center text-white">
                    AI Voice <br /> Transform <br /> Reality
                </h1>
                <BrandonDentaCard />
                <PaymentCard />

                <div className="bg-white/5 backdrop-blur-lg py-6 px-12 mt-2">
                    <h2 className="text-white text-2xl max-w-3xl font-light text-center mt-4 mb-12">
                        Generate human-like voices with Retro's AI
                        text-to-speech technology. The best online AI voice
                        generator
                    </h2>
                    {/* client cards */}
                    <div className="flex flex-row ">
                        <div className="flex relative bg-white self-end h-18 items-center justify-between rounded-full py-3 mx-auto px-6 shadow-lg w-[450px]">
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
                        <div className="relative text-white">
                            <img
                                className="relative bottom-4 right-0 h-24 w-24"
                                src="/assets/arrow.svg"
                                alt=""
                            />
                            <p>
                                <span className="text-4xl">13,00000+</span>{" "}
                                <br />
                                <span className="opacity-90">
                                    Voices Generated
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;

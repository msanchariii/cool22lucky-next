"use client";
import React, { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { ArrowButton } from "./Button";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="bg-white fixed top-4 lg:top-12 left-1/2 z-50 transform -translate-x-1/2 flex justify-between container md:max-w-4xl lg:max-w-5xl xl:max-w-7xl w-[95%] lg:w-full items-center rounded-full py-3 lg:py-4 px-4 lg:px-12 shadow-lg">
                <h1 className="text-xl lg:text-2xl font-semibold">Hirezy</h1>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex gap-6 font-medium">
                    <a
                        href="#"
                        className="text-gray-700 hover:text-blue-500 transition"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="text-gray-700 hover:text-blue-500 transition"
                    >
                        About
                    </a>
                    <a
                        href="#"
                        className="text-gray-700 hover:text-blue-500 transition"
                    >
                        Features
                    </a>
                    <a
                        href="#"
                        className="text-gray-700 hover:text-blue-500 transition"
                    >
                        Pricing
                    </a>
                    <a
                        href="#"
                        className="text-gray-700 hover:text-blue-500 transition"
                    >
                        Contact
                    </a>
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex gap-4">
                    <ArrowButton className="bg-[#f1f4f9] hover:bg-gray-200">
                        Get Started
                    </ArrowButton>
                    <ArrowButton className="bg-[#add1ff] hover:bg-blue-200">
                        Request A Demo
                    </ArrowButton>
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition"
                >
                    {isMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-opacity-50 bg-white z-40 lg:hidden">
                    <div className="fixed top-18 left-1/2 transform -translate-x-1/2 w-[92%] mx-auto bg-white rounded-b-2xl z-50 p-6">
                        <nav className="flex flex-col gap-4 mb-6 ">
                            <a
                                href="#"
                                className="text-gray-700 hover:text-blue-500 transition py-2 px-4 rounded-lg hover:bg-gray-50"
                                onClick={toggleMenu}
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="text-gray-700 hover:text-blue-500 transition py-2 px-4 rounded-lg hover:bg-gray-50"
                                onClick={toggleMenu}
                            >
                                About
                            </a>
                            <a
                                href="#"
                                className="text-gray-700 hover:text-blue-500 transition py-2 px-4 rounded-lg hover:bg-gray-50"
                                onClick={toggleMenu}
                            >
                                Features
                            </a>
                            <a
                                href="#"
                                className="text-gray-700 hover:text-blue-500 transition py-2 px-4 rounded-lg hover:bg-gray-50"
                                onClick={toggleMenu}
                            >
                                Pricing
                            </a>
                            <a
                                href="#"
                                className="text-gray-700 hover:text-blue-500 transition py-2 px-4 rounded-lg hover:bg-gray-50"
                                onClick={toggleMenu}
                            >
                                Contact
                            </a>
                        </nav>

                        <div className="flex flex-col gap-3">
                            <ArrowButton className="bg-[#f1f4f9] hover:bg-gray-200">
                                Get Started
                            </ArrowButton>
                            <ArrowButton className="bg-[#add1ff] hover:bg-blue-200">
                                Request A Demo
                            </ArrowButton>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;

import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
    return (
        <div className="bg-white fixed top-12 left-1/2 z-50 transform -translate-x-1/2 flex justify-between container max-w-7xl w-full items-center rounded-full py-4 px-12">
            {/* <div className="flex items-center"> */}
            <h1 className="text-2xl font-semibold">Hirezy</h1>
            <nav className="flex gap-6 font-medium">
                <a href="#" className="text-gray-700 hover:text-blue-500">
                    Home
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-500">
                    About
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-500">
                    Features
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-500">
                    Pricing
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-500">
                    Contact
                </a>
            </nav>
            <div className="flex gap-4">
                <HeaderButton className="bg-[#f1f4f9]">
                    Get Started
                </HeaderButton>
                <HeaderButton className="bg-[#add1ff]">
                    Request A Demo
                </HeaderButton>
            </div>
        </div>
    );
};

const HeaderButton = ({ children, className = "" }) => {
    return (
        <button
            className={`flex items-center px-4 py-2 rounded-full transition font-semibold ${className}`}
        >
            {children}
            <FaArrowRight className="inline ml-2 bg-black text-white p-2 rounded-full h-8 w-8" />
        </button>
    );
};

export default Header;

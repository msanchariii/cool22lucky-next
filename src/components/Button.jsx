import { FaArrowRight } from "react-icons/fa";

export const HeaderButton = ({ children, className = "" }) => {
    return (
        <button
            className={`flex items-center px-4 py-2 rounded-full transition font-semibold ${className}`}
        >
            {children}
            <FaArrowRight className="inline ml-2 bg-black text-white p-2 rounded-full h-8 w-8" />
        </button>
    );
};
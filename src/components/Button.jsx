import { FaArrowRight } from "react-icons/fa";

export const ArrowButton = ({ children, className = "" }) => {
    return (
        <button
            className={`flex flex-row gap-2 items-center justify-between px-4 py-2 rounded-full transition font-semibold ${className}`}
        >
            {children}
            <FaArrowRight className="bg-black text-white p-2 rounded-full h-8 w-8" />
        </button>
    );
};

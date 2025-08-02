import React from "react";

const ProofreaderSection = () => {
    return (
        <section className="px-6 py-12 md:flex items-center justify-between bg-white">
            <div className="max-w-xl space-y-5">
                <p className="text-sm font-semibold text-indigo-500">
                    SMART PROOFREADER
                </p>
                <h2 className="text-3xl font-bold text-gray-900">
                    It'll find and fix anything that hurts
                </h2>
                <p className="text-gray-600">
                    Detect grammar mistakes, improve tone, and get language
                    suggestions powered by AI.
                </p>
                <div className="space-y-2 text-gray-700">
                    <p>✔ Grammar Help</p>
                    <p>✔ Sentence Clarity</p>
                    <p>✔ Paraphrasing</p>
                </div>
                <button className="mt-4 px-6 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition">
                    Proof Your Words
                </button>
            </div>
            <div className="mt-10 md:mt-0 md:ml-10">
                <img
                    src="/images/proofreader.png"
                    alt="Proofreading AI"
                    className="w-full max-w-md rounded-lg shadow-lg"
                />
            </div>
        </section>
    );
};

export default ProofreaderSection;

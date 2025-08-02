import React from "react";

const VoiceGeneratorSection = () => {
    return (
        <section className="px-6 py-16 bg-white grid md:grid-cols-2 gap-10 items-center">
            <div className="bg-blue-50 p-6 rounded-xl shadow">
                <div className="space-y-3">
                    <p className="font-semibold">Martina Gomez</p>
                    <p className="text-sm text-gray-600">00:15 / 00:30</p>
                    <button className="bg-white border px-4 py-2 mt-2 rounded shadow">
                        Generate
                    </button>
                    <div className="mt-4 text-sm text-gray-500">
                        🎵 Voice waveform visualization here
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-3xl font-bold text-gray-900">
                    Generate Any Voices using our Smart AI.
                </h2>
                <p className="mt-4 text-gray-600">
                    Create high-quality speech in any voice, style or language.
                    Our powerful AI captures human-like inflections, delivering
                    contextually accurate results.
                </p>
                <button className="mt-6 px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                    Generate Voice
                </button>
            </div>
        </section>
    );
};

export default VoiceGeneratorSection;

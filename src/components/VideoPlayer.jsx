import React from "react";
import { Play } from "lucide-react";
import { FaPlay } from "react-icons/fa";

const VideoPlayer = () => {
    return (
        <section className="p-4">
            <div className="flex flex-col gap-8 py-20">
                <div className="bg-gray-300 w-4/5 aspect-video mx-auto rounded-3xl flex justify-center items-center text-center">
                    <div className="bg-white/15 backdrop-blur-md rounded-full p-6 shadow">
                        <div className="bg-white rounded-full p-8 shadow-lg ">
                            <FaPlay className="text-black mx-auto" size={32} />
                        </div>
                    </div>
                </div>
                <p className="uppercase text-cyan-600 font-semibold text-center text-lg">
                    {" "}
                    easy process
                </p>
                <h2 className="text-4xl capitalize text-center">
                    Streamline Hiring in <br /> Four Simple Steps
                </h2>
            </div>
        </section>
    );
};

export default VideoPlayer;

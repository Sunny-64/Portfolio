"use client";
import React, { useState } from "react";
import { EDUCATION, EXPERIENCE } from "@/constants/constants";
import { IEducation, IExperience } from "@/types";

const RenderTimelineData = ({ data }: { data: any }) => {
    return data?.map((item: IEducation & IExperience, index: number) => (
        <div key={index} className="flex flex-col sm:flex-row w-full">
            {index % 2 === 0 ? (
                <>
                    <div className="sm:hidden">
                        <div className={`h-[18px] w-[18px] rounded-full bg-verdigirls mx-auto ${index !== 0 && 'hidden'}`}></div>
                        <div className={`w-[6px] h-10 bg-verdigirls mx-auto ${index === 0 && '-mt-1'}`}></div>
                        <div className="w-20 h-20 rounded-full flex flex-col items-center justify-center mx-auto">
                            <div className="font-semibold text-[12px] sm:text-sm text-gray-300 opacity-80">
                                {item?.startDate}
                            </div>
                            <div className="font-medium my-1 text-[12px] sm:text-sm text-gray-300 opacity-80">
                                |
                            </div>
                            <div className="font-semibold text-[12px] sm:text-sm text-gray-300 opacity-80">
                                {item?.endDate}
                            </div>
                        </div>
                        <div className="w-[6px] h-10 bg-verdigirls mx-auto relative"></div>
                    </div>
                    <div className="w-full sm:w-2/5 md:px-2 sm:py-10">
                        <div className="flex flex-col w-full rounded-lg shadow border-[3px] border-verdigirls px-2 sm:px-4 py-5">
                            <div className="text-cornsilk mb-2">
                                <div className="font-bold text-md">
                                    {item?.graduatedFrom ?? item?.company}
                                </div>
                                <div className="font-medium text-gray-300 text-sm tracking-wider">
                                    {item?.course ?? item?.experienceType}
                                </div>
                            </div>
                            <div className="text-cornsilk text-sm leading-6 sm:text-base">
                                {item?.description}
                            </div>
                        </div>
                    </div>

                    <div className="w-[10%] mx-2 sm:w-1/5 sm:flex justify-center hidden">
                        <div className="relative flex h-full w-1 bg-verdigirls items-center justify-center">
                            <div className="absolute flex flex-col justify-center sm:h-24 sm:w-24 rounded-full  leading-none text-center z-10 bg-rich-black font-thin">
                                <div className="font-semibold text-[12px] sm:text-sm text-gray-300 opacity-80">
                                    {item?.startDate}
                                </div>
                                <div className="font-medium my-1 text-[12px] sm:text-sm text-gray-300 opacity-80">
                                    |
                                </div>
                                <div className="font-semibold text-[12px] sm:text-sm text-gray-300 opacity-80">
                                    {item?.endDate}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full sm:w-2/5 md:px-2 py-10 hidden sm:block"></div>
                </>
            ) : (
                <>
                      <div className="sm:hidden">
                        <div className={`w-[6px] h-10 bg-verdigirls mx-auto ${index === 0 && '-mt-1'}`}></div>
                        <div className="w-20 h-20 rounded-full flex flex-col items-center justify-center mx-auto">
                            <div className="font-semibold text-[12px] sm:text-sm text-gray-300 opacity-80">
                                {item?.startDate}
                            </div>
                            <div className="font-medium my-1 text-[12px] sm:text-sm text-gray-300 opacity-80">
                                |
                            </div>
                            <div className="font-semibold text-[12px] sm:text-sm text-gray-300 opacity-80">
                                {item?.endDate}
                            </div>
                        </div>
                        <div className="w-[6px] h-10 bg-verdigirls mx-auto relative"></div>
                    </div>

                    <div className="w-full sm:w-2/5 md:px-2 sm:py-10 hidden sm:block "></div>

                    <div className="w-[10%] mx-2 sm:w-1/5 sm:flex justify-center hidden">
                        <div className="relative flex h-full w-1 bg-verdigirls items-center justify-center">
                            <div className="absolute flex flex-col justify-center sm:h-24 sm:w-24 rounded-full  leading-none text-center z-10 bg-rich-black font-thin">
                                <div className="font-semibold text-[12px] sm:text-sm text-gray-300 opacity-80">
                                    {item?.startDate}
                                </div>
                                <div className="font-medium my-1 text-[12px] sm:text-sm text-gray-300 opacity-80">
                                    |
                                </div>
                                <div className="font-semibold text-[12px] sm:text-sm text-gray-300 opacity-80">
                                    {item?.endDate}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full sm:w-2/5 md:px-2 sm:py-10">
                        <div className="flex flex-col w-full rounded-lg shadow border-[3px] border-verdigirls px-2 sm:px-4 py-5">
                            <div className="text-cornsilk mb-2">
                                <div className="font-bold text-md">
                                    {item?.graduatedFrom ?? item?.company}
                                </div>
                                <div className="font-medium text-gray-300 text-sm tracking-wider">
                                    {item?.course ?? item?.experienceType}
                                </div>
                            </div>
                            <div className="text-cornsilk text-sm leading-6 sm:text-base">
                                {item?.description}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    ));
};

const Timeline = () => {
    const [activeButton, setActiveButton] = useState<string>("EXPERIENCE");
    return (
        <section id="timeline" className="p-5 py-10">
            <div className="flex justify-center gap-6 mb-16">
                <button
                    className={`text-lg w-32  ${
                        activeButton === "EDUCATION"
                            ? "bg-gradient-to-br from-verdigirls from-30% to-cerulean to-70%"
                            : "hvr-bounce-to-right border-[2px] border-verdigirls"
                    } px-5 py-2 rounded-sm shadow-sm`}
                    onClick={() => setActiveButton("EDUCATION")}
                >
                    Education
                </button>
                <button
                    className={`text-lg w-32 ${
                        activeButton === "EXPERIENCE"
                            ? "bg-gradient-to-br from-verdigirls from-30% to-cerulean to-70%"
                            : "border-[2px] border-verdigirls hvr-bounce-to-left "
                    } px-5 py-2 rounded-sm shadow-sm`}
                    onClick={() => setActiveButton("EXPERIENCE")}
                >
                    Experience
                </button>
            </div>

            <div className="min-h-screen ">
                <div className="min-h-screen flex justify-center">
                    <div className="lg:w-2/3 w-full mx-auto">
                        {activeButton === "EDUCATION" ? (
                            <RenderTimelineData data={EDUCATION} />
                        ) : (
                            <RenderTimelineData data={EXPERIENCE} />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;

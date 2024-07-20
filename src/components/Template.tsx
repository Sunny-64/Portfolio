import React from "react";
import Image from "next/image";
import skillsPng from "./../../assets/skills.png";
import { Colon, Comma, EqualSign, LeftCurlyBracket, SingleQuote, SingleQuoteWrapper, SquareBracketWrapper, Tab, WhiteSpace } from "@/utils/SpecialCharacters";
// import { test } from "@/constants/code";
const SKILLS = ['Javascript', 'Typescript', 'Reactjs','MongoDb', 'SQL','ReactNative' ,'Docker','PostgreSQL','GraphQL' ,'Nodejs', 'Docker', 'Linux']

const Template = () => {
    return (
        <div className=" md:min-w-[380px] bg-gradient-to-br from-[rgba(11,32,39,0.4)] to-[rgba(64,121,140,0.4)] border-[1px] border-cerulean  rounded-md shadow-md">
            <div className="border-b-[2px] border-verdigirls px-4 sm:px-8 py-3 rounded-t-md flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="h-3 w-3 rounded-full bg-gray-500"></div>
            </div>
            <div className="py-8 px-4 sm:px-8 opacity-90">

                <code className="font-mono text-xs md:text-sm lg:text-base">
                    <div className="blink">
                        <span className="mr-2 text-purple-500">const</span>
                        <span className="mr-2 text-amber-500">coder</span>
                        <span className="mr-2 text-cyan-600">=</span>
                        <span className="text-yellow-400">{'{'}</span>
                    </div>
                    <div>
                        <span className="ml-4 lg:ml-8 mr-2 text-red-400">name:</span>
                        <span className="text-gray-400">{`'`}</span>
                        <span className="text-green-400">B Sunny</span>
                        <span className="text-gray-400">{`',`}</span>
                    </div>
                    <div className="ml-4 lg:ml-8 mr-2">
                        <span className=" text-red-400">skills:</span>
                        <span className="text-gray-400">{`['`}</span>
                        <span className="text-green-400">React</span>
                        <span className="text-gray-400">{"', '"}</span>
                        <span className="text-green-400">NextJS</span>
                        <span className="text-gray-400">{"', '"}</span>
                        <span className="text-green-400">Redux</span>
                        <span className="text-gray-400">{"', '"}</span>
                        <span className="text-green-400">Express</span>
                        <span className="text-gray-400">{"', '"}</span>
                        <span className="text-green-400">NestJS</span>
                        <span className="text-gray-400">{"', '"}</span>
                        <span className="text-green-400">PostgreSQL</span>
                        <span className="text-gray-400">{"', '"}</span>
                        <span className="text-green-400">MongoDB</span>
                        <span className="text-gray-400">{"', '"}</span>
                        <span className="text-green-400">Docker</span>
                        <span className="text-gray-400">{"', '"}</span>
                        <span className="text-green-400">GraphQL</span>
                        <span className="text-gray-400">{"'],"}</span>
                    </div>
                    <div>
                        <span className="ml-4 lg:ml-8 mr-2 text-red-400">hardWorker:</span>
                        <span className="text-green-400">true</span>
                        <span className="text-gray-400">,</span>
                    </div>
                    <div>
                        <span className="ml-4 lg:ml-8 mr-2 text-red-400">quickLearner:</span>
                        <span className="text-green-400">true</span>
                        <span className="text-gray-400">,</span>
                    </div>
                    <div>
                        <span className="ml-4 lg:ml-8 mr-2 text-red-400">problemSolver:</span>
                        <span className="text-green-400">true</span>
                        <span className="text-gray-400">,</span>
                    </div>
                    <div>
                        <span className="ml-4 lg:ml-8 mr-2 text-red-400">hireable:</span>
                        <span className="text-cyan-400">function</span>
                        <span className="text-gray-400">{'()'} </span>
                        <span className="text-pink-400">{'{'}</span>
                    </div>
                    <div>
                        <span className="ml-8 lg:ml-16 mr-2 text-pink-400">return</span>
                        <span className="text-cyan-400">{`(`}</span>
                    </div>
                    <div>
                        <span className="ml-12 lg:ml-24 text-red-400">this<span className="text-white">.</span></span>
                        <span className="mr-2 text-red-400">hardWorker</span>
                        <span className="text-cyan-400">&amp;&amp;</span>
                    </div>
                    <div>
                        <span className="ml-12 lg:ml-24 text-red-400">this<span className="text-white">.</span></span>
                        <span className="mr-2 text-red-400">problemSolver</span>
                        <span className="text-cyan-400">&amp;&amp;</span>
                    </div>
                    <div>
                        <span className="ml-12 lg:ml-24 text-red-400">this<span className="text-white">.</span></span>
                        <span className="mr-2 text-red-400">skills.length</span>
                        <span className="mr-2 text-cyan-400">&gt;=</span>
                        <span className="text-amber-400">5</span>
                    </div>
                    <div><span className="ml-8 lg:ml-16 mr-2 text-cyan-400">{`);`}</span></div>
                    <div><span className="ml-4 lg:ml-8 text-pink-400">{`};`}</span></div>
                    <div><span className="text-yellow-400">{`};`}</span></div>
                </code>
            </div>
        </div>
    );
};

export default Template;

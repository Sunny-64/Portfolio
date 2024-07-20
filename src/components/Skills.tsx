import { SKILLS } from '@/constants/skills';
import React from 'react';

const Skills = () => {
    return (
        <section id='skills' className="min-h-screen bg-gradient-to-br from-[rgba(64,121,140,0.4)] to-[rgba(11,32,39,0.4)] py-8 my-12 flex flex-col justify-center">
            <p className="mb-12 md:mb-20 text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-cerulean to-verdigirls text-transparent bg-clip-text">Skills</p>
            <div className="w-[90%] h-full mx-auto rounded-md sm:px-5 pb-8 md:pb-16">
                <div className="flex flex-col gap-8">
                    {SKILLS.map((skill, i) => (
                        <div key={`${i}_${skill.type}`} className="md:grid md:grid-cols-4 lg:grid-cols-5">
                            <p className="text-2xl font-semibold cursor-pointer text-ash-gray col-span-1 mb-3">{skill.type}</p>
                            <div className="flex flex-wrap gap-4 md:col-span-3 lg:col-span-4">
                                {skill.repository.map((item, i) => (
                                    <p key={`${i}_${item}`} className="border-[2px] border-verdigirls px-4 py-2 rounded-full">
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

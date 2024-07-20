import React from 'react';
import Image from 'next/image';

const About = () => {
    return (
        <section id="about" className="min-h-screen py-5 flex items-center">
            <div className="w-[90%] h-full mx-auto rounded-md px-5 py-16 bg-gradient-to-br from-cerulean to-rich-black shadow-lg">
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="w-full lg:col-span-1 flex justify-center md:items-center lg:items-start">
                        <Image height={500} width={500} src={'/assets/computer.png'} className="h-[210px] w-[200px] md:w-[350px] md:h-[400px] object-cover" alt="computer" />
                    </div>
                    <div className="lg:col-span-2 xl:px-20 py-8 md:py-6">
                        <div className="bg-gradient-to-r from-ash-gray from-30% to-verdigirls to-60% inline-block bg-clip-text">
                            <p className="text-4xl md:text-6xl font-bold  text-transparent  mb-6">About Me</p>
                        </div>
                        <p className="text-justify hyphens-auto leading-7">
                            Hey there! I am B Sunny, a second-year student studying Computer Science and Engineering. Before this, I did a diploma in the same field and landed an internship at Qservices, where I worked with Node.js and Blockchain. I am really into web stuff, you know? Recently, I&prime;ve been learning about web3 and getting better at full-stack development. Since I&prime;m studying remotely, I&prime;m always looking for ways to get hands-on experience. I am a full-stack developer, which means I work on both front and back ends of websites. I love learning about new tech stuff. When I&prime;m not coding, I enjoy reading or playing chess to keep my brain active. And I am a big fan of traveling, especially to the mountains. There&prime;s just something about them that I find
                            irresistible!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

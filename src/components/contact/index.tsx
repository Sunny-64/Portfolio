import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import { GITHUB_URL, LINKEDIN_URL, TWITTER_URL, MOBILE, EMAIL } from '@/constants/contact';
import Form from './Form';

const Contact = () => {
    return (
        <section id="contact" className="p-5 min-h-[90vh]">
            <p className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-cerulean to-verdigirls text-transparent bg-clip-text">Contact</p>
            <div className="md:grid md:grid-cols-2 mt-4 md:mt-12">
                <Form />
                <div className="md:w-[85%] justify-self-end mt-8 md:mt-0">
                    <div className="flex gap-4 mt-8">
                        <a href={GITHUB_URL} target="_blank" className="rounded-full w-16 h-16 border-[2px] border-verdigirls hvr-radial-in flex justify-center items-center">
                            <FaGithub size={30} />
                        </a>
                        <a href={LINKEDIN_URL} target="_blank" className="rounded-full w-16 h-16 border-[2px] border-verdigirls hvr-radial-in flex justify-center items-center">
                            <FaLinkedin size={30} />
                        </a>
                        <a href={TWITTER_URL} target="_blank" className="rounded-full w-16 h-16 border-[2px] border-verdigirls hvr-radial-in flex justify-center items-center">
                            <FaTwitter size={30} />
                        </a>
                    </div>
                    <div className="flex flex-col gap-2 mt-8">
                        <p>{EMAIL}</p>
                        <p>{MOBILE}</p>
                    </div>
                    <div className="mt-8">
                        <p className="font-bold text-2xl">News Letter</p>
                        <p className="pr-4">I will be posting blogs on Technologies Subscribe to my News Letter if you want to Stay updated when I post a blog.</p>
                        <div className="mt-4 w-full flex ">
                            <input type="text" name="newsLetter" placeholder="Enter your Email" className="py-3 px-4 rounded-l-sm focus:outline-none w-[80%]" />
                            <button className="bg-gradient-to-r from-cerulean to-verdigirls py-3 px-2 rounded-r-sm">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center flex-col items-center">
                <hr className="mt-20 border-[1px] w-2/3 text-c border-verdigirls " />
                <p className="mt-8">Portfolio &copy;reated by Sunny</p>
            </div>
        </section>
    );
};

export default Contact;

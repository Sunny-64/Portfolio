import React from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { IProject } from '@/types';

const LeftImageCard = ({item} : {item : IProject}) => {
    return (
        <div className="md:w-3/4 xl:w-1/2 border-[3px] border-verdigirls sm:grid sm:grid-cols-3 rounded-lg min-h-[300px] transition-all duration-1000 ease-in-out">
            <div className="md:col-span-1">
                <Image height={500} width={500} className="h-full w-full object-cover rounded-l-lg" src={item?.imageUrl} alt="img" />
            </div>
            <div className="col-span-2 p-5">
                <p className="text-3xl font-semibold mb-3">{item?.name}</p>
                <p className="mb-1 leading-8">{item?.description}</p>
                <p className="mb-3 font-medium opacity-70">{item?.techStack}</p>
                <div className="flex justify-between">
                    <a href={item?.url} className="rounded-full border-[2px] border-verdigirls px-4 py-1 flex justify-center items-center hvr-wobble-bottom cursor-pointer">
                        Demo
                    </a>
                    <a href={item?.github}>
                        <FaGithub size={30} />{' '}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LeftImageCard;

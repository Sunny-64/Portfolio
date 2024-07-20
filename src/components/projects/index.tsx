'use client';
import React, { useEffect, useState } from 'react';
import { PROJECTS } from '@/constants/constants';
import { IProject } from '@/types';
import { PAGINATION_ITEMS_PER_PAGE, paginationList } from '@/utils';
import PlaceHolder from '@/utils/PlaceHolder';
import LeftImageCard from './LeftImageCard';
import RightImageCard from './RightImageCard';

const Projects = () => {
    const [sliceTracker, setSliceTracker] = useState<number[]>([0, 3]);
    const [projectsList, setProjectsList] = useState<IProject[]>(PROJECTS.slice(sliceTracker[0], sliceTracker[1]));
    const [activePage, setActivePage] = useState<number>(1);

    useEffect(() => {
        setProjectsList(() => PROJECTS.slice(sliceTracker[0], sliceTracker[1]));
    }, [sliceTracker]);

    const handleUpdatePagination = (val: number) => {
        setSliceTracker(() => [PAGINATION_ITEMS_PER_PAGE * val, PAGINATION_ITEMS_PER_PAGE * (val + 1) > PROJECTS.length ? PROJECTS.length : PAGINATION_ITEMS_PER_PAGE * (val + 1)]);
        setActivePage(val);
    };

    return (
        <section id="projects" className="bg-gradient-to-br from-[rgba(11,32,39,0.4)] to-[rgba(64,121,140,0.4)] p-5 mb-8 pb-12">
            <p className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-cerulean to-verdigirls text-transparent bg-clip-text py-3">Projects</p>

            <div className="projects flex flex-col gap-8 items-center mt-8">
                {projectsList?.map((item: IProject, index: number) =>
                    index % 2 === 0 ? (
                        <LeftImageCard key={index} item={item}/>
                    ) : (
                        <RightImageCard key={index} item={item}/>
                    ),
                )}
                {Array.from(Array(PAGINATION_ITEMS_PER_PAGE - projectsList.length), (e, i) => (
                    <PlaceHolder key={i} styles="md:w-3/4 xl:w-1/2 border-[3px]  border-transparent rounded-lg min-h-[300px]" />
                ))}
            </div>
            <div className="mt-12 flex gap-4 justify-center">
                {PROJECTS.length > PAGINATION_ITEMS_PER_PAGE &&
                    paginationList(PROJECTS.length)?.map((val: number) => (
                        <p key={val} className={` ${activePage === val ? ' bg-verdigirls' : 'bg-cerulean'} rounded-sm min-w-7 py-1 text-center px-1 hover:cursor-pointer font-medium`} onClick={() => handleUpdatePagination(val)}>
                            {val + 1}
                        </p>
                    ))}
            </div>
        </section>
    );
};

export default Projects;

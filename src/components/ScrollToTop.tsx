'use client'
import useScroll from '@/utils/useScroll';
import { IoArrowUpCircleSharp } from "react-icons/io5";

const ScrollToTop = () => {
    const scrollYPos = useScroll(); 

    const scroll = () => window.scrollTo(0, 0);
    return (
        <button onClick={scroll} className={`bg-cerulean transition-opacity duration-300  ${Math.round(scrollYPos) > 600 ? 'opacity-90 hover:cursor-pointer': 'opacity-0'} font-bold text-2xl fixed bottom-10 right-10 w-12 h-12 rounded-md flex justify-center items-center `}><IoArrowUpCircleSharp /></button>
    )
}

export default ScrollToTop 
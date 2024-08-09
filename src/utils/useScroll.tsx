'use client'
import { useCallback, useEffect, useState } from 'react'

const useScroll = () => {
    const [scrollYPos, setScrollYPos] = useState(0); 
    const onScroll = useCallback((event: Event) => {
        const { scrollY } = window;
        setScrollYPos(scrollY);
    }, []);
  
    useEffect(() => {
      //add eventlistener to window
      window.addEventListener("scroll", onScroll, { passive: true });
      // remove event on unmount to prevent a memory leak with the cleanup
      return () => {
         window.removeEventListener("scroll", onScroll);
      }
    }, []);
    return scrollYPos; 
}

export default useScroll
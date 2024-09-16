'use client'; 
import { MutableRefObject,  useEffect } from "react"

const useDetectScroll = (ref: MutableRefObject<HTMLElement | null>, cb: () => void) => {
    useEffect(() => {
        const handleScroll = (event: Event) => {
            if(ref.current && !ref.current.contains(event.target as Node)) {
                console.log('scrolling')
                cb()
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll); 
        } 
    }, [ref, cb]); 
}

export default useDetectScroll
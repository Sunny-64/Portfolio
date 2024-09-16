'use client'; 
import { MutableRefObject,  useEffect } from "react"

const useDetectClickOutside = (ref: MutableRefObject<HTMLElement | null>, cb: () => void) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if(ref.current && !ref.current.contains(event.target as Node)) {
                cb()
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside); 
        } 
    }, [ref, cb]); 
}

export default useDetectClickOutside
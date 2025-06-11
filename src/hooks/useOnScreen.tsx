'use client'
import { useState, useEffect, useRef, RefObject } from "react";

export const useOnScreen = (threshold : number = 0.1) : [RefObject<HTMLDivElement | null>, boolean] => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting),
            { threshold }
        );

        observer.observe(ref.current);
        
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
            observer.disconnect();
        };

    }, [threshold]);

    return [ref, isIntersecting];
};
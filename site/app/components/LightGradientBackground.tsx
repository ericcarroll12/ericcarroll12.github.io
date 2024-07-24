'use client';
import React, { useRef, useEffect, Children } from "react";



const LightGradientBackground: React.FC = () =>{
    const gradientRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    const handleMouseMove = (e:MouseEvent) => {
        const { clientX: x, clientY: y} = e;
        const { innerWidth: width, innerHeight: height} = window;

        const xPercent = (x/width) *100;
        const yPercent = (y/height) *100;

        if (gradientRef.current) {
            gradientRef.current.style.background = `
                radial-gradient(circle at ${xPercent}% ${yPercent}%, #acd7ff, #ffffff)
            `;
        }

    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
        window.removeEventListener('mousemove', handleMouseMove)
    };
    },[]);

    
    return <div ref={gradientRef} className="fixed inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[#acd7ff] to-[transparent] transition duration-1000 ease-in-out"></div>;
}

export default LightGradientBackground;
'use client';
import { useTheme } from "next-themes";
import React, { useRef, useEffect, Children } from "react";



const DarkGradientBackground: React.FC = () =>{
    const gradientRef = useRef<HTMLDivElement>(null);
        
    useEffect(() => {
    const handleMouseMove = (e:MouseEvent) => {
        const { clientX: x, clientY: y} = e;
        const { innerWidth: width, innerHeight: height} = window;

            

        let xPercent = (x/width) *100;
        let yPercent = (y/height) *100;

        if (!y) yPercent=10;
        if (!x) xPercent=10;

        if (gradientRef.current) {
            gradientRef.current.style.background = `
                radial-gradient(circle at ${xPercent}% ${yPercent}%,#1d4fd87d 0%, transparent 100%)
            `;
        }

    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
        window.removeEventListener('mousemove', handleMouseMove)
    };
    },[]);

    
    return <div ref={gradientRef} className="fixed inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[#1d4fd87d] to-[transparent] transition duration-1000 ease-in-out"></div>;
}

export default DarkGradientBackground;
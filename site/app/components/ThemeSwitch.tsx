'use client'

import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import LightGradientBackground from "./LightGradientBackground"
import DarkGradientBackground from "./DarkGradientBackground"

export default function ThemeSwitch(){
    const [mounted, setMounted] = useState(false);
    const {setTheme, resolvedTheme} = useTheme();
    
    useEffect(() => setMounted(true), [])

    if (!mounted) return (
        <div>
            <p>
                bruh wtf?
            </p>
        </div>
    )

    if (resolvedTheme === 'dark'){
        return(
        <div className="">
            <FiSun onClick={() => setTheme("light")} className="cursor-pointer"/>
            <DarkGradientBackground/>
        </div>
        )
    }

    if (resolvedTheme === "light"){
        return(
        <div className="">
            <FiMoon onClick={() => setTheme("dark")} className="cursor-pointer"/>
            <LightGradientBackground/>
        </div>
        )
    }
}
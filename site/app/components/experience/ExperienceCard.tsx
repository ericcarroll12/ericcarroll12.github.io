'use client'
import React, { useState } from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import useWindowDimensions from "@/app/hooks/getWindow";

export interface CardProps{
    range:string;
    title:string;
    subtitle:string;
    description:string;

}

export default function ExperienceCard(props:CardProps){
    
    return(
        <div className="flip-card relative h-48 p-4 backdrop-blur-md border border-white/40 bg-gradient-to-r from-[rgba(197,195,195,0.4)] to-[transparent] box-content rounded-md shadow-xl overflow-hidden cursor-pointer transition-all duration-700">
            <div className="flip-card-inner">
                <CardFront title={props.title} subtitle={props.subtitle} range={props.range}/>
                <CardBack description={props.description}/>
            </div>
        </div>
    );
}
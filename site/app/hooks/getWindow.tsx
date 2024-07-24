import { useEffect, useState } from "react"; 

function getWindow(){
    const { innerWidth:width, innerHeight: height} = window;
    return{
        width,
        height
    };
}

export default function useWindowDimensions(){
    if(typeof window !=='undefined'){
    const [windowDimensions, setWindowDimensions] = useState(getWindow());

    useEffect(() => {
        function handleResize(){
            setWindowDimensions(getWindow());
        }
        window.addEventListener('resize', handleResize);

    }, []);
    return windowDimensions;}
}
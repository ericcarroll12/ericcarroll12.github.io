import { Cantarell } from "next/font/google";
import NameCard from "../NameCard";
import ThemeSwitch from "../ThemeSwitch";
import NavLinks from "./NavLinks"
import SocialLinks from "./SocialLinks";


export default function SideNav(){
    return(
    <div className="sticky top-4 flex justify-between max-h-screen py-24 flex-col">
        <div>
            <div className="w-full px-5">
                <NameCard/>
            </div>
            <div className="w-full px-5">
                <NavLinks/>
            </div>
        </div>
        <SocialLinks/>
    </div>)
}
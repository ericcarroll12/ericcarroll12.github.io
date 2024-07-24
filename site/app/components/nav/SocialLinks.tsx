import { TiSocialLinkedin, TiSocialGithub, TiMail } from "react-icons/ti"


export default function SocialLinks(){
    return(
    <div className="flex space-x-4 mx-5 mt-16 md:mt-20 lg:mt-40">
        <a href="https://www.linkedin.com/in/eric-carroll-9b17712b2/" target="_blank">
            <div className="p-1 rounded-full backdrop-blur-md border transition-all duration-500 border-white/40 bg-gradient-to-l from-transparent via-[rgba(197,195,195,0.4)] to-[transparent] bg-size-200 bg-right box-content shadow-xl cursor-pointer hover:bg-left">
                <TiSocialLinkedin size={28}/>
            </div>
        </a>
        <a href="https://github.com/ericcarroll12" target="_blank">
            <div className="p-1 rounded-full backdrop-blur-md border transition-all duration-500 border-white/40 bg-gradient-to-l from-transparent via-[rgba(197,195,195,0.4)] to-[transparent] bg-size-200 bg-right box-content shadow-xl cursor-pointer hover:bg-left">
                <TiSocialGithub size={28}/>
            </div>
        </a>
        <a href="mailto:ericcarroll120@gmail.com">
            <div className="p-1 rounded-full backdrop-blur-md border transition-all duration-500 border-white/40 bg-gradient-to-l from-transparent via-[rgba(197,195,195,0.4)] to-[transparent] bg-size-200 bg-right box-content shadow-xl cursor-pointer hover:bg-left">
                <TiMail size={28}/>
            </div>            
        </a>

    </div>)
}
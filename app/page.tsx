import AboutMe from "../components/AboutMe";
import SideNav from "../components/nav/SideNav";
import Experience from "../components/experience/Experience";
import DarkGradientBackground from "../components/DarkGradientBackground";
import LightGradientBackground from "../components/LightGradientBackground";
import ThemeSwitch from "../components/ThemeSwitch";
import Projects from "../components/projects/Projects";
import SocialLinks from "../components/nav/SocialLinks";

export default function Home() {
  return (
    <main className="">
      <ThemeSwitch/>

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 md:flex md:px-12 lg:px-24">    
        <div className="w-full">
          <SideNav/>
        </div>

        <div className="w-full py-0 md:pt-24">
          <div id="about">
            <AboutMe/>            
          </div>
          <div id="experience">
            <Experience/>            
          </div>
          <div id="projects">
            <Projects/>  
          </div>
        <p className="text-xs py-8 mt-8">Portfolio created with NextJs and TailwindCSS. Contact ericcarroll120@gmail.com for questions or 
          project oprotunities.
        </p>
        </div>

      </div>
    </main>
  );
}

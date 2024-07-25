import ProjectCard from "./ProjectCard";


export default function Projects(){
    return(
        <div className="space-y-10">
            <div>
                <h2 className="">Projects</h2>
            </div>
            <div>
                <ProjectCard
                title="BasicLisp"
                description="A handwritten compiler and interpreter for the Lisp programming language. Written entirely in C++, this is my most active personal project. Features custom tokenizer, recursive descent parser, and semantic analyzer." 
                imgPath="/static/compiler.jpg"
                imgAlt="Compiler image"
                link="https://github.com/ericcarroll12/basicLisp"
                />                
            </div>
            <div>
                <ProjectCard
                title="Self-driving maze robot"
                description="Fully autonomous self-driving robot that solves mazes. It is controlled by an Arduino Mega and uses infrared and ultrasonic sensors to explore the maze then calculates the most efficient route back to the start."
                imgPath="/static/robot.jpg"
                imgAlt="Robot"
                link="https://www.youtube.com/watch?v=fuwcUTcj-0s&t=57s"
                />
            </div>

        </div>
        
    )
}
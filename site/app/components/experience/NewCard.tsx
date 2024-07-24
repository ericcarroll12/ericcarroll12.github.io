export interface cardProps{
    job_title:string;
    job_subtitle:string;
    range:string;
    description:string;
    tags?:string[];
    link?:string;
}

export default function NewCard(props:cardProps){
    return(
    <div>
        <a href={props?.link} target="_blank">
            <div className="flex group py-4 backdrop-blur-md border transition-all duration-500 border-white/40 bg-gradient-to-l from-transparent via-[rgba(197,195,195,0.4)] to-[transparent] bg-size-200 bg-right box-content rounded-md shadow-xl cursor-pointer hover:bg-left">
                <div className="pl-4">
                    <div className="">
                        <p>Range:</p>
                    </div>
                    <div>
                        <p>{props.range}</p>
                    </div>
                </div>
                <div className="px-4">
                    <div className="">
                        <div className="">
                            <h4 className="group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-all duration-300">{props.job_title}</h4>
                        </div> 
                        <div className="">
                            <h5 className="font-normal">{props.job_subtitle}</h5>
                        </div>
                    </div>
                    <div>
                        <p className="text-xs">{props.description}</p>
                    </div>
                    <div>
                        {props.tags && (
                            <ul className="flex flex-wrap space-x-2">
                                {props.tags.map((tag, i) =>(
                                    <li key={i} className="mr-1 mt-2 ">
                                        <div className="py-2 px-4 text-sm bg-teal-900/10 text-teal-600 dark:bg-teal-400/10 dark:text-teal-300 rounded-full">
                                            {tag}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div> 
            </div>
        </a>
    </div>
    )
}
import Image from 'next/image';

export interface cardProps{
    title:string;
    description:string;
    imgPath:string;
    imgAlt:string;
    link?:string;
}

export default function ProjectCard(props:cardProps){
    return(
    <a href={props?.link} target='_blank'>
        <div className='flex group py-4 backdrop-blur-md border transition-all duration-500 border-white/40 bg-gradient-to-l from-transparent via-[rgba(197,195,195,0.4)] to-[transparent] bg-size-200 bg-right box-content rounded-md shadow-xl cursor-pointer hover:bg-left items-center'>
            <div className='w-32 md:w-48 pl-4'>
                <Image
                    src={props.imgPath}
                    width={500}
                    height={375}
                    alt={props.imgAlt}
                    style={{
                        objectFit: "cover",
                        borderRadius: "8px",
                    }}className='h-full w-auto'
                />
            </div>
            <div className='flex-1 px-4'>
                <div>
                    <h4 className='group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-all duration-300'>{props.title}</h4>
                </div>
                <div>
                    <p className='text-xs'>{props.description}</p>
                </div>
            </div>
        </div>
    </a>
    )
}
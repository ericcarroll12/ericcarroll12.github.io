export interface cardBackProps{
    description:string;
}

export default function CardBack(props:cardBackProps){
    return(
    <div className="flip-card-back absolute inset-0 w-full h-full flex justify-center items-center transition-all z-10 card-back">
                <div className="flex flex-col justify-center px-4">
                    <div className="py-2">
                    <p>{props?.description}</p>
                    </div>
                </div>
    </div>)
}
export interface cardFrontProps{
    range:string;
    title:string;
    subtitle:string;
}
export default function CardFront(props:cardFrontProps){
    return(
        <div className="flip-card-front absolute inset-0 w-full h-full flex justify-center items-center">
            <div className="flex w-full">
                <div className="flex flex-col justify-center px-4">
                    <div className="">
                        <p>Range:</p>
                    </div>
                    <div className="">
                        <p>{props.range}</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center px-4 w-full">
                    <div className="py-2 text-center">
                        <h2 >{props.title}</h2>
                    </div>
                    <div>
                        <h4>{props.subtitle}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
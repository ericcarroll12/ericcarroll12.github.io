import Link from "next/link"

export default function NavLinks(){
    return(
        <div className="">
            <ul className="flex "> 
                <Link href='#about'>
                    <li className="pr-5">
                        <p className="relative group font-semibold">
                            <span>About</span>
                            <span className="absolute -bottom-1 left-1/2 w-0.5 h-1 rounded-r-full bg-teal-600 dark:bg-teal-500 group-hover:w-1/2 group-hover:transition-all"></span>
                            <span className="absolute -bottom-1 right-1/2 w-0.5 h-1 rounded-l-full bg-teal-600 dark:bg-teal-500 group-hover:w-1/2 group-hover:transition-all"></span>
                        </p>
                    </li>
                </Link>
                <Link href='#experience'>
                    <li className="pr-5">
                        <p className="relative group font-semibold">
                            <span>Experience</span>
                            <span className="absolute -bottom-1 left-1/2 w-0.5 h-1 rounded-r-full bg-teal-600 dark:bg-teal-500 group-hover:w-1/2 group-hover:transition-all"></span>
                            <span className="absolute -bottom-1 right-1/2 w-0.5 h-1 rounded-l-full bg-teal-600 dark:bg-teal-500 group-hover:w-1/2 group-hover:transition-all"></span>
                        </p>
                    </li>
                </Link>
                <Link href='#projects'>
                    <li className="pr-5">
                        <p className="relative group font-semibold">
                            <span>Projects</span>
                            <span className="absolute -bottom-1 left-1/2 w-0.5 h-1 rounded-r-full bg-teal-600 dark:bg-teal-500 group-hover:w-1/2 group-hover:transition-all"></span>
                            <span className="absolute -bottom-1 right-1/2 w-0.5 h-1 rounded-l-full bg-teal-600 dark:bg-teal-500 group-hover:w-1/2 group-hover:transition-all"></span>
                        </p>
                    </li>
                </Link>
            </ul>
        </div>
    )
}
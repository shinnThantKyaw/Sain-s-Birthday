"use client"

import {useRouter} from "next/navigation";

interface Props{
    redirectUrl: string;
    text:string
}
export default function AgreeButton({redirectUrl,text}:Props) {
    const router = useRouter()

    const handleClickYes = () => {
        router.push(redirectUrl)
    }
    return(
        <nav className="z-10">
            <button onClick={handleClickYes} className="relative overflow-hidden group bg-gradient-to-br from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                        <span className="relative z-10 flex items-center gap-2">
                            {text}
                            <span className="text-xl">💖</span>
                        </span>
                <span className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-all duration-500"></span>
            </button>
        </nav>
    )
}
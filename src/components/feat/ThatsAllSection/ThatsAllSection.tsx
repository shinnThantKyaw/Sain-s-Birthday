import Image from "next/image";

export default function ThatsAllSection() {
    return (
        <section className="w-full flex flex-col items-center justify-center">
            <h1 className="font-semibold font-romantic text-xl text-center mb-5"> That's all! I hope you would like it my little Sain. Arr Bwarr... 😚❤️</h1>
           <div className={"relative sm:shadow-xl overflow-hidden w-[160px] h-[160px] sm:w-[220px] sm:h-[220px]"}>
               <Image
                   className="object-cover"
                   fill
                   alt="dudu-excited"
                   src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
               />
           </div>

        </section>
    )
}
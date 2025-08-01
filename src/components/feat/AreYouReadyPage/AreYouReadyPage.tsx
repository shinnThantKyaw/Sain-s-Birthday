import Image from "next/image";
import AgreeButton from "@/components/CustomUi/CustomButtons/AgreeButton";

export default function AreYouReadyPage() {
    return(
        <section className="w-screen h-screen bg-pink-50 flex justify-center items-center">
            <article className="w-[90vw] max-w-md h-[80vh] bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 flex flex-col justify-center items-center gap-6 relative overflow-hidden">

                <div className="absolute -top-10 -left-10 text-pink-200 text-6xl">🌸</div>
                <div className="absolute -bottom-8 -right-8 text-rose-200 text-7xl">🌹</div>
                <div className="absolute top-20 right-5 text-pink-200 text-4xl">💮</div>

                <h1 className="text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-500 leading-snug z-10">
                    My little Sain, are you ready for your special gift? 💝
                </h1>

                <div className="w-full flex justify-center relative">
                    <div className="absolute -inset-2 bg-pink-200 rounded-full blur-md opacity-60"></div>
                    <Image
                        className="rounded-full border-[6px] border-pink-300 shadow-lg z-10"
                        width={200}
                        height={200}
                        alt="dudu-asking"
                        src="https://media1.tenor.com/m/hioBXXrWouwAAAAC/dudu-shaking-heads-dudu-seating.gif"
                    />
                </div>

               <AgreeButton redirectUrl="/lets-see-it" text="Yes!"/>


                <div className="absolute top-1/4 left-1/4 text-pink-300 text-xl animate-float">💗</div>
                <div className="absolute bottom-1/3 right-1/3 text-rose-300 text-xl animate-float-delay">💓</div>
            </article>
        </section>
    )
}
import Image from "next/image";
import AgreeButton from "@/components/CustomUi/CustomButtons/AgreeButton";

export default function LetSeeItPage() {
    return (
        <section className="w-full min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 flex justify-center items-center p-4 sm:p-6">
            <article className="w-full max-w-md h-auto min-h-[70vh] sm:h-[85vh] bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-6 sm:p-8 flex flex-col justify-center items-center gap-6 sm:gap-8 relative overflow-hidden border-2 border-pink-100">
                {/* Romantic decorations - scaled down for mobile */}
                <div className="absolute -top-8 -left-8 sm:-top-12 sm:-left-12 text-pink-200/80 text-5xl sm:text-7xl rotate-12">🌸</div>
                <div className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 text-rose-200/80 text-6xl sm:text-8xl -rotate-12">🌹</div>
                <div className="absolute top-16 right-4 sm:top-24 sm:right-8 text-pink-200/80 text-3xl sm:text-5xl rotate-6">💮</div>
                <div className="absolute bottom-16 left-4 sm:bottom-24 sm:left-8 text-rose-200/80 text-3xl sm:text-5xl -rotate-6">🌷</div>

                {/* Sparkle effect */}
                <div className="absolute inset-0 bg-[url('/sparkle-pattern.svg')] bg-[length:100px] sm:bg-[length:200px] opacity-10 mix-blend-overlay pointer-events-none"></div>

                <h1 className="text-center text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600 leading-tight sm:leading-snug z-10 font-[Pacifico] drop-shadow-md px-2">
                    {` Ok, let's see it, my little Sain! ✨`}
                </h1>

                <div className="w-full flex justify-center relative mt-2 sm:mt-4 mb-4 sm:mb-6">
                    <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full blur-md sm:blur-lg opacity-40 animate-pulse"></div>
                    <div className="relative rounded-full border-[6px] sm:border-[8px] border-pink-200 shadow-lg sm:shadow-xl overflow-hidden w-[160px] h-[160px] sm:w-[220px] sm:h-[220px]">
                        <Image
                            className="object-cover"
                            fill
                            alt="dudu-excited"
                            src="https://media.tenor.com/iQouG5RGazIAAAAj/bubu-dudu-dudu-dance.gif"
                        />
                    </div>
                </div>

                <div className="z-10 w-full flex justify-center max-w-[280px] sm:max-w-xs transform transition-all hover:scale-105">
                    <AgreeButton
                        redirectUrl="/wish"
                        text="Ha Ha, Ok!"

                    />
                </div>

                {/* Animated elements - smaller on mobile */}
                <div className="absolute top-[15%] left-[15%] sm:top-1/4 sm:left-1/4 text-pink-300 text-xl sm:text-2xl animate-float">💗</div>
                <div className="absolute bottom-[30%] right-[30%] sm:bottom-1/3 sm:right-1/3 text-rose-300 text-xl sm:text-2xl animate-float-delay">💓</div>
                <div className="absolute top-[30%] right-[15%] sm:top-1/3 sm:right-1/4 text-pink-400 text-lg sm:text-xl animate-float-delay-2">✨</div>
                <div className="absolute bottom-[20%] left-[25%] sm:bottom-1/4 sm:left-1/3 text-rose-400 text-lg sm:text-xl animate-float">✨</div>
            </article>
        </section>
    );
}
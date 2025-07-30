import Image from "next/image";

export default function HappyBirthdaySection() {
    return(
        <section className="w-[90%] ">

            <h1 className="mb-5  font-bold font-romantic text-2xl text-pink-500 text-center">Happy Birthday my little Sain ❤️🎂🎵</h1>
            <div className="w-full flex justify-center relative">
                <div className="absolute -inset-2 bg-pink-200 rounded-full blur-md opacity-60"></div>
                <Image
                    className="rounded-full border-[6px] border-pink-300 shadow-lg z-10"
                    width={200}
                    height={200}
                    alt="dudu-asking"
                    src="https://media.tenor.com/ZAQGhxEls20AAAAj/bubu-dudu-sseeyall.gif"
                />
            </div>

        </section>
    )
}
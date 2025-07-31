"use client"

import Image from "next/image";
import { motion } from "framer-motion";

export default function ThatsAllSection() {
    return (
        <motion.section
            className="w-full flex flex-col items-center justify-center gap-8 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
        >
            <h1 className="font-semibold font-romantic text-2xl text-center text-pink-600 max-w-2xl px-4">
                {`That's all. I hope you like it my little Sain. Arr Bwarr... 😚❤️`}
            </h1>

            <motion.div
                className="relative shadow-xl overflow-hidden w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] rounded-full border-4 border-pink-200"
                animate={{
                    rotate: [0, 5, -5, 5, -5, 0],
                    scale: [1, 1.05, 1, 1.05, 1]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                }}
            >
                <Image
                    className="object-cover"
                    fill
                    alt="dudu sending kisses"
                    src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
                />
            </motion.div>

            <motion.p
                className="text-pink-500 mt-6 text-lg"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                I love you! 💝
            </motion.p>
        </motion.section>
    )
}
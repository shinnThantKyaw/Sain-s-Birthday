'use client'

import Image from "next/image";
import { motion } from 'framer-motion';

export default function HappyBirthdaySection() {
    return(
        <section className="w-[90%] max-w-3xl">
            <motion.h1
                className="mb-8 font-bold font-romantic text-3xl md:text-4xl text-pink-600 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                Happy Birthday my little Sain ❤️🎂🎵
            </motion.h1>

            <motion.div
                className="w-full flex justify-center relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
            >
                <div className="absolute -inset-2 bg-pink-200 rounded-full blur-md opacity-60 animate-pulse"></div>
                <div className="relative z-10">
                    <div className="absolute -inset-4 rounded-full border-4 border-pink-300 animate-spin-slow opacity-30"></div>
                    <Image
                        className="rounded-full border-[6px] border-pink-300 shadow-lg z-10 hover:scale-105 transition-transform duration-300"
                        width={220}
                        height={220}
                        alt="dudu-asking"
                        src="https://media.tenor.com/ZAQGhxEls20AAAAj/bubu-dudu-sseeyall.gif"
                    />
                </div>
            </motion.div>
        </section>
    )
}
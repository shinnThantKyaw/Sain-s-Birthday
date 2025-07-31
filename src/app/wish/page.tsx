"use client"

import MusicPlayer from "@/components/feat/MusicPlayer/MusicPlayer";
import HappyBirthdaySection from "@/components/feat/HappyBirthdaySection/HappyBirthdaySection";
import WishLetter from "@/components/feat/WishLetter/WishLetter";
import BirthdayGirlPics from "@/components/feat/BirthdayGirlPics/BirthdayGirlPics";
import ThatsAllSection from "@/components/feat/ThatsAllSection/ThatsAllSection";
import { motion  } from 'framer-motion';


export default function WishPage() {
    return(
        <div className="w-screen min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 flex flex-col py-[50px] justify-start items-center gap-16 overflow-x-hidden">
            <MusicPlayer/>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full flex flex-col items-center gap-16"
            >
                <HappyBirthdaySection/>
                <BirthdayGirlPics/>
                <WishLetter/>
                <ThatsAllSection/>
            </motion.div>
        </div>
    )
}
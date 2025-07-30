"use client";

import {Pause, Play} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
    const musicRef = useRef<HTMLAudioElement>(null);
    const [hasMounted, setHasMounted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleClickPlay = ()=>{
        musicRef?.current?.play()
        setIsPlaying(true)
    }
    const handleClickPause = ()=>{
        musicRef?.current?.pause()
        setIsPlaying(false)
    }

    useEffect(() => {
        setHasMounted(true);
    }, []);

    useEffect(() => {
        const music = musicRef.current;

        if (!music) {
            setHasMounted(!hasMounted)
            return ;
        }

        handleClickPlay()

        return () => {
            handleClickPause()
            music.currentTime = 0;
        };
    }, [hasMounted]);

    if (!hasMounted) return null;

    return (
        <section>
            <audio ref={musicRef} loop>
                <source src="/music/violin.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <motion.button
                className="fixed top-5 right-5 z-50 bg-pink-100/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-pink-200 transition-colors"
                onClick={isPlaying ? handleClickPause : handleClickPlay}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={isPlaying ? "Pause music" : "Play music"}
            >
                {isPlaying ? <Pause className="text-pink-700" /> : <Play className="text-pink-700" />}
            </motion.button>
        </section>
    );
}
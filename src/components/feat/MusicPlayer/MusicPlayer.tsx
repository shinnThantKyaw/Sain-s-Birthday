"use client";

import {Pause, Play} from "lucide-react";
import { useEffect, useRef, useState } from "react";


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
            <button className={"fixed top-2 right-5"} onClick={isPlaying?handleClickPause:handleClickPlay}>
                {isPlaying?<Pause />:<Play />}
            </button>
        </section>
    );
}

'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function BirthdayGirlPics() {
    const [currentSection, setCurrentSection] = useState(0)
    const pics = ["/pics/Pic1.jpg", "/pics/Pic2.jpg", "/pics/Pic3.jpg", "/pics/Pic4.jpg"]
    const sliderRef = useRef<HTMLDivElement>(null)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)

    // Auto-scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isDragging) {
                setCurrentSection(prev => (prev < pics.length - 1 ? prev + 1 : 0))
            }
        }, 3000) // Change slide every 3 seconds

        return () => clearInterval(interval)
    }, [isDragging, pics.length])

    // Touch and drag events for mobile
    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true)
        setStartX(e.touches[0].pageX)
        if (sliderRef.current) {
            setScrollLeft(sliderRef.current.scrollLeft)
        }
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return
        if (sliderRef.current) {
            const x = e.touches[0].pageX
            const walk = (x - startX) * 2 // Adjust sensitivity
            sliderRef.current.scrollLeft = scrollLeft - walk
        }
    }

    const handleTouchEnd = () => {
        setIsDragging(false)
        if (sliderRef.current) {
            const scrollPosition = sliderRef.current.scrollLeft
            const slideWidth = sliderRef.current.scrollWidth / pics.length
            const newSection = Math.round(scrollPosition / slideWidth)
            setCurrentSection(Math.max(0, Math.min(newSection, pics.length - 1)))
        }
    }

    return (
        <motion.section
            className="mt-10 lg:mt-0 xl:h-[100vh] lg:pt-[100px] flex flex-col justify-between items-center gap-8 p-5 w-full max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
        >
            <h1 className="font-semibold font-romantic text-2xl text-center  text-pink-600">
                Here's my beautiful birthday girl ❤️
            </h1>

            <section
                className="w-full max-w-4xl h-[50vh] md:h-[60vh] rounded-3xl overflow-hidden relative"
                ref={sliderRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="w-full h-full rounded-3xl shadow-lg flex justify-start transition-transform duration-300 ease-out"
                    style={{
                        transform: `translateX(-${currentSection * 100}%)`,
                        touchAction: 'pan-y'
                    }}
                >
                    {pics.map((pic, index) => (
                        <div
                            key={index}
                            className="relative min-w-full h-full border-2 border-pink-100 aspect-video overflow-hidden rounded-xl"
                        >
                            <img
                                src={pic}
                                alt={`Birthday girl photo ${index + 1}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {pics.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSection(index)}
                            className={`w-3 h-3 rounded-full transition-all ${currentSection === index ? 'bg-pink-600 w-6' : 'bg-pink-200'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </section>

            <div className="flex gap-4 mt-4">
                <button
                    onClick={() => setCurrentSection(prev => (prev > 0 ? prev - 1 : pics.length - 1))}
                    className="px-4 py-2 bg-pink-100 rounded-full text-pink-700 hover:bg-pink-200 transition-colors"
                    aria-label="Previous photo"
                >
                    ←
                </button>
                <button
                    onClick={() => setCurrentSection(prev => (prev < pics.length - 1 ? prev + 1 : 0))}
                    className="px-4 py-2 bg-pink-100 rounded-full text-pink-700 hover:bg-pink-200 transition-colors"
                    aria-label="Next photo"
                >
                    →
                </button>
            </div>
        </motion.section>
    )
}
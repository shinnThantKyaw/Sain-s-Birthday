'use client'

import { useState } from 'react'


export default function BirthdayGirlPics() {
    const [currentSection, setCurrentSection] = useState(0)
    const pics = ["/pics/Pic1.jpg", "/pics/Pic2.jpg", "/pics/Pic3.jpg", "/pics/Pic4.jpg"];
    return (
        <section className="mt-10 lg:mt-0  xl:h-[100vh] lg:pt-[100px] flex flex-col justify-between items-center gap-5 p-5">
            <h1 className="font-semibold font-romantic text-xl text-center mb-5">
                Here is my birthday girl ❤️
            </h1>
            <section className=" w-[90vw] md:w-[80vw] h-[50vh] md:h-[350px] lg:w-[55vw] lg-h-[40vh] xl:h-[60vh] rounded-3xl overflow-hidden">
                <div
                    className="w-full h-full rounded-3xl shadow-md flex justify-start transition-transform duration-[200ms] ease-in"
                    style={{ transform: `translateX(-${currentSection * 100}%)` }}
                >
                    {pics.map((pic,index) => (
                        <div
                            key={index}
                            className="relative min-w-full h-full  border  aspect-video overflow-hidden rounded-xl shadow-md"
                        >
                            <img
                                src={pic}
                                alt={`roomImage-${index}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </section>
            <nav className="w-full flex justify-center gap-5">
                {pics.map((_, index) => (
                    <button
                        key={index}
                        className={`w-4 h-4 rounded-full ${currentSection === index ? 'bg-black' : 'bg-transparent border-2 border-[#E5E7EB]'}`}
                        onClick={() => setCurrentSection(index)}
                    />
                ))}
            </nav>
        </section>
    )
}

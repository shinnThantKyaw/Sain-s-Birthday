'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export default function WishLetter() {
    const [open, setOpen] = useState(false);
    const [typedText, setTypedText] = useState('');
    const [skip, setSkip] = useState(false);

    const fullText = `Dear [Her Name],\n\nYou're the most special part of my life. 💚\nWishing you a day filled with joy and love.\n\n— With Love 💝`;

    useEffect(() => {
        if (skip) {
            setTypedText(fullText);
            return;
        }

        if (!open) return;

        let i = 0;
        const interval = setInterval(() => {
            setTypedText((prev) => prev + fullText[i-1]);
            i++;
            if (i >= fullText.length) clearInterval(interval);
        }, 85);

        return () => clearInterval(interval);
    }, [open, skip, fullText]);

    const handleClose = () => {
        setOpen(false);
        setTypedText('');
        setSkip(false);
    };

    return (
        <div className="text-center mt-20">
            <article className="w-full max-w-md h-auto min-h-[70vh] sm:h-[85vh] bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-6 sm:p-8 flex flex-col justify-center items-center gap-6 sm:gap-8 relative overflow-hidden border-2 border-pink-100">

            {!open && (
                <>
                    <h1 className="font-semibold font-romantic text-xl text-center mb-5">
                        Here is my wish for you, my little Sain.
                    </h1>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setOpen(true)}
                        className="px-4 py-2 bg-green-500 text-white rounded-full"
                        aria-label="Open love letter"
                    >
                        Open Letter 💌
                    </motion.button>
                </>
            )}

            <AnimatePresence>
                {open && (
                    <motion.div
                        key="letter"
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -50, scale: 0.8 }}
                        transition={{ duration: 0.6, type: 'spring' }}
                        className="relative mt-6 bg-white p-6 rounded-2xl shadow-xl w-[80vw] mx-auto" // Fixed width here
                        role="dialog"
                        aria-modal="true"
                        aria-label="Love letter"
                    >
                        <button
                            onClick={handleClose}
                            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
                            aria-label="Close letter"
                        >
                            <X size={24} />
                        </button>

                        <div className="whitespace-pre-wrap text-green-700 text-lg font-medium text-left min-h-[200px] w-full p-[3px] overflow-hidden">
                            {typedText}
                        </div>

                        {!skip && typedText.length < fullText.length && (
                            <button
                                onClick={() => setSkip(true)}
                                className="mt-4 text-sm text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
                            >
                                Skip typing ⏩
                            </button>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
            </article>
        </div>
    );
}
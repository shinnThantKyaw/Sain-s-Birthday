'use client';

import { motion,AnimatePresence  } from 'framer-motion';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export default function WishLetter() {
    const [open, setOpen] = useState(false);
    const [typedText, setTypedText] = useState('');
    const [skip, setSkip] = useState(false);

    const fullText = `Dear Sain,\n\nYou're the most special part of my life. 💚\nWishing you a day filled with joy, love,\nand all the happiness you deserve.\n\nMay this year bring you closer to your dreams\nand fill your days with laughter.\n\n— With all my love 💝`;

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
        }, 50);

        return () => clearInterval(interval);
    }, [open, skip, fullText]);

    const handleClose = () => {
        setOpen(false);
        setTypedText('');
        setSkip(false);
    };

    return (
        <div className="text-center w-[90vw] mt-10">
            <motion.article
                className="w-full max-w-md h-auto min-h-[50vh] sm:h-[85vh] bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-6 sm:p-8 flex flex-col justify-center items-center gap-6 sm:gap-8 relative overflow-hidden border-2 border-pink-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                {!open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <h1 className="font-semibold font-romantic text-2xl text-center mb-6 text-pink-600">
                           Here is my wish for you, my little Sain.💝
                        </h1>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setOpen(true)}
                            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
                            aria-label="Open love letter"
                        >
                            Open Letter 💌
                        </motion.button>
                    </motion.div>
                )}

                <AnimatePresence>
                    {open && (
                        <motion.div
                            key="letter"
                            initial={{ opacity: 0, y: 50, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -50, scale: 0.8 }}
                            transition={{ duration: 0.6, type: 'spring' }}
                            className="relative w-full max-w-md bg-white/95 p-8 rounded-2xl shadow-lg border border-pink-100"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Love letter"
                        >
                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 text-gray-500 hover:text-pink-600 transition-colors"
                                aria-label="Close letter"
                            >
                                <X size={24} />
                            </button>

                            <div className="whitespace-pre-wrap text-pink-800 text-lg font-medium text-left min-h-[300px] w-full p-4 overflow-y-auto">
                                {typedText}
                            </div>

                            {!skip && typedText.length < fullText.length && (
                                <button
                                    onClick={() => setSkip(true)}
                                    className="mt-4 text-sm text-pink-500 hover:text-pink-700 focus:outline-none transition-colors"
                                >
                                    Skip typing ⏩
                                </button>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.article>
        </div>
    );
}
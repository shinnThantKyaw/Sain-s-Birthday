'use client';

import { motion,AnimatePresence  } from 'framer-motion';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import {clsx} from "clsx";

export default function WishLetter() {
    const [open, setOpen] = useState(false);
    const [typedText, setTypedText] = useState('');
    const [skip, setSkip] = useState(false);

    const fullText = `Happy birthday ပါစိမ်းရေ။

အချိန်တွေ တ‌ဖြည်းဖြည်းနဲ့ ကုန်လာလိုက်တာ စိမ်းတောင် ၂၁နှစ်ပြည့်ခဲ့ပြီနော်။အသက်တဖြည်းဖြည်းကြီးလာတာနဲ့အတူ စိမ်းကလည်း တဖြည်းဖြည်းနဲ့ ပိုရင့်ကျက်ပြီး ပိုလိမ္မာလာတာကို ကိုကိုက အသိအမှတ်ပြုပါတယ်။ဒီထက်ပိုပြီးလည်း ရင့်ကျက်ပြီးတော်လာဦးမယ်လို့ ကိုကိုယုံပါတယ် ။ (စိမ်းကလည်းကြိုးစားရမယ်နော်)

ခု စိမ်းရဲ့ ၂၁နှစ်ပြည့်မွေးနေ့မှာ မွေးနေ့ဆုတောင်းပေးဖို့၊ အမှတ်တရဖြစ်ဖို့နဲ့ စိမ်းရင်ထဲမှာ ကြည်နူးနှစ်သိမ့်မှုတစ်စုံတရာရရှိစေဖို့အတွက် ကိုကိုက ဒီစာကို၊ ဒီ website လေးကိုရေးဖြစ်ခဲ့တယ်ပေါ့လေ။

အစစအရာရာပျက်စီးဆွေးမြည့်ပြီး တငွေ့ငွေ့လောင်မြိုက်နေတဲ့ ဒီတိုင်းပြည်ကြီးထဲမှာ စိမ်းတစ်ယောက် ဒဏ်ရာအနာတရကင်းကင်းနဲ့ ပျော်ပျော်ရွှင်ရွှင် လွတ်လွတ်လပ်လပ် နေနိုင်ပါစေလို့ကိုကိုကဆုတောင်းပေးပါတယ်။
 ဒီခေတ်ဆိုးကြီးရဲ့ ရိုက်ခတ်မှုတွေက နေလည်း ကိုကိုတို့နှစ်ယောက်လုံး‌ရော( တခြားအားလုံးရော) အမြန်ဆုံးကင်းလွတ်ရပါစေ။ နောက် လိုအပ်တာထက်ကိုပိုနေခဲ့တဲ့ ကိုကိုတို့နှစ်ယောက်ကြားက ဝေးကွာရမှုတွေ၊ လွမ်းမောရမှုတွေနဲ့ အခက်အခဲတွေလည်း အမြန်ဆုံး ကုန်ဆုံးပါစေ ပေါ့လေ။
တစ်ယောက်လက်ကိုတစ်ယောက် စိတ်ကူးနဲ့ ဆုပ်ကိုင်ထားရတဲ့ နေ့ရက်တွေလည်း အမြန်‌ဆုံး ပြီးဆုံးပြီး အမှတ်တရနေ့ရက်တွေတိုင်းကို အတူတူဖြတ်သန်းခွင့်ရပါစေပေါ့။ အဲ့သလို ကိုကိုက ဆုတောင်းပါတယ်။

အကယ်လို့များ ဒီကြားထဲမှာ စိမ်းအနေနဲ့ ဘယ်လို စိတ်ညစ်စရာ ဘယ်လိုအခက်အခဲတွေပဲ ကြုံရသည်ဖြစ်စေပေါ့လေ, ဆရာစိုင်းခမ်းလိတ်ရဲ့စာသားလို 
"မကြောက်စမ်းနဲ့ အနားမှာ‌လေကိုယ် ရှိတယ်,
နောက်မဆုတ်နဲ့ အနားမှာလေ ကိုယ်ရှိတယ်"ပေါ့။
ကိုကိုက အဲ့လိုပြောချင်ပါတယ်။အမြဲတမ်းမဟုတ်တောင် စိမ်းလိုအပ်တဲ့အချိန်တိုင်းနီးပါးမှာ ကိုကိုဟာစိမ်းအနားမှာ ကိုကိုတတ်နိုင်တဲ့ပုံစံတစ်မျိုးမျိုး နည်းလမ်းတစ်မျိုးမျိုး နဲ့ရှိနေပေးနိုင်ခဲ့တယ်လို့လည်း ကိုကိုယုံပါတယ်။

နောက်ဆုံးအနေနဲ့ ကိုကိုပြောနေကြလိုပဲ တစ်နေ့နေ့မှာတော့ ကိုကိုတို့တွေဟာ တစ်ယောက်လက်ကိုတစ်ယောက်ဆုပ်ကိုင်ထားရင်း ပင်လယ်ကိုတစ်ယောက်တစ်ဝက်ငေးနေကြရမှာပါ ။ အဲ့ဒီတစ်‌နေ့နေ့ဆီ ကို အမြန်ဆုံးရောက်လာဖို့လည်းကိုကိုတို့က အတူတူကြိုးစားကြပြီး ကိုကိုတို့ရဲ့ကြိုးစားမှုတွေအမြန်ဆုံး အရာထင်လာဖို့အတွက် ဆုတောင်းရင်း...

ပျော်စရာကောင်းပြီး အမှတ်တရတွေအများကြီးကျန်နေမယ့် မွေးနေ့လေးဖြစ်ပါစေစိမ်းရေ။`;

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
        <div className="text-center w-[90vw]  flex justify-center ">
            <motion.article
                className={clsx("w-full max-w-md h-auto min-h-[50vh] sm:min-h-[85vh]  bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl  flex flex-col justify-center items-center gap-6 sm:gap-8 relative overflow-hidden border-2 border-pink-100",open?"p-0":"p-6 sm:p-8")}
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
                            className="relative w-full max-w-md h-auto bg-white/95 p-4 rounded-2xl shadow-lg border border-pink-100"
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

                            <div className="whitespace-pre-wrap text-pink-800 text-lg font-medium text-left min-h-[240px] md:min-h-[70vh] w-full p-4 overflow-y-auto">
                                {typedText}
                            </div>

                            <div className="flex justify-end">
                                {!skip && typedText.length < fullText.length && (
                                    <button
                                        onClick={() => setSkip(true)}
                                        className="mt-4 px-4 py-2 bg-pink-100 hover:bg-pink-200 text-pink-700 font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 flex items-center gap-1"
                                    >
                                        Skip Typing
                                        <span className="text-lg">⏩</span>
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.article>
        </div>
    );
}
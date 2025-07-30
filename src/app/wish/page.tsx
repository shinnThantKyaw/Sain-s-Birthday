
import MusicPlayer from "@/components/feat/MusicPlayer/MusicPlayer";
import HappyBirthdaySection from "@/components/feat/HappyBirthdaySection/HappyBirthdaySection";
import WishLetter from "@/components/feat/WishLetter/WishLetter";
import BirthdayGirlPics from "@/components/feat/BirthdayGirlPics/BirthdayGirlPics";
import ThatsAllSection from "@/components/feat/ThatsAllSection/ThatsAllSection";

export default function WishPage() {
    return(
        <div className="w-screen min-h-screen bg-pink-50 flex flex-col py-[50px] justify-start items-center">
            <MusicPlayer/>
            <HappyBirthdaySection/>
            <WishLetter/>
            <BirthdayGirlPics/>
            <ThatsAllSection/>
        </div>
    )
}
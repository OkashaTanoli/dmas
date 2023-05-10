import { BecomeInstructor, Categories, DiscoverPrograms, EnhanceSkills, ImprovingLives, MainCards, Marketing, OnlineCourses, Partners, Slider, StartJourney, Subscribe } from "@/components";
import Image from "next/image";
import { IoLogoWhatsapp } from 'react-icons/io'

export default function Home() {
    return (
        <div className="relative">
            <Slider />
            <div className="w-[40%] lg:w-[500px] sm:w-[350px] h-14 flex justify-end items-center gap-2 pr-20 sm:pr-5 bg-dark-blue text-white rounded-r-full -mt-7 relative z-20">
                <h1 className="text-2xl sm:text-xl font-bold">3,876</h1>
                <p className="text-sm sm:text-xs">people are learning on DMAS today.</p>
            </div>
            <Partners />
            <MainCards />
            <DiscoverPrograms />
            <OnlineCourses />
            <Categories />
            <Marketing />
            <StartJourney />
            <EnhanceSkills />
            <BecomeInstructor />
            <ImprovingLives />
            <Subscribe />
            <div className="bottom-10 right-10 fixed bg-[#ffffff5f] p-3 backdrop-blur-2xl">
                <a href="https://api.whatsapp.com/send/?phone=923002302648&text&app_absent=0" target="_blank">
                    <IoLogoWhatsapp size={60} className="text-[#36B623] border-3" />
                    {/* <Image src="wtlogo copy.png" alt="whatsapp" className="w-[88px] h-[88px]" /> */}
                </a>
            </div>
        </div>
    )
}

import { BecomeInstructor, Categories, DiscoverPrograms, EnhanceSkills, ImprovingLives, MainCards, Marketing, OnlineCourses, Partners, Slider, StartJourney, Subscribe } from "@/components";

export default function Home() {
    return (
        <div>
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
        </div>
    )
}

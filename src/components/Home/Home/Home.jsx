import HeroSection from "../HeroSection/HeroSection";
import ReasonSection from "../ReasonSection/ReasonSection";

export default function Home() {
    return (
        <>
            <div className="w-full flex items-center justify-center flex-col">
                <HeroSection/>
                <ReasonSection/>
            </div>
        </>
    );
};
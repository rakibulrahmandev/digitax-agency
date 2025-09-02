import mobileImg from '../../../assets/mobile/mobile_img.png';
import mobileAbs from '../../../assets/mobile/mobile_abs.png';
import laptopImg from '../../../assets/laptop/laptop_img.png';
import laptopAbs from '../../../assets/laptop/laptop_abs.png';
import desktopImg from '../../../assets/desktop/desktop_img.png';
import desktopAbs from '../../../assets/desktop/desktop_abs.png';

export default function HeroSection() {
    return (
        <>
            <section className="w-full max-w-[1920px] min-h-[883px] pt-[150px] flex items-center justify-center laptop:pt-0 laptop:min-h-[740px] desktop:min-h-[925px]">
                <div className="w-full flex items-center justify-center flex-col laptop:flex-row-reverse">
                    <div className="w-full self-end">
                        <img src={mobileImg} alt="hero logo image" className="w-full object-cover block laptop:hidden desktop:hidden" />
                        <img src={laptopImg} alt="hero logo image" className="w-full object-cover hidden laptop:block desktop:hidden" />
                        <img src={desktopImg} alt="here logo image" className="w-full object-cover hidden laptop:hidden desktop:block" />
                    </div>
                    <div className="w-full">
                        <img src={mobileAbs} alt="hero pattern image" className="w-full h-[486px] object-cover block laptop:hidden desktop:hidden" />
                        <img src={laptopAbs} alt="here pattern image" className="w-full object-cover hidden laptop:block desktop:hidden" />
                        <img src={desktopAbs} alt="here pattern image" className="w-full object-cover hidden laptop:hidden desktop:block" />
                    </div>
                </div>
            </section>
        </>
    );
};
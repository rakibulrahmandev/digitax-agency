export default function HeroSection() {
    return (
        <>
            <section className="w-full max-w-[1920px] min-h-[883px] pt-[150px] flex items-center justify-center laptop:pt-0 laptop:min-h-[740px] desktop:min-h-[925px]">
                <div className="w-full flex items-center justify-center flex-col laptop:flex-row-reverse">
                    <div className="w-full self-end">
                        <img src='/public/mobile/mobile_img.png' alt="hero logo image" className="w-full object-cover block laptop:hidden desktop:hidden" />
                        <img src='/public/laptop/laptop_img.png' alt="hero logo image" className="w-full object-cover hidden laptop:block desktop:hidden" />
                        <img src='/public/desktop/desktop_img.png' alt="here logo image" className="w-full object-cover hidden laptop:hidden desktop:block" />
                    </div>
                    <div className="w-full">
                        <img src='/public/mobile/mobile_abs.png' alt="hero pattern image" className="w-full h-[486px] object-cover block laptop:hidden desktop:hidden" />
                        <img src='/public/laptop/laptop_abs.png' alt="here pattern image" className="w-full object-cover hidden laptop:block desktop:hidden" />
                        <img src='/public/desktop/desktop_abs.png' alt="here pattern image" className="w-full object-cover hidden laptop:hidden desktop:block" />
                    </div>
                </div>
            </section>
        </>
    );
};
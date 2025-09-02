import mobileImg from '../../../assets/mobile/mobile_img.png';
import mobileAbs from '../../../assets/mobile/mobile_abs.png';
import laptopImg from '../../../assets/laptop/laptop_img.png';
import laptopAbs from '../../../assets/laptop/laptop_abs.png';
import desktopImg from '../../../assets/desktop/desktop_img.png';
import desktopAbs from '../../../assets/desktop/desktop_abs.png';
import HeroButton from '../../Button/HeroButton';

export default function HeroSection() {
    return (
        <>
            <section className="w-full max-w-[1920px] min-h-[883px] pt-[150px] relative laptop:pt-0 laptop:min-h-[740px] desktop:min-h-[925px]">
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
                <div className='w-full absolute inset-0'>
                    <div className='container'>
                        <div className='w-full mt-[471px] laptop:mt-[81px] laptop:pt-[169px] desktop:mt-[103px] desktop:pt-[188px]'>
                            <div className='w-full text-center laptop:text-left laptop:max-w-[600px] desktop:max-w-[800px]'>
                                <h1 className='text-absolute-white text-[34px] font-semibold leading-[130%] laptop:text-[48px] desktop:text-[58px]'>Digital Solutions <span className='text-grey-shade-40'>That Drive Success</span></h1>
                            </div>
                            <div className='w-full text-center mt-3 max-w-[358px] laptop:text-left laptop:max-w-[600px] laptop:mt-4 desktop:max-w-[800px] desktop:mt-5'>
                                <p className='text-white-shade-50 text-sm font-normal leading-[150%] laptop:text-base desktop:text-lg'>At DigitX, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape. From captivating web design to data-driven marketing strategies, we are committed to delivering results that exceed expectations.</p>
                            </div>
                            <div className='w-full mt-[50px] laptop:mt-[60px]'>
                                <div className='w-full mb-3 text-center laptop:text-left laptop:mb-4 desktop:mb-5'>
                                    <p className='text-absolute-white text-sm font-normal leading-[150%]'>Unlock Your Digital Potential Today</p>
                                </div>
                                <HeroButton primaryText='Get Started' />
                                <HeroButton secondaryText='Free Consultation' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
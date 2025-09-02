import { Link, NavLink } from 'react-router';
import { useState } from 'react';
import navLink from '../../constants/navLink.js';
import mobileLogo from '../../assets/logo/mobile.png';
import laptopLogo from '../../assets/logo/laptop.png';
import desktopLogo from '../../assets/logo/desktop.png';

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header className="w-full fixed top-0 left-0 pt-10 pb-3.5 border-b border-grey-shade-12 bg-grey-shade-06/20 backdrop-blur-md laptop:py-5 desktop:py-6">
                <div className="container">
                    <div className="w-full flex items-center justify-between">
                        <div className="w-auto">
                            <Link to='/' className='block laptop:hidden desktop:hidden'>
                                <div className="w-10 h-7">
                                    <img src={mobileLogo} alt="DX logo" className='w-full h-full object-contain' />
                                </div>
                            </Link>
                            <Link to='/' className='hidden laptop:block desktop:hidden'>
                                <div className='w-[55px] h-10'>
                                    <img src={laptopLogo} alt="DX logo" className='w-full h-full object-contain' />
                                </div>
                            </Link>
                            <Link to='/' className='hidden laptop:hidden desktop:block'>
                                <div className='w-[75px] h-[54px]'>
                                    <img src={desktopLogo} alt="DX logo" className='w-full h-full object-contain' />
                                </div>
                            </Link>
                        </div>
                        <div className='w-auto hidden laptop:block'>
                            <nav className='w-auto'>
                                <ul className='flex items-center justify-end gap-6 desktop:gap-[30px]'>
                                    {navLink.map(link => (
                                        <li key={link?.id} className='text-absolute-white text-sm font-normal desktop:text-lg'>
                                            <NavLink to={link?.pathname} className={({isActive}) => isActive ? 'py-3 px-4 bg-grey-shade-10 border border-grey-shade-12 rounded-[84px] desktop:py-4 desktop:px-6' : ''}>{link?.label}</NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className='w-auto block laptop:hidden'>
                            <button onClick={handleClick} className='w-[52px] h-[52px] bg-grey-shade-10 border border-grey-shade-12 rounded-full flex items-center justify-center text-absolute-white cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div className={`fixed inset-0 bg-grey-shade-06/10 backdrop-blur-md transform transition-transform ${isOpen ? 'translate-y-0 delay-800 duration-800 ease-in' : '-translate-y-[100%] delay-1000 duration-1000 ease-in'}`}>
                <div className={`fixed top-0 left-0 w-full h-full transform ${isOpen ? 'transform-0 duration-[2000] delay-[2000] ease-in' : '-transform-[100%] duration-800 delay-800 ease-in'} overflow-y-auto bg-grey-shade-06 py-10 px-4 transition-transform`}>
                    <div className='w-full flex items-center justify-end'>
                        <button onClick={handleClick} className='w-[52px] h-[52px] bg-grey-shade-10 border border-grey-shade-12 rounded-full flex items-center justify-center text-absolute-white cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className='w-full mt-10'>
                        <nav className='w-auto'>
                            <ul className='w-auto flex items-center justify-center flex-col gap-10'>
                                {navLink.map(link => (
                                    <li key={link?.id} className='text-absolute-white text-sm font-normal'>
                                        <NavLink onClick={handleClick} to={link?.pathname} className={({isActive}) => isActive ? 'py-3 px-4 bg-grey-shade-10 border border-grey-shade-12 rounded-[84px] desktop:py-4 desktop:px-6' : ''}>{link?.label}</NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};
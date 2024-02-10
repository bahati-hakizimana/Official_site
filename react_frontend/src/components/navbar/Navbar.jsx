import { useState, useEffect } from 'react'

import Empower from '../../assets/Empower.png'
import pharmacy from '../../assets/pharmacy.webp'
import realestate from '../../assets/real-estate.jpg'
import { BiPhoneCall, BiSolidMoon, BiSolidSun } from 'react-icons/bi'
import { FaCaretDown } from 'react-icons/fa'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu'
import Form from '../../Form'



const Navbar = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark'
    );
    const element = document.documentElement;
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {

        if (theme === 'dark') {
            element.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            element.classList.remove('dark');
            localStorage.removeItem('theme');
        }
    }, [theme])

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };
    return (

        <>

            <header className="fixed top-0 left-0 right-0 z-[99] w-full bg-navbar text-white md:fixed">
                <nav className='nav1 container flex items-center justify-between h-[70px] py-2 px-2'>
                    {/* Logo section  */}
                    <div className='text-2xl bg-slate-400'>
                        <a href="#home">
                            <img
                                className=" h-10 w-auto"
                                src={Empower} alt="Logo" />
                        </a>
                    </div>

                    {/* Desktop menu section */}
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-4'>
                            <li className='cursor-pointer hover:text-black'>
                                <a href="#home">Home</a>
                            </li>
                            <li className='cursor-pointer hover:text-black'>
                                <a href="#about">About</a>
                            </li>
                            <li className='cursor-pointer hover:text-black'>Contact</li>
                            <li className='cursor-pointer hover:text-black'><a href="/Form">Login</a></li>
                            <li>
                                <div className="flex items-center gap-4">
                                    <div>
                                        <BiPhoneCall className="text-2xl h-[40px] w-[40px] rounded-md p-2 text-white bg-purple-500 hover:bg-purple-500/90" />
                                    </div>
                                    <div>
                                        <p>Call Us On</p>
                                        <p>
                                            <a className='cursor-pointer hover:text-black' href="tel:+250780035234">+250780035234</a>
                                        </p>
                                    </div>
                                </div>

                            </li>
                            {/* Color switcher */}
                            {theme === 'dark' ?
                                (
                                    <BiSolidSun className='text-2xl' onClick={() => setTheme("light")} />
                                ) : (
                                    <BiSolidMoon className="text-2xl" onClick={() => setTheme("dark")} />
                                )
                            }

                        </ul>
                    </div>

                    {/* Mobile responsive */}
                    <div className="flex items-center gap-4 md:hidden">
                        {theme === 'dark' ?
                            (
                                <BiSolidSun className='text-2xl' onClick={() => setTheme("light")} />
                            ) : (
                                <BiSolidMoon className="text-2xl" onClick={() => setTheme("dark")} />
                            )
                        }
                        {showMobileMenu ? (
                            <HiMenuAlt1
                                className="cursor-pointer transition-all size-[30]"
                                onClick={toggleMobileMenu}
                            />
                        ) : (
                            <HiMenuAlt3
                                onClick={toggleMobileMenu}
                                className="cursor-pointer transition-all size-[30]"
                            />
                        )}

                    </div>
                    {/*  */}

                </nav>
            </header>

            <ResponsiveMenu showMobileMenu={showMobileMenu} />
        </>
    )
}

export default Navbar

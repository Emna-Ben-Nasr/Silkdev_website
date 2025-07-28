"use client"
import React, { useEffect, useState } from 'react';
import silkdevlogo from '../assets/silkdev_logo.jpg';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`sticky top-0 bottom-0 w-full z-20 transition-colors duration-500 backdrop-blur-md ${scrolled ? 'bg-transparent' : ' bg-[#1D1F34]'}`}
            style={{ bottom: '0px' }}
        >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    {/* <Image src={silkdevlogo} className="h-8" alt="SilkDev Logo" priority /> */}
                    <span className="self-center text-2xl font-semibold text-[#F8F8F9]">SILKDEV</span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                  
                    <button
                        data-collapse-toggle="navbar-cta"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#F8F8F9]/80 rounded-lg md:hidden hover:bg-[#163C53]/20 focus:outline-none focus:ring-2 focus:ring-[#F8F8F9]/20"
                        aria-controls="navbar-cta"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                        <li>
                            <Link href="/" className="block py-2 px-3 md:p-0 text-[#F8F8F9] hover:text-[#00aac7] transition-colors duration-200" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link href="/about-us" className="block py-2 px-3 md:p-0 text-[#F8F8F9]/90 hover:text-[#00aac7] transition-colors duration-200">About us</Link>
                        </li>
                        <li>
                            <Link href="#" className="block py-2 px-3 md:p-0 text-[#F8F8F9]/90 hover:text-[#00aac7] transition-colors duration-200">Services</Link>
                        </li>
                        <li>
                            <Link href="#" className="block py-2 px-3 md:p-0 text-[#F8F8F9]/90 hover:text-[#00aac7] transition-colors duration-200">Projects</Link>
                        </li>
                        <li>
                            <Link href="#" className="block py-2 px-3 md:p-0 text-[#F8F8F9]/90 hover:text-[#00aac7] transition-colors duration-200">Work with us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
"use client"
import React, { useEffect, useState } from 'react';
import silkdevlogo from '../assets/silkdev_logo.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface NavBarProps {
    brandName?: string;
    showNavigation?: boolean;
    ctaText?: string;
    ctaLink?: string;
    variant?: 'default' | 'simple';
}

const NavBar: React.FC<NavBarProps> = ({ 
    brandName = "SILKDEV", 
    showNavigation = true, 
    ctaText = "Get Started",
    ctaLink = "#",
    variant = 'default'
}) => {
    const [scrolled, setScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [animatedText, setAnimatedText] = useState("");

    // Check if it's the main company (SILKDEV) or a sub-company
    const isMainCompany = brandName === "SILKDEV";
    
    // Split brand name into base and sub-brand using "SILK" as fixed base
    const baseBrand = "SILK";
    const subBrand = brandName.replace("SILK", "").trim();

    const subCompanies = [
        {
            name: "SILKDEV.IO",
            description: "Development Services",
            link: "/silkdevio"
        },
        {
            name: "NEXUS",
            description: "Professional Network",
            link: "/silknexus"
        },
        {
            name: "LABS",
            description: "Innovation Hub",
            link: "/silklabs"
        },
        {
            name: "GUILD",
            description: "Exclusive Community",
            link: "/silkguild"
        }
    ];

    // Animate the sub-brand text (only for sub-companies)
    useEffect(() => {
        if (subBrand && !isMainCompany) {
            let currentText = "";
            setAnimatedText(""); // Reset animation
            const interval = setInterval(() => {
                if (currentText.length < subBrand.length) {
                    currentText += subBrand[currentText.length];
                    setAnimatedText(currentText);
                } else {
                    clearInterval(interval);
                }
            }, 120); // Speed of typing animation

            return () => clearInterval(interval);
        }
    }, [subBrand, brandName, isMainCompany]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Element;
            if (!target.closest('.dropdown-container')) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav
            className={`sticky top-0 bottom-0 w-full z-20 transition-colors duration-500 backdrop-blur-md ${scrolled ? 'bg-transparent' : ' bg-[#1D1F34]'}`}
            style={{ bottom: '0px' }}
        >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <a href="/" className="flex items-center space-x-2">
                        {/* <Image src={silkdevlogo} className="h-8" alt="SilkDev Logo" priority /> */}
                        <span className="self-center text-2xl font-semibold text-[#F8F8F9]">
                            {isMainCompany ? (
                                // Main company: all white
                                brandName
                            ) : (
                                // Sub-companies: SILK + animated part
                                <>
                                    {baseBrand}
                                    {subBrand && (
                                        <motion.span
                                            className="text-[#00aac7]"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                        >
                                            {animatedText}
                                            <motion.span
                                                className="inline-block w-0.5 h-6 bg-[#00aac7] ml-1"
                                                animate={{ opacity: [1, 0, 1] }}
                                                transition={{ duration: 1, repeat: Infinity }}
                                            />
                                        </motion.span>
                                    )}
                                </>
                            )}
                        </span>
                    </a>
                    
                    {/* Dropdown Arrow */}
                    <div className="dropdown-container relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center space-x-1 text-[#F8F8F9] hover:text-[#00aac7] transition-colors duration-200 p-1 rounded-lg hover:bg-[#163C53]/20"
                        >
                            <svg 
                                className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 13l5 5 5-5"/>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 6l5 5 5-5"/>
                            </svg>
                        </button>
                        {/* Dropdown Menu - Double Row Horizontal Layout */}
                        {isDropdownOpen && (
                            <div className="absolute top-full left-0 mt-2 w-96 bg-gradient-to-br from-[#1D1F34]/95 via-[#163C53]/90 to-[#00aac7]/20 backdrop-blur-lg border border-[#00aac7]/20 rounded-xl shadow-2xl z-50 overflow-hidden">
                                <div className="p-4">
                                    {/* First Row */}
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        {subCompanies.slice(0, 2).map((company, index) => (
                                            <Link
                                                key={company.name}
                                                href={company.link}
                                                onClick={() => setIsDropdownOpen(false)}
                                                className="p-3 rounded-lg hover:bg-[#00aac7]/10 transition-all duration-200 group"
                                            >
                                                <div className="text-white font-semibold text-sm group-hover:text-[#00aac7] transition-colors duration-200 mb-1">
                                                    {company.name}
                                                </div>
                                                <div className="text-gray-300 text-xs">
                                                    {company.description}
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                    
                                    {/* Second Row */}
                                    <div className="grid grid-cols-2 gap-4">
                                        {subCompanies.slice(2, 4).map((company, index) => (
                                            <Link
                                                key={company.name}
                                                href={company.link}
                                                onClick={() => setIsDropdownOpen(false)}
                                                className="p-3 rounded-lg hover:bg-[#00aac7]/10 transition-all duration-200 group"
                                            >
                                                <div className="text-white font-semibold text-sm group-hover:text-[#00aac7] transition-colors duration-200 mb-1">
                                                    {company.name}
                                                </div>
                                                <div className="text-gray-300 text-xs">
                                                    {company.description}
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                
                            </div>
                        )}
                    </div>
                </div>
                
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {/* CTA Button */}
                    <Link 
                        href={ctaLink}
                        className="text-white bg-gradient-to-r from-[#01737d] to-[#3be8b0] hover:from-[#015a63] hover:to-[#2dd4a0] focus:ring-4 focus:ring-[#00aac7]/20 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 transition-all duration-300"
                    >
                        {ctaText}
                    </Link>
                    
                    {/* Mobile Menu Button - Only show if navigation is enabled */}
                    {showNavigation && (
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
                    )}
                </div>
                
                {/* Navigation Menu - Only show if navigation is enabled */}
                {showNavigation && (
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
                )}
            </div>
        </nav>
    )
}

export default NavBar;
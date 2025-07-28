import React from 'react';
import Image from 'next/image';

interface ServiceCardProps {
    title: string;
    description: string;
    imagePath: string;
    href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imagePath, href }) => {
    return (
        <div className="max-w-sm bg-[#1D1F34]/20 border border-[#163C53]/20 rounded-lg shadow-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
            <a href={href} className="block relative h-48 w-full">
                <Image
                    className="rounded-t-lg object-cover"
                    src={imagePath}
                    alt={title}
                    fill
                    priority
                />
            </a>
            <div className="p-5">
                <a href={href}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#F8F8F9] hover:text-[#163C53] transition-colors">
                        {title}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-[#F8F8F9]/80">
                    {description}
                </p>
                <a
                    href={href}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#F8F8F9] bg-[#163C53]/40 rounded-lg hover:bg-[#163C53]/60 focus:ring-4 focus:outline-none focus:ring-[#163C53]/30 transition-all"
                >
                    Read more
                    <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default ServiceCard;
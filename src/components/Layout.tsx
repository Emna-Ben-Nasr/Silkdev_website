"use client"

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SilkEffect from './Hero';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { scrollYProgress } = useScroll();
    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        ["from-slate-950 via-slate-900 to-blue-950",
            "from-slate-950 via-slate-900 to-blue-950",
            "from-slate-950 via-slate-900 to-blue-950"]
    );

    return (
        <motion.div
            className="min-h-screen relative"
            style={{
                background: `linear-gradient(to bottom, var(--tw-gradient-stops))`,
            }}
        >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <SilkEffect />
            </div>
            {children}
        </motion.div>
    );
};

export default Layout;
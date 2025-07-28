"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Define the interface for project data
interface Project {
    id: number;
    category: string;
    title: string;
    image: string;
    description: string;
}

const Projects: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>('All');

    const categories: string[] = ['All', 'Finance', 'Beauty', 'Sports', 'Tech', 'Education'];

    const projects: Project[] = [
        {
            id: 1,
            category: 'Finance',
            title: 'Budget Planner App',
            image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
            description: 'A mobile app for personal finance management',
        },
        {
            id: 2,
            category: 'Finance',
            title: 'Investment Dashboard',
            image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
            description: 'Web platform for tracking investments',
        },
        {
            id: 3,
            category: 'Beauty',
            title: 'Skincare Routine Builder',
            image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
            description: 'Custom skincare regimen generator',
        },
        {
            id: 4,
            category: 'Beauty',
            title: 'Makeup Tutorial Platform',
            image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
            description: 'Video-based makeup learning app',
        },
        {
            id: 5,
            category: 'Sports',
            title: 'Fitness Tracker',
            image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
            description: 'Wearable device companion app',
        },
        {
            id: 6,
            category: 'Sports',
            title: 'Sports Analytics Tool',
            image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
            description: 'Data analysis for team performance',
        },
        {
            id: 7,
            category: 'Tech',
            title: 'AI Chatbot',
            image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
            description: 'Conversational AI for customer support',
        },
        {
            id: 8,
            category: 'Tech',
            title: 'IoT Smart Home',
            image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
            description: 'Smart home automation system',
        },
        {
            id: 9,
            category: 'Education',
            title: 'E-Learning Platform',
            image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
            description: 'Online course delivery system',
        },
        {
            id: 10,
            category: 'Education',
            title: 'Study Aid App',
            image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg',
            description: 'Flashcard and quiz study tool',
        },
        {
            id: 11,
            category: 'Finance',
            title: 'Expense Tracker',
            image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg',
            description: 'Track and categorize expenses',
        },
        {
            id: 12,
            category: 'Beauty',
            title: 'Virtual Try-On',
            image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg',
            description: 'AR-based makeup try-on app',
        },
    ];

    const filteredProjects: Project[] = activeCategory === 'All'
        ? projects
        : projects.filter((project) => project.category === activeCategory);

    const handleCategoryClick = (category: string) => {
        setActiveCategory(category);
    };

    return (
        <section className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34] relative overflow-hidden">
            {/* Removed overlay to match Hero section gradient exactly */}
            <div className="container mx-auto px-4 relative z-10">
                <motion.h2
                    className="text-4xl font-bold text-center text-[#F8F8F9] mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Cool Stuff We've Built
                </motion.h2>
                <div className="flex items-center justify-center py-4 md:py-8 flex-wrap mb-8">
                    {categories.map((category, index) => (
                        <motion.button
                            key={category}
                            type="button"
                            className={`rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 focus:ring-4 focus:outline-none
                ${activeCategory === category
                                    ? 'text-blue-700 border border-blue-600 bg-white hover:bg-blue-700 hover:text-white focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800'
                                    : 'text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-gray-300 dark:text-white dark:focus:ring-gray-800'
                                }`}
                            onClick={() => handleCategoryClick(category)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="relative group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src={project.image}
                                alt={project.title}
                            />
                            <div className="absolute inset-0 bg-[#1D1F34]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col items-center justify-center text-[#F8F8F9] p-4">
                                <h3 className="text-lg font-semibold">{project.title}</h3>
                                <p className="text-sm">{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
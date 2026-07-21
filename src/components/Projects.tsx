"use client";
/* eslint-disable @next/next/no-img-element */

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Project Data with Media & Layout Configuration
const projects = [  
  {
    id: "geo-fenced-attendance",
    title: "Geo-Fenced Attendance & Access Control",
    category: "Backend • API Integration",
    description: "Python/FastAPI backend with GPS-based radius validation.",
    longDescription: "Designed and implemented a Python/FastAPI backend featuring OOP-structured authentication modules. Integrated GPS-based radius validation, which successfully reduced unauthorized attendance access by 40%. Optimized the MySQL schema and queries for 30% faster data retrieval, and documented the API architecture for developer collaboration.",
    techStack: [
  "Python",
  "FastAPI",
  "GPS Geolocation",
  "MySQL",
  "JWT Authentication"
],
    repo: "https://github.com/Sreekar-30",
    demo: "#",
    color: "from-blue-600/20 to-cyan-500/20",
    hoverColor: "group-hover:from-blue-600/40 group-hover:to-cyan-500/40",
    span: "md:col-span-2 md:row-span-1",
    mediaType: "image",
    mediaUrl: "/projects/attendance.png",
demoUrl: "/projects/attendance.png",  },
  {
    id: "expense-tracking-api",
    title: "Scalable Expense Tracking API Platform",
    category: "Backend • OOP Design",
    description: "Engineered scalable Python/FastAPI backend with CRUD, filtering, and pagination.",
    longDescription: "Engineered a scalable Python/FastAPI backend following clean code and OOP best practices. Built robust CRUD operations, filtering, sorting, and pagination, which reduced server-side processing overhead by 25%. Implemented validation, exception handling, and thorough testing to ensure high reliability.",
    techStack: [
  "REST APIs",
  "OOP Design",
  "Pagination",
  "Data Validation",
  "MySQL"
],
    repo: "https://github.com/Sreekar-30",
    demo: "#",
    color: "from-purple-600/20 to-pink-500/20",
    hoverColor: "group-hover:from-purple-600/40 group-hover:to-pink-500/40",
    span: "md:col-span-1 md:row-span-1",
    mediaType: "image",
    mediaUrl: "/projects/expense.png",
demoUrl: "/projects/expense.png",  },
  {
    id: "nlp-chatbot",
    title: "NLP-Powered Intelligent Chatbot",
    category: "Python • NLP",
    description: "Modular NLP chatbot in Python/Flask using OOP design patterns.",
    longDescription: "Built a modular Natural Language Processing chatbot in Python/Flask using OOP design patterns. Integrated REST APIs to seamlessly connect the frontend and backend, with well-documented software contracts to support maintainability and future upgrades.",
    techStack: [
  "Flask",
  "NLP",
  "Text Processing",
  "Prompt Engineering",
  "API Integration"
],
    repo: "https://github.com/Sreekar-30",
    demo: "#",
    color: "from-orange-500/20 to-red-500/20",
    hoverColor: "group-hover:from-orange-500/40 group-hover:to-red-500/40",
    span: "md:col-span-1 md:row-span-1",
    mediaType: "image",
    mediaUrl: "/projects/chatbot.png",
    demoUrl: "/projects/chatbot.png"
  },
  {
  id: "ecommerce-platform",
  title: "Full Stack E-Commerce Platform",
  category: "React • FastAPI",
  description: "Modern e-commerce platform with authentication, cart, and order management.",
  longDescription:
    "Developed a full-stack e-commerce platform with secure authentication, product catalog management, shopping cart functionality, and order processing. Designed scalable REST APIs and optimized database queries for seamless user experience.",
  techStack: [
  "Python",
  "FastAPI",
  "MySQL",
  "JWT Authentication",
  "REST APIs"
],
  repo: "https://github.com/Sreekar-30",
  demo: "#",
  color: "from-green-600/20 to-emerald-500/20",
  hoverColor: "group-hover:from-green-600/40 group-hover:to-emerald-500/40",
  span: "md:col-span-2 md:row-span-1",
  mediaType: "image",
  mediaUrl: "/projects/ecommerce.png",
  demoUrl: "/projects/ecommerce.png"
},
{
  id: "resume-analyzer",
  title: "AI Resume Analyzer",
  category: "AI • FastAPI",
  description: "ATS score analysis with AI-powered resume recommendations.",
  longDescription:
    "Built an AI-powered resume analysis platform that evaluates resumes against job descriptions, generates ATS scores, identifies skill gaps, and provides actionable recommendations. Integrated FastAPI backend with modern frontend architecture.",
  techStack: [
  "Next.js",
  "TypeScript",
  "FastAPI",
  "Gemini AI",
  "PDF Processing"
],
  repo: "https://github.com/Sreekar-30",
  demo: "#",
  color: "from-cyan-600/20 to-blue-500/20",
  hoverColor: "group-hover:from-cyan-600/40 group-hover:to-blue-500/40",
  span: "md:col-span-2 md:row-span-2",
  mediaType: "image",
  mediaUrl: "/projects/resume.png",
  demoUrl: "/projects/resume.png"
},
{
  id: "portfolio-website",
  title: "Interactive Portfolio Website",
  category: "Frontend • Animation",
  description: "Scrollytelling portfolio with cinematic transitions and motion effects.",
  longDescription:
    "Designed and developed a premium portfolio website using Next.js, Framer Motion, and custom scroll-driven animations. Implemented responsive layouts, immersive user interactions, and optimized performance for a seamless experience.",
  techStack: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
  repo: "https://github.com/Sreekar-30",
  demo: "#",
  color: "from-purple-600/20 to-indigo-500/20",
  hoverColor: "group-hover:from-purple-600/40 group-hover:to-indigo-500/40",
  span: "md:col-span-2 md:row-span-1",
  mediaType: "image",
  mediaUrl: "/projects/portfolio.png",
  demoUrl: "/projects/portfolio.png"
},
];

const INITIAL_VISIBLE_COUNT = 6;

export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const selectedProject = projects.find((p) => p.id === selectedId);
  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  return (
    <section className="relative z-20 bg-transparent min-h-screen py-32 px-4 md:px-12 overflow-hidden" id="projects">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Selected <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
             A curated selection of projects demonstrating backend engineering, REST API development, and Python systems.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]"
        >
            <AnimatePresence mode="popLayout">
                {visibleProjects.map((project) => (
                    <motion.div
                        key={project.id}
                        layoutId={project.id}
                        onClick={() => setSelectedId(project.id)}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true }}
                        className={`group relative rounded-3xl overflow-hidden cursor-pointer border border-white/10 bg-white/5 backdrop-blur-md ${project.span}`}
                        whileHover={{ scale: 1.015 }}
                    >
                        {/* Media Background - Always 'mediaUrl' for Grid */}
                        <img
  src={project.mediaUrl}
  alt={project.title}
  className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105"
/>

<div className={`absolute inset-0 bg-linear-to-br ${project.color} ${project.hoverColor} transition-all duration-500 opacity-40 group-hover:opacity-60 mix-blend-overlay`} />

<div className="absolute inset-0 bg-black/65 transition-colors duration-500" />

<div className="absolute bottom-0 left-0 right-0 h-[65%] bg-gradient-to-t from-black via-black/90 to-transparent z-[1]" />


                        <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                            <div className="flex justify-between items-start">
                                 <span className="inline-block px-3 py-1 rounded-full bg-black/40 border border-white/10 text-xs font-mono text-blue-300 backdrop-blur-md">
                                    {project.category}
                                 </span>
                                 <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                 </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:translate-x-1 transition-transform drop-shadow-lg">{project.title}</h3>
                                <p className="text-gray-200 text-sm line-clamp-3 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-md">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                    {project.techStack.slice(0, 3).map(t => (
                                        <span key={t} className="text-[10px] uppercase tracking-wider text-white/80 bg-black/40 px-2 py-1 rounded backdrop-blur-sm border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>

        {/* Pagination Buttons */}
        <motion.div layout className="flex justify-center mt-12">
            {hasMore ? (
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setVisibleCount(prev => prev + 6)}
                    className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-md flex items-center gap-2 group"
                >
                    View More Projects
                    <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </motion.button>
            ) : projects.length > INITIAL_VISIBLE_COUNT && (
                 <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                        const projectsSection = document.getElementById('projects');
                        if (projectsSection) {
                            projectsSection.scrollIntoView({ behavior: 'smooth' });
                        }
                        setVisibleCount(INITIAL_VISIBLE_COUNT);
                    }}
                    className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-md flex items-center gap-2 group"
                 >
                    Show Less
                    <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                 </motion.button>
            )}
        </motion.div>

        {/* Enhanced Modal */}
        <AnimatePresence>
            {selectedId && selectedProject && (
                <>
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedId(null)}
                        className="fixed inset-0 bg-black/80 backdrop-blur-xl z-60"
                    />
                    <div className="fixed inset-0 flex items-center justify-center z-70 pointer-events-auto p-4 md:p-8">
                        <motion.div
                           layoutId={selectedId}
                           className="bg-[#121212] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-4xl border border-white/10 shadow-2xl relative scrollbar-hide"
                        >
                           <button 
                                onClick={() => setSelectedId(null)}
                                className="absolute top-6 right-6 z-20 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white/70 hover:text-white transition-colors border border-white/10"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                           </button>

                           <div className="flex flex-col md:flex-row h-full">
                                { /* Visual Side - Prioritize 'demoUrl', fallback to 'mediaUrl' */ }
                                <div className={`w-full md:w-2/5 min-h-[300px] relative overflow-hidden flex flex-col justify-end p-8`}>
                                    <img 
                                        src={selectedProject.demoUrl || selectedProject.mediaUrl}
                                        alt={selectedProject.title}
                                        className="absolute inset-0 w-full h-full object-cover opacity-80" 
                                    />
                                   <div className={`absolute inset-0 bg-linear-to-b ${selectedProject.color} mix-blend-overlay opacity-80`} />
                                   <div className="absolute inset-0 bg-black/20" />
                                   
                                   <motion.span 
                                     initial={{ opacity: 0, y: 10 }}
                                     animate={{ opacity: 1, y: 0 }}
                                     transition={{ delay: 0.2 }}
                                     className="relative z-10 inline-block px-3 py-1 rounded-full bg-black/40 text-xs font-mono text-white mb-4 w-fit border border-white/10 backdrop-blur-md"
                                   >
                                     {selectedProject.category}
                                   </motion.span>
                                   <motion.h3 
                                     initial={{ opacity: 0, y: 10 }}
                                     animate={{ opacity: 1, y: 0 }}
                                     transition={{ delay: 0.3 }}
                                     className="relative z-10 text-4xl font-bold text-white leading-none tracking-tight drop-shadow-xl"
                                   >
                                     {selectedProject.title}
                                   </motion.h3>
                                </div>

                                {/* Content Side */}
                                <div className="w-full md:w-3/5 p-8 md:p-12 bg-[#121212]">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">About the project</h4>
                                        <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                                            {selectedProject.longDescription}
                                        </p>

                                        <div className="mb-10">
                                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Core Technologies</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.techStack.map((tech, i) => (
                                                    <motion.span 
                                                        key={tech} 
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: 0.5 + (i * 0.05) }}
                                                        className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm text-gray-200 border border-white/5 transition-colors cursor-default"
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex gap-4 pt-4 border-t border-white/10">
                                            <a 
                                                href={selectedProject.repo} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="flex-1 py-4 rounded-xl bg-white text-black font-bold text-center hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                                View Code
                                            </a>
                                           
                                        </div>
                                    </motion.div>
                                </div>
                           </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
      </div>
    </section>
  );
}

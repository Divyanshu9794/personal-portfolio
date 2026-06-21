// import React, { useState } from "react";

// import { projects, filters } from "../data";
// import Div from "./Div";

// const Portfolio = () => {
//     const [selectedTag, setSelectedTag] = useState("all");
//     const [projectData, setProjectData] = useState(projects);

//     const filterHandler = (tag) => {
//         setSelectedTag(tag);
//         let filteredProjects = [];
//         if (tag === "all") {
//             filteredProjects = projects;
//         } else {
//             filteredProjects = projects.filter((p) => p.tags.includes(tag));
//         }
//         setProjectData(filteredProjects);
//     };

//     return (
//         <div id="work" className="mt-10 relative">
//             {/* SECTION HEADING START */}
//             <Div className="mb-10">
//                 <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-2">
//                     Latest Projects
//                 </div>
//                 <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-[#CCCCCC] text-center">
                   
//                 </div>
//             </Div>
//             {/* SECTION HEADING END */}

//             {/* FILTER TAGS START */}
//             <Div className="flex justify-start md:justify-center gap-[10px] mb-[50px] overflow-auto">
//                 {filters.map((item, index) => (
//                     <div
//                         key={index}
//                         className={`bg-[#252525] rounded-lg py-[10px] px-[17px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] cursor-pointer whitespace-nowrap ${
//                             selectedTag === item.id
//                                 ? "bg-[#EFB946] text-black"
//                                 : ""
//                         }`}
//                         onClick={() => filterHandler(item.id)}
//                     >
//                         {item.name}
//                     </div>
//                 ))}
//             </Div>
//             {/* FILTER TAGS START */}

//             {/* PROJECTS GRID START */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//                 {projectData.map((item, index) => {
//                     return (
//                         <Div
//                             key={index}
//                             className="flex flex-col gap-4 cursor-pointer"
//                         >
//                             <div className="bg-black rounded-[20px] aspect-video overflow-hidden">
//                             <a href={item.link} target="_blank"><img
//                                     src={item.image}
//                                     className="transition-transform hover:-translate-y-[25%] hover:duration-2500 ease-linear"
//                                 /></a>
//                             </div>
//                             <div className="text-[20px] 2xl:text-[24px] text-[#CCCCCC] text-center">
//                             <a href={item.link} target="_blank">{item.name}</a>
//                             </div>
//                             <div className="text-[20px] 2xl:text-[24px] text-[#CCCCCC] text-center">
                            
//                             </div>
//                         </Div>
//                     );
//                 })}
//             </div>
//             {/* PROJECTS GRID START */}
//         </div>
//     );
// };

// export default Portfolio;









import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { projects, filters } from "../data";
import Div from "./Div";

const Portfolio = () => {
    const [selectedTag, setSelectedTag] = useState("all");
    const [projectData, setProjectData] = useState(projects);

    const filterHandler = (tag) => {
        setSelectedTag(tag);
        let filteredProjects = [];
        if (tag === "all") {
            filteredProjects = projects;
        } else {
            filteredProjects = projects.filter((p) => p.tags.includes(tag));
        }
        setProjectData(filteredProjects);
    };

    // Fully optimized technical descriptions with case-insensitive keyword parsing
    const getProjectDescription = (name) => {
        const lowerName = name.toLowerCase();

        if (lowerName.includes("filedrop")) {
            return "A serverless, peer-to-peer file transfer platform leveraging WebRTC DataChannels and cloud signaling for high-speed browser-to-browser data streams.";
        }
        if (lowerName.includes("yummy cart") && lowerName.includes("admin")) {
            return "An enterprise restaurant control client engineered in Kotlin to track earnings, process real-time incoming payloads, and manage active dispatch workflows.";
        }
        if (lowerName.includes("yummy cart")) {
            return "A location-aware native Android application featuring secure user authentication, interactive restaurant discovery, and dynamic cart state management.";
        }
        if (lowerName.includes("upaj") && lowerName.includes("website")) {
            return "A full-stack web application designed for processing, modeling, and displaying predictive multi-variant agricultural analytics.";
        }
        if (lowerName.includes("upaj")) {
            return "A machine learning-backed Android client engineered to process real-time soil chemistry and weather telemetry for localized crop optimization.";
        }
        if (lowerName.includes("busyatri") && lowerName.includes("tableau")) {
            return "A business intelligence dashboard mapping transit revenue data streams, transaction metrics, and operational performance indicators.";
        }
        if (lowerName.includes("busyatri")) {
            return "An integrated public transit optimization platform designed and built for the Smart India Hackathon (SIH 2023).";
        }
        if (lowerName.includes("disease") || lowerName.includes("plant")) {
            return "A computer vision backend pipeline built to analyze crop foliage telemetry and identify structural plant diseases using neural networks.";
        }
        if (lowerName.includes("olympics")) {
            return "An end-to-end data engineering pipeline built to aggregate, clean, and analyze historical performance metrics from the Olympic Games.";
        }
        if (lowerName.includes("bloggers")) {
            return "A full-stack multi-user content publishing system supporting structural markdown rendering and secure user content isolation.";
        }
        if (lowerName.includes("edureka")) {
            return "An open-source discussion portal designed as an interactive center for community engineering and peer-to-peer technical mentorship.";
        }
        if (lowerName.includes("coder")) {
            return "A highly indexed documentation engine built to organize structural guides and roadmaps for computer science students.";
        }
        if (lowerName.includes("portfolio")) {
            return "A high-performance personal developer portfolio engineered with React, Tailwind CSS, and Framer Motion for premium fluid layouts.";
        }

        return "A production-grade software system optimized for clean architecture, modern performance metrics, and scalable data deployment.";
    };

    return (
        <div id="work" className="mt-10 relative z-10">
            {/* SECTION HEADING START */}
            <Div className="mb-14">
                <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-2 select-none">
                    Latest Projects
                </div>
                <div className="text-[14px] md:text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-[#CCCCCC] text-center max-w-2xl mx-auto font-light">
                    Production software repositories, cloud infrastructure architectures, and predictive machine learning models.
                </div>
            </Div>
            {/* SECTION HEADING END */}

            {/* FILTER TAGS START */}
            <Div className="flex justify-start md:justify-center gap-[10px] mb-[60px] overflow-auto segment-scroll px-4">
                {filters.map((item, index) => {
                    const isActive = selectedTag === item.id;
                    return (
                        <div
                            key={index}
                            className={`border rounded-lg py-[10px] px-[18px] text-[14px] 2xl:text-[16px] font-medium font-mono uppercase tracking-wide cursor-pointer whitespace-nowrap transition-all duration-300 select-none ${
                                isActive
                                    ? "bg-[#EFB946] text-[#111111] border-[#EFB946] font-bold shadow-[0_4px_25px_rgba(239,185,70,0.25)] scale-105"
                                    : "bg-[#141414] text-neutral-400 border-neutral-800/80 hover:border-neutral-600 hover:text-white"
                            }`}
                            onClick={() => filterHandler(item.id)}
                        >
                            {item.name}
                        </div>
                    );
                })}
            </Div>
            {/* FILTER TAGS END */}

            {/* PROJECTS GRID START */}
            <motion.div 
                layout 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <AnimatePresence mode="popLayout">
                    {projectData.map((item, index) => {
                        const description = getProjectDescription(item.name);
                        return (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.92 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.92 }}
                                transition={{ duration: 0.3 }}
                                key={item.id || index} 
                                className="group flex"
                            >
                                <a 
                                    href={item.link} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="w-full bg-[#151515] hover:bg-[#1a1a1a] rounded-xl border border-neutral-900 hover:border-neutral-800 p-6 flex flex-col justify-between transition-all duration-300 relative group"
                                >
                                    <div className="flex flex-col gap-4">
                                        {/* Top Metadata Header Line */}
                                        <div className="flex items-center justify-between w-full font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                                            <div className="flex flex-wrap gap-2">
                                                {item.tags && item.tags.slice(0, 2).map((tag, i) => (
                                                    <span key={i} className="text-[#EFB946]/90 font-bold">
                                                        // {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400 text-[10px]">
                                                View Source ↗
                                            </span>
                                        </div>

                                        {/* Core Project Title */}
                                        <h3 className="text-[20px] 2xl:text-[24px] font-bold text-neutral-200 group-hover:text-[#EFB946] transition-colors leading-tight pt-1">
                                            {item.name}
                                        </h3>

                                        {/* Explicit Multi-line Structural Description */}
                                        <p className="text-[14px] 2xl:text-[16px] text-neutral-400 leading-relaxed font-light">
                                            {description}
                                        </p>
                                    </div>

                                    {/* Clean Bottom Footprint Line */}
                                    <div className="mt-8 pt-4 border-t border-neutral-900/60 flex items-center justify-between font-mono text-[12px] text-neutral-500">
                                        <span className="text-neutral-600 group-hover:text-neutral-400 transition-colors">
                                            Open Repository
                                        </span>
                                        <div className="w-5 h-5 rounded-full bg-neutral-900 flex items-center justify-center group-hover:bg-[#EFB946] group-hover:text-black transition-all duration-300">
                                            <span className="text-[10px] transform group-hover:translate-x-0.5 transition-transform">→</span>
                                        </div>
                                    </div>
                                </a>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </motion.div>
            {/* PROJECTS GRID END */}
        </div>
    );
};

export default Portfolio;
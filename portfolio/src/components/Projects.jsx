import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Wrapper from "./Wrapper";
import Div from "./Div";
import { projects, filters } from "../data";

const SectionHeader = ({ label, title, description }) => (
    <Div className="mb-12 md:mb-16">
        <p className="section-label mb-3">{label}</p>
        <h2 className="section-heading mb-4">{title}</h2>
        {description && (
            <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed">{description}</p>
        )}
    </Div>
);

const TechIcon = ({ tech }) => {
    const colorMap = {
        "React.js": "text-cyan-400",
        "Node.js": "text-green-400",
        "Python": "text-yellow-400",
        "Android": "text-green-500",
        "Kotlin": "text-violet-400",
        "Firebase": "text-orange-400",
        "WebRTC": "text-blue-400",
        "TensorFlow": "text-orange-500",
        "Flask": "text-slate-400",
        "Tableau": "text-blue-500",
    };
    return (
        <span className={`text-xs font-mono ${colorMap[tech] || "text-slate-400"}`}>
            {tech}
        </span>
    );
};

const ProjectCard = ({ project, featured }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            className={`glass-card rounded-2xl overflow-hidden flex flex-col h-full ${
                featured ? "border-blue-500/20" : ""
            }`}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
        >
            {/* Card header / visual */}
            <div className="relative h-36 bg-gradient-to-br from-navy-800 to-navy-900 overflow-hidden flex items-center justify-center">
                {/* Animated gradient bg */}
                <motion.div
                    className="absolute inset-0 opacity-30"
                    style={{
                        background: `radial-gradient(circle at 50% 50%, ${
                            featured ? "#3b82f6" : "#7c3aed"
                        }40, transparent 70%)`,
                    }}
                    animate={{ scale: hovered ? 1.3 : 1 }}
                    transition={{ duration: 0.5 }}
                />

                {/* Project name large */}
                <div className="relative text-center px-6">
                    <div className="text-4xl mb-2">{project.featured ? "⭐" : "📦"}</div>
                    <div className="text-xs font-mono text-slate-500 tracking-wider uppercase">
                        {project.tags[0]}
                    </div>
                </div>

                {/* Featured badge */}
                {project.featured && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 text-xs font-mono">
                        ✦ Featured
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5">
                <h3 className="font-bold text-white text-base mb-1">{project.name}</h3>
                <p className="text-xs text-blue-400 font-mono mb-3">{project.tagline}</p>
                <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">{project.description}</p>

                {/* Highlights */}
                {project.highlights && (
                    <ul className="space-y-1 mb-4">
                        {project.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-500">
                                <svg className="w-3 h-3 text-blue-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                                {h}
                            </li>
                        ))}
                    </ul>
                )}

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.slice(0, 5).map((tech) => (
                        <span key={tech} className="tech-badge text-[10px] py-0.5 px-1.5">{tech}</span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-2 mt-auto">
                    {project.link && project.link !== project.github && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-primary text-xs py-2 px-3 flex-1 justify-center"
                        >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Live Demo
                        </a>
                    )}
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-outline text-xs py-2 px-3 flex-1 justify-center"
                    >
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    const filtered = activeFilter === "all"
        ? projects
        : projects.filter((p) => p.tags.includes(activeFilter));

    const featured = projects.filter((p) => p.featured);
    const others = projects.filter((p) => !p.featured);

    const displayProjects = activeFilter === "all" ? projects : filtered;

    return (
        <section id="projects" className="py-24 md:py-32 bg-navy-900 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-500/6 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-violet-500/6 blur-[120px] pointer-events-none" />

            <Wrapper>
                <SectionHeader
                    label="// featured.projects"
                    title={<>Featured <span className="gradient-text">Projects</span></>}
                    description="A selection of projects spanning web apps, Android development, and machine learning systems."
                />

                {/* Filter tabs */}
                <Div className="flex flex-wrap gap-2 mb-10">
                    {filters.map((f) => (
                        <button
                            key={f.id}
                            onClick={() => setActiveFilter(f.id)}
                            className={`px-4 py-2 rounded-lg text-sm font-mono font-medium transition-all duration-200 ${
                                activeFilter === f.id
                                    ? "bg-blue-600 text-white shadow-glow-blue"
                                    : "glass-card text-slate-400 hover:text-white hover:border-blue-500/30"
                            }`}
                        >
                            {f.name}
                        </button>
                    ))}
                </Div>

                {/* Projects grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFilter}
                        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        {displayProjects.map((project, i) => (
                            <Div key={project.id} delay={i * 0.06} className="h-full">
                                <ProjectCard project={project} featured={project.featured} />
                            </Div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {displayProjects.length === 0 && (
                    <div className="text-center py-16 text-slate-500">
                        <div className="text-4xl mb-4">🔍</div>
                        <div className="font-mono text-sm">No projects found for this filter.</div>
                    </div>
                )}

                {/* GitHub CTA */}
                <Div className="mt-12 text-center">
                    <a
                        href="https://github.com/Divyanshu9794/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-outline inline-flex"
                    >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View All Repositories on GitHub
                    </a>
                </Div>
            </Wrapper>
        </section>
    );
};

export default Projects;

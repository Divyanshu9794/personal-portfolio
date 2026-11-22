import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Wrapper from "./Wrapper";
import { scrollTo, getExperience, getExperienceShort } from "../helper";
import myphoto from "../assets/myphoto.png";

const JOINING_DATE = "2024-11-14";

const TYPED_TITLES = [
    "Software Engineer",
    "Full Stack Developer",
    "React.js Specialist",
    "Azure Cloud Developer",
];

// Typewriter hook
function useTypewriter(words, typingSpeed = 80, pauseMs = 1800, deletingSpeed = 45) {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = words[wordIndex % words.length];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(current.slice(0, text.length + 1));
                if (text.length + 1 === current.length) {
                    setTimeout(() => setIsDeleting(true), pauseMs);
                }
            } else {
                setText(current.slice(0, text.length - 1));
                if (text.length - 1 === 0) {
                    setIsDeleting(false);
                    setWordIndex((i) => i + 1);
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex, words, typingSpeed, pauseMs, deletingSpeed]);

    return text;
}

// Terminal component
const Terminal = () => {
    const lines = [
        { prefix: "$ ", cmd: "whoami", delay: 0.3 },
        { output: "Divyanshu Singh — Software Engineer @ HCLTech", delay: 0.6, color: "text-slate-300" },
        { prefix: "$ ", cmd: 'node -e "console.log(skills)"', delay: 1.0 },
        { output: "{ frontend: 'React.js, JS, Tailwind', backend: 'Node.js, Express.js', cloud: 'Azure', db: 'SQL Server' }", delay: 1.3, color: "text-emerald-400" },
        { prefix: "$ ", cmd: "echo $EXPERIENCE", delay: 1.8 },
        { output: `📅 ${getExperience(JOINING_DATE)} @ HCLTech (since Nov 2024)`, delay: 2.1, color: "text-blue-400" },
        { prefix: "$ ", cmd: "echo $STATUS", delay: 2.5 },
        { output: "🟢 Open to exciting opportunities", delay: 2.8, color: "text-emerald-400" },
    ];

    return (
        <div className="terminal w-full max-w-[520px]">
            <div className="terminal-bar">
                <div className="terminal-dot bg-red-500/80" />
                <div className="terminal-dot bg-yellow-500/80" />
                <div className="terminal-dot bg-green-500/80" />
                <span className="ml-3 text-xs text-slate-500 font-mono">portfolio ~ zsh</span>
            </div>
            <div className="terminal-content space-y-1">
                {lines.map((line, i) =>
                    line.prefix ? (
                        <motion.div
                            key={i}
                            className="flex gap-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: line.delay }}
                        >
                            <span className="terminal-prompt select-none">❯</span>
                            <span className="terminal-cmd">{line.cmd}</span>
                        </motion.div>
                    ) : (
                        <motion.div
                            key={i}
                            className={`pl-4 text-xs ${line.color}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: line.delay }}
                        >
                            {line.output}
                        </motion.div>
                    )
                )}
                <motion.div
                    className="flex gap-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                >
                    <span className="terminal-prompt select-none">❯</span>
                    <span className="terminal-cursor" aria-hidden="true" />
                </motion.div>
            </div>
        </div>
    );
};

const HeroBanner = () => {
    const typedTitle = useTypewriter(TYPED_TITLES);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center overflow-hidden bg-navy-950 grid-bg"
        >
            {/* Ambient glows */}
            <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-900/5 blur-[160px] pointer-events-none" />

            <Wrapper className="w-full relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 py-28 lg:py-36">
                    {/* LEFT: Text Content */}
                    <div className="flex-1 text-center lg:text-left max-w-2xl">
                        {/* Status badge */}
                        <motion.div
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card mb-6 text-xs font-mono text-slate-400"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
                            <span>Analyst @ HCLTech · {getExperience(JOINING_DATE)} · Open to opportunities</span>
                        </motion.div>

                        {/* Greeting */}
                        <motion.p
                            className="section-label mb-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                        >
                            👋 Hi, I'm
                        </motion.p>

                        {/* Name */}
                        <motion.h1
                            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            Divyanshu
                            <br />
                            <span className="gradient-text">Singh</span>
                        </motion.h1>

                        {/* Typewriter role */}
                        <motion.div
                            className="flex items-center justify-center lg:justify-start gap-2 mb-6 h-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.35, duration: 0.5 }}
                        >
                            <span className="text-lg md:text-xl font-semibold text-blue-400 font-mono">
                                {typedTitle}
                                <span className="terminal-cursor align-middle" aria-hidden="true" />
                            </span>
                        </motion.div>

                        {/* Bio */}
                        <motion.p
                            className="text-slate-400 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.45, duration: 0.5 }}
                        >
                            Software Engineer specializing in{" "}
                            <span className="text-slate-200 font-medium">React.js</span>,{" "}
                            <span className="text-slate-200 font-medium">Node.js</span>,{" "}
                            <span className="text-slate-200 font-medium">REST APIs</span>, and{" "}
                            <span className="text-slate-200 font-medium">Microsoft Azure</span>.
                            Building enterprise-grade web applications at HCLTech.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-8"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.55, duration: 0.5 }}
                        >
                            <button
                                onClick={() => scrollTo("projects")}
                                className="btn-primary w-full sm:w-auto justify-center"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-7 7m7-7l-7-7" />
                                </svg>
                                View Projects
                            </button>
                            <a
                                href="https://drive.google.com/file/d/1dWPjQD8Rph1D6LPB4Rj5T9IfhEeRxfDN/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                                className="btn-outline w-full sm:w-auto justify-center"
                                onClick={() => {
                                    if (typeof gtag !== "undefined") {
                                        gtag("event", "resume_download", { event_category: "engagement" });
                                    }
                                }}
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Download Resume
                            </a>
                        </motion.div>

                        {/* Social links */}
                        <motion.div
                            className="flex items-center justify-center lg:justify-start gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.65, duration: 0.5 }}
                        >
                            <a
                                href="https://github.com/Divyanshu9794/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                                className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 transition-all duration-200"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/divyanshu-singh-3b433119b/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-200"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                            <a
                                href="mailto:sdivyanshu352@gmail.com"
                                aria-label="Email"
                                className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-200"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                        </motion.div>
                    </div>

                    {/* RIGHT: Terminal + Photo */}
                    <motion.div
                        className="flex-1 flex flex-col items-center gap-6 w-full lg:max-w-md"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Profile photo */}
                        <div className="relative">
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-glow-blue">
                                <img
                                    src={myphoto}
                                    alt="Divyanshu Singh"
                                    className="w-full h-full object-cover"
                                    loading="eager"
                                />
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-emerald-400 border-4 border-navy-950 flex items-center justify-center">
                                <svg className="w-3.5 h-3.5 text-navy-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>

                        {/* Terminal window */}
                        <Terminal />

                        {/* Quick stats row */}
                        <div className="grid grid-cols-3 gap-3 w-full max-w-[520px]">
                            {[
                                { v: getExperienceShort(JOINING_DATE), l: "Experience" },
                                { v: "12+", l: "Repos" },
                                { v: "5", l: "Certifications" },
                            ].map((s) => (
                                <div key={s.l} className="glass-card rounded-xl p-3 text-center">
                                    <div className="text-xl font-black gradient-text-blue">{s.v}</div>
                                    <div className="text-xs text-slate-500 mt-0.5 font-mono">{s.l}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <span className="text-xs font-mono tracking-wider">scroll</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </motion.div>
            </Wrapper>
        </section>
    );
};

export default HeroBanner;

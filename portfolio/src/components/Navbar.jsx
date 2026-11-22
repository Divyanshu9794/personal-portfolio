import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Wrapper from "./Wrapper";
import { scrollTo as scrollHelper } from "../helper";

const NAV_LINKS = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Certifications", id: "certifications" },
    { label: "Contact", id: "contact" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Active section detection
            const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
            let current = "";
            sections.forEach((sec) => {
                if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
            });
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNav = (id) => {
        scrollHelper(id);
        setMobileOpen(false);
    };

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled
                        ? "bg-navy-950/90 backdrop-blur-md border-b border-white/[0.06]"
                        : "bg-transparent"
                }`}
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <Wrapper>
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="flex items-center gap-2 group"
                            aria-label="Back to top"
                        >
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm shadow-glow-blue group-hover:scale-110 transition-transform">
                                DS
                            </div>
                            <span className="text-sm font-semibold text-slate-200 hidden sm:block tracking-wide">
                                Divyanshu Singh
                            </span>
                        </button>

                        {/* Desktop Nav */}
                        <ul className="hidden md:flex items-center gap-7">
                            {NAV_LINKS.map((link) => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => handleNav(link.id)}
                                        className={`nav-link ${activeSection === link.id ? "active" : ""}`}
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        {/* CTA + hamburger */}
                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.linkedin.com/in/divyanshu-singh-3b433119b/"
                                target="_blank"
                                rel="noreferrer"
                                className="hidden md:flex btn-primary text-sm py-2 px-4"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                                Let's Connect
                            </a>

                            {/* Hamburger */}
                            <button
                                className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
                                onClick={() => setMobileOpen(!mobileOpen)}
                                aria-label="Toggle menu"
                            >
                                <div className="w-5 flex flex-col gap-1.5">
                                    <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                                    <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                                    <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                                </div>
                            </button>
                        </div>
                    </div>
                </Wrapper>
            </motion.nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 bg-navy-950/95 backdrop-blur-lg flex flex-col items-center justify-center md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ul className="flex flex-col items-center gap-8">
                            {NAV_LINKS.map((link, i) => (
                                <motion.li
                                    key={link.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.07 }}
                                >
                                    <button
                                        onClick={() => handleNav(link.id)}
                                        className="text-2xl font-semibold text-slate-200 hover:text-blue-400 transition-colors"
                                    >
                                        {link.label}
                                    </button>
                                </motion.li>
                            ))}
                        </ul>
                        <motion.a
                            href="https://www.linkedin.com/in/divyanshu-singh-3b433119b/"
                            target="_blank"
                            rel="noreferrer"
                            className="mt-10 btn-primary"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            Let's Connect
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;

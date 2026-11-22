import React, { useState } from "react";
import { motion } from "framer-motion";
import Wrapper from "./Wrapper";
import Div from "./Div";
import { contactInfo } from "../data";

const SectionHeader = ({ label, title, description }) => (
    <Div className="mb-12 md:mb-16">
        <p className="section-label mb-3">{label}</p>
        <h2 className="section-heading mb-4">{title}</h2>
        {description && (
            <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed">{description}</p>
        )}
    </Div>
);

const Contact = () => {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle");

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
        const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
        window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
        setStatus("success");
        setTimeout(() => setStatus("idle"), 3000);
    };

    const contacts = [
        {
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            ),
            label: "LinkedIn",
            value: "divyanshu-singh",
            href: contactInfo.linkedin,
            color: "text-blue-400",
            bg: "bg-blue-500/10 border-blue-500/20",
        },
        {
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
            ),
            label: "GitHub",
            value: "@Divyanshu9794",
            href: contactInfo.github,
            color: "text-slate-300",
            bg: "bg-slate-500/10 border-slate-500/20",
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            label: "Email",
            value: contactInfo.email,
            href: `mailto:${contactInfo.email}`,
            color: "text-emerald-400",
            bg: "bg-emerald-500/10 border-emerald-500/20",
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            label: "Phone",
            value: contactInfo.phone,
            href: `tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`,
            color: "text-cyan-400",
            bg: "bg-cyan-500/10 border-cyan-500/20",
        },
    ];

    return (
        <section id="contact" className="py-24 md:py-32 bg-navy-950 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-600/8 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-violet-600/8 blur-[120px] pointer-events-none" />

            <Wrapper>
                <SectionHeader
                    label="// get.in.touch"
                    title={<>Let's <span className="gradient-text">Connect</span></>}
                    description="I'm open to software engineering opportunities in enterprise development, React.js, Node.js, and Azure ecosystems."
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left — contact info */}
                    <div className="space-y-5">
                        <Div className="glass-card rounded-2xl p-6">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
                                <span className="text-sm font-mono text-emerald-400">Available for Opportunities</span>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed mt-3">
                                Analyst - Software Engineer at HCLTech (Lucknow). Reach out for discussions regarding full-stack engineering, cloud systems, or technical collaborations.
                            </p>
                        </Div>

                        <div className="space-y-3">
                            {contacts.map((c, i) => (
                                <Div key={c.label} delay={i * 0.08}>
                                    <a
                                        href={c.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`flex items-center gap-4 glass-card glass-card-hover rounded-xl p-4 border ${c.bg} no-underline`}
                                    >
                                        <div className={`${c.color}`}>{c.icon}</div>
                                        <div className="min-w-0">
                                            <div className="text-xs text-slate-500 font-mono">{c.label}</div>
                                            <div className="text-sm text-slate-200 font-medium truncate">{c.value}</div>
                                        </div>
                                        <svg className="w-4 h-4 text-slate-600 ml-auto shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </Div>
                            ))}
                        </div>
                    </div>

                    {/* Right — contact form */}
                    <Div delay={0.15} className="glass-card rounded-2xl p-6 md:p-8">
                        <h3 className="font-semibold text-white mb-6 text-sm font-mono">
                            <span className="text-blue-400">$</span> send_message.sh
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-mono text-slate-500 mb-1.5">name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formState.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className="w-full bg-navy-800 border border-white/8 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-navy-800 transition-all duration-200 font-sans"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-slate-500 mb-1.5">email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formState.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    className="w-full bg-navy-800 border border-white/8 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-all duration-200 font-sans"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-slate-500 mb-1.5">message *</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={5}
                                    value={formState.message}
                                    onChange={handleChange}
                                    placeholder="Your message..."
                                    className="w-full bg-navy-800 border border-white/8 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-all duration-200 resize-none font-sans"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {status === "sending" ? (
                                    <>
                                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                        Sending...
                                    </>
                                ) : status === "success" ? (
                                    <>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Message Sent!
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </Div>
                </div>
            </Wrapper>
        </section>
    );
};

export default Contact;

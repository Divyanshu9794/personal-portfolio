import React from "react";
import Wrapper from "./Wrapper";
import Div from "./Div";
import { experience } from "../data";

const SectionHeader = ({ label, title, description }) => (
    <Div className="mb-12 md:mb-16">
        <p className="section-label mb-3">{label}</p>
        <h2 className="section-heading mb-4">{title}</h2>
        {description && (
            <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed">{description}</p>
        )}
    </Div>
);

const Experience = () => {
    return (
        <section id="experience" className="py-24 md:py-32 bg-navy-950 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-600/8 blur-[120px] pointer-events-none" />

            <Wrapper>
                <SectionHeader
                    label="// work.history"
                    title={<>Work <span className="gradient-text">Experience</span></>}
                    description="My professional journey building enterprise software at HCLTech."
                />

                <div className="relative">
                    {/* Vertical line */}
                    <div className="hidden md:block absolute left-[18px] top-8 bottom-4 w-px bg-gradient-to-b from-blue-500 via-blue-500/30 to-transparent" />

                    <div className="space-y-10">
                        {experience.map((job, i) => (
                            <Div key={i} delay={i * 0.1} className="relative flex gap-6 md:gap-10">
                                {/* Timeline dot */}
                                <div className="hidden md:flex flex-col items-center pt-1.5 shrink-0">
                                    <div className="w-9 h-9 rounded-full bg-navy-800 border-2 border-blue-500 flex items-center justify-center shadow-glow-blue z-10">
                                        <div className="w-3 h-3 rounded-full bg-blue-400" />
                                    </div>
                                </div>

                                {/* Card */}
                                <div className="flex-1 glass-card glass-card-hover rounded-2xl p-6 md:p-8">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-xs font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded">
                                                    {job.company}
                                                </span>
                                                <span className="text-xs text-slate-500 font-mono">{job.type}</span>
                                            </div>
                                            <h3 className="text-lg md:text-xl font-bold text-white">{job.role}</h3>
                                        </div>
                                        <div className="text-right shrink-0">
                                            <div className="text-sm font-mono text-slate-400">{job.period}</div>
                                            <div className="text-xs text-slate-600 mt-0.5">{job.location}</div>
                                        </div>
                                    </div>

                                    {/* Tech tags */}
                                    <div className="flex flex-wrap gap-1.5 mb-5">
                                        {job.tags.map((tag) => (
                                            <span key={tag} className="tech-badge">{tag}</span>
                                        ))}
                                    </div>

                                    {/* Bullets */}
                                    <ul className="space-y-2">
                                        {job.bullets.map((b, bi) => (
                                            <li key={bi} className="flex items-start gap-3 text-sm text-slate-400">
                                                <svg
                                                    className="w-4 h-4 text-blue-400 mt-0.5 shrink-0"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                                <span>{b}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Div>
                        ))}
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

export default Experience;

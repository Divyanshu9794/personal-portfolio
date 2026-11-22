import React, { useState, useRef, useEffect } from "react";
import Wrapper from "./Wrapper";
import Div from "./Div";
import { skillCategories } from "../data";

const SectionHeader = ({ label, title, description }) => (
    <Div className="mb-12 md:mb-16">
        <p className="section-label mb-3">{label}</p>
        <h2 className="section-heading mb-4">{title}</h2>
        {description && (
            <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed">{description}</p>
        )}
    </Div>
);

const SkillChip = ({ skill, index }) => (
    <Div
        delay={index * 0.03}
        className="group flex items-center gap-2 glass-card glass-card-hover rounded-lg px-3 py-2 cursor-default"
    >
        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-blue-300 transition-colors" />
        <span className="text-sm text-slate-300 group-hover:text-white transition-colors font-medium">
            {skill}
        </span>
    </Div>
);

const Skills = () => {
    return (
        <section id="skills" className="py-24 md:py-32 bg-navy-950 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-900/5 blur-[160px] pointer-events-none" />

            <Wrapper>
                <SectionHeader
                    label="// tech.stack"
                    title={<>Technical <span className="gradient-text">Skills</span></>}
                    description="Technologies and tools I use to build production-grade software."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((cat, ci) => (
                        <Div key={cat.label} delay={ci * 0.08} className="glass-card rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-xl">{cat.icon}</span>
                                <span className="font-semibold text-white text-sm tracking-wide">{cat.label}</span>
                                <div className="flex-1 h-px bg-white/5" />
                                <span className="text-xs font-mono text-slate-600">{cat.skills.length} items</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((skill, si) => (
                                    <SkillChip key={skill} skill={skill} index={si} />
                                ))}
                            </div>
                        </Div>
                    ))}
                </div>

                {/* Coding profiles row */}
                <Div className="mt-14">
                    <p className="section-label mb-6">// coding.profiles</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[
                            {
                                platform: "GitHub",
                                username: "@Divyanshu9794",
                                url: "https://github.com/Divyanshu9794/",
                                stat: "12+ Repos",
                                desc: "Open-source projects, web & ML",
                                color: "border-slate-700",
                                iconBg: "bg-slate-800",
                                icon: (
                                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                ),
                            },
                            {
                                platform: "LeetCode",
                                username: "@Divyanshu9794",
                                url: "https://leetcode.com/u/Divyanshu9794/",
                                stat: "DSA Practice",
                                desc: "Data structures & algorithms",
                                color: "border-orange-500/30",
                                iconBg: "bg-[#1a1a1a]",
                                icon: <span className="text-orange-400 font-bold text-sm font-mono">LC</span>,
                            },
                            {
                                platform: "GeeksForGeeks",
                                username: "@divyanshusingh",
                                url: "https://www.geeksforgeeks.org/user/divyanshusingh/",
                                stat: "CS Concepts",
                                desc: "Computer science fundamentals",
                                color: "border-green-500/30",
                                iconBg: "bg-[#1a1a1a]",
                                icon: <span className="text-green-400 font-bold text-xs font-mono">GfG</span>,
                            },
                        ].map((profile) => (
                            <a
                                key={profile.platform}
                                href={profile.url}
                                target="_blank"
                                rel="noreferrer"
                                className={`glass-card glass-card-hover rounded-2xl p-5 flex items-center gap-4 no-underline border ${profile.color}`}
                            >
                                <div className={`w-10 h-10 rounded-xl ${profile.iconBg} flex items-center justify-center shrink-0`}>
                                    {profile.icon}
                                </div>
                                <div className="min-w-0">
                                    <div className="font-semibold text-white text-sm">{profile.platform}</div>
                                    <div className="text-xs font-mono text-blue-400">{profile.username}</div>
                                    <div className="text-xs text-slate-500 mt-0.5 truncate">{profile.desc}</div>
                                </div>
                                <div className="ml-auto shrink-0">
                                    <span className="tech-badge">{profile.stat}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </Div>
            </Wrapper>
        </section>
    );
};

export default Skills;

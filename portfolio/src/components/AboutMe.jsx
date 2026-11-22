import React from "react";
import { motion } from "framer-motion";
import Wrapper from "./Wrapper";
import Div from "./Div";
import { getExperience } from "../helper";
import { education } from "../data";

const JOINING_DATE = "2024-11-14";

const SectionHeader = ({ label, title, description }) => (
    <Div className="mb-12 md:mb-16">
        <p className="section-label mb-3">{label}</p>
        <h2 className="section-heading mb-4">{title}</h2>
        {description && (
            <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed">
                {description}
            </p>
        )}
    </Div>
);

const AboutMe = () => {
    const interests = [
        "Full Stack Web Development",
        "React.js & Node.js Architecture",
        "Microsoft Azure Cloud Infrastructure",
        "Power Platform & Workflow Orchestration",
        "Logic Apps & Power Automate",
        "Android Studio (Kotlin)",
        "REST APIs & RBAC Security",
        "Database Architecture (SQL Server, MongoDB)",
    ];

    const edu = education[0];

    return (
        <section id="about" className="py-24 md:py-32 bg-navy-900 relative overflow-hidden">
            {/* Subtle ambient */}
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-violet-600/8 blur-[100px] pointer-events-none" />

            <Wrapper>
                <SectionHeader
                    label="// about.me"
                    title={<>About <span className="gradient-text">Me</span></>}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left — bio */}
                    <div className="space-y-5">
                        <Div className="glass-card rounded-2xl p-6 space-y-4">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="glow-dot" />
                                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">Professional Summary</span>
                            </div>
                            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                                🚀 Currently working as an{" "}
                                <strong className="text-white">Analyst - Software Engineer at HCLTech</strong> (Lucknow, Uttar Pradesh),
                                I engineer and deliver enterprise-grade web applications. I specialize in building
                                responsive user interfaces with <strong className="text-blue-400">React.js</strong>,
                                developing robust RESTful APIs with{" "}
                                <strong className="text-blue-400">Node.js &amp; Express.js</strong>, and deploying
                                secure, scalable solutions on{" "}
                                <strong className="text-blue-400">Microsoft Azure App Service</strong>.
                            </p>
                            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                                🛠️ Beyond core full-stack engineering, I architect enterprise automation workflows using{" "}
                                <strong className="text-white">Microsoft Power Platform</strong>. I design automated data processing pipelines and business-critical workflows using Power Apps, Power Automate, and Logic Apps integrated with SharePoint and SQL Server to maximize operational efficiency.
                            </p>
                            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                                💻 Graduated with a <strong className="text-white">Bachelor of Technology in Computer Science with Honors (CGPA: 8.36/10)</strong> and achieved a <strong className="text-white">GATE 2024 qualification</strong>. Proficient in JavaScript, C++, Kotlin, and SQL.
                            </p>
                            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                                🏆 Awarded the <strong className="text-yellow-400">Rising Star Award</strong> within 6 months of joining HCLTech, followed by the <strong className="text-yellow-400">Outstanding Contributor</strong> award for high-impact production deliveries. Selected for the prestigious <strong className="text-white">Amazon Summer ML School 2023</strong>.
                            </p>
                        </Div>
                    </div>

                    {/* Right — interests + quick facts + education */}
                    <div className="space-y-6">
                        <Div delay={0.1} className="glass-card rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="glow-dot" />
                                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">Areas of Expertise</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {interests.map((item) => (
                                    <span key={item} className="tech-badge">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </Div>

                        <Div delay={0.15} className="glass-card rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="glow-dot" />
                                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">Quick Details</span>
                            </div>
                            <dl className="space-y-3">
                                {[
                                    { key: "Location", val: "Lucknow, Uttar Pradesh, India 🇮🇳" },
                                    { key: "Current Role", val: "Analyst - Software Engineer @ HCLTech" },
                                    { key: "Experience", val: `${getExperience(JOINING_DATE)} (Nov 2024 – Present)` },
                                    { key: "Education", val: "B.Tech CSE with Honors · CGPA: 8.36/10" },
                                    { key: "Graduation", val: "Jul 2024 (UCER Prayagraj)" },
                                    { key: "Phone", val: "+91 97947 63252" },
                                    { key: "Email", val: "sdivyanshu352@gmail.com" },
                                ].map(({ key, val }) => (
                                    <div key={key} className="flex items-start gap-3">
                                        <span className="text-xs font-mono text-slate-500 w-28 shrink-0 pt-0.5">{key}</span>
                                        <span className="text-sm text-slate-300 font-medium">{val}</span>
                                    </div>
                                ))}
                            </dl>
                        </Div>

                        {/* Education Card */}
                        <Div delay={0.2} className="glass-card rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="glow-dot" />
                                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">Education</span>
                            </div>
                            <div>
                                <div className="text-white font-semibold text-base">{edu.institution}</div>
                                <div className="text-slate-300 text-sm mt-1">{edu.degree}</div>
                                <div className="flex items-center gap-3 mt-2 flex-wrap">
                                    <span className="tech-badge font-bold text-blue-300">{edu.grade}</span>
                                    <span className="tech-badge">{edu.period}</span>
                                    <span className="tech-badge">{edu.location}</span>
                                </div>
                                <div className="mt-3 space-y-1">
                                    {edu.highlights.map((h) => (
                                        <div key={h} className="flex items-center gap-2 text-xs text-slate-400">
                                            <svg className="w-3 h-3 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {h}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

export default AboutMe;

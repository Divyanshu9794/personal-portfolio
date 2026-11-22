import React from "react";
import Wrapper from "./Wrapper";
import Div from "./Div";
import { certifications, achievements } from "../data";
import { getExperience } from "../helper";

const JOINING_DATE = "2024-11-14";

const SectionHeader = ({ label, title, description }) => (
    <Div className="mb-12 md:mb-16">
        <p className="section-label mb-3">{label}</p>
        <h2 className="section-heading mb-4">{title}</h2>
        {description && (
            <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed">{description}</p>
        )}
    </Div>
);

const Certifications = () => {
    return (
        <section id="certifications" className="py-24 md:py-32 bg-navy-900 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-violet-600/8 blur-[100px] pointer-events-none" />

            <Wrapper>
                <SectionHeader
                    label="// achievements.certs"
                    title={<>Certifications & <span className="gradient-text">Achievements</span></>}
                    description="Validated technical credentials and production achievements recognized by HCLTech, Microsoft, and Anthropic."
                />

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
                    {certifications.map((cert, i) => (
                        <Div key={cert.title} delay={i * 0.08} className="glass-card glass-card-hover rounded-2xl p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                                    style={{ background: `${cert.color}20`, border: `1px solid ${cert.color}40` }}
                                >
                                    {cert.icon}
                                </div>
                                <div className="text-right">
                                    <span
                                        className="text-xs font-mono font-bold px-2 py-0.5 rounded block"
                                        style={{ background: `${cert.color}20`, color: cert.color }}
                                    >
                                        {cert.badge}
                                    </span>
                                    {cert.date && (
                                        <span className="text-[11px] font-mono text-slate-400 mt-1 block">
                                            {cert.date}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <h3 className="font-bold text-white text-base mb-1">{cert.title}</h3>
                            <p className="text-xs font-mono text-blue-400 mb-3">
                                {cert.code} · {cert.issuer}
                            </p>
                            <p className="text-xs text-slate-400 leading-relaxed">{cert.description}</p>
                            <div className="mt-4 flex items-center gap-2">
                                <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-xs text-emerald-400 font-mono">Credential Verified</span>
                            </div>
                        </Div>
                    ))}
                </div>

                {/* Key Metrics Row */}
                <Div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {[
                        { value: getExperience(JOINING_DATE), label: "Experience", sub: "Nov 2024 – Present" },
                        { value: "2+", label: "Enterprise Apps", sub: "Production Deployed" },
                        { value: "8.36", label: "Honors CGPA", sub: "UCER B.Tech CSE" },
                        { value: "5", label: "Certifications", sub: "Cloud, AI & APIs" },
                    ].map((s) => (
                        <div
                            key={s.label}
                            className="glass-card rounded-2xl p-5 text-center"
                        >
                            <div className="text-3xl font-black gradient-text mb-1">{s.value}</div>
                            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wide">{s.label}</div>
                            <div className="text-xs text-slate-500 mt-0.5 font-mono">{s.sub}</div>
                        </div>
                    ))}
                </Div>

                {/* Achievements List from Resume */}
                <Div delay={0.1} className="glass-card rounded-2xl p-6 md:p-8 border border-yellow-500/20">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-xl shrink-0">
                            🏆
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-lg">Honors &amp; Recognitions</h3>
                            <p className="text-xs text-slate-400 font-mono">Official achievements documented in professional record</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {achievements.map((item) => (
                            <div key={item.id} className="p-4 rounded-xl bg-navy-950/60 border border-white/5 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between gap-2 mb-1.5">
                                        <h4 className="font-bold text-slate-200 text-sm">{item.title}</h4>
                                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                                            {item.tag}
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Div>
            </Wrapper>
        </section>
    );
};

export default Certifications;

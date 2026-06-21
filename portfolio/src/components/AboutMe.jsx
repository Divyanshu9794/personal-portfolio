import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import flag from "../assets/indian-flag.png";
import pe1 from "../assets/sec-2-p-e-1.png";
import pe2 from "../assets/sec-2-p-e-2.png";
import Div from "./Div";

const AboutMe = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [100, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 500], [0, -200], { clamp: false });
    return (
        <div
            id="about"
            className="w-full py-[50px] md:py-[100px] bg-white text-black relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <span className="sec-2-bg-gradient" />
            <motion.img className="sec-2-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-2-p-e-2" style={{ y: y2 }} src={pe2} />
            {/* BACKGROUND ELEMENTS END */}

            <Wrapper>
                {/* HEADING START */}
                <Div className="text-[40px] md:text-[90px] 2xl:text-[120px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[40px] 2xl:mb-[60px] flex flex-col relative">
                    {/* <span>A Product Designer</span>
                    <span className="flex items-center gap-2">
                        <span>Based</span>
                        <img
                            src={flag}
                            alt=""
                            className="w-[70px] md:w-[150px] 2xl:w-[190px] block mt-1 md:mt-2"
                        />
                        <span>In India</span>
                    </span> */}
                </Div>
                {/* HEADING END */}
                {/* PARAGRAPH START */}
                {/* PARAGRAPH START */}
                <div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                🚀 Currently working as an <strong>Analyst - Software Engineer at HCLTech</strong>, I engineer and deliver enterprise-grade web applications. I specialize in building responsive user interfaces with <strong>React.js</strong>, developing robust RESTful APIs with <strong>Node.js & Express.js</strong>, and deploying secure, scalable solutions on <strong>Microsoft Azure</strong> .
                </div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                🛠️ Beyond core full-stack development, I possess strong expertise in workflow orchestration using the <strong>Microsoft Power Platform</strong> . I design automated data processing pipelines and business-critical workflows using Power Apps, Power Automate, and Logic Apps to maximize operational efficiency .
                </div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                💻 Backed by a Bachelor's degree in Computer Science & Engineering (Honors) and a <strong>GATE qualification</strong>, I navigate the technical landscape with strong foundational skills. My core programming capabilities span <strong>JavaScript, C++, Python, and SQL</strong>, allowing me to build robust backend scripts and solve complex architectural problems efficiently.
                </div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                📜 Validating my technical expertise, I hold multiple professional certifications, including <strong>Microsoft Azure Fundamentals (AZ-900)</strong>, <strong>Azure AI Fundamentals (AI-900)</strong>, and <strong>Power Platform Fundamentals (PL-900)</strong> . Additionally, I am certified in <strong>Claude Code in Action by Anthropic</strong> and recognized as a <strong>Postman API Student Expert</strong> .
                </div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                🏆 Driven by a commitment to high performance, I was honored with the <strong>Rising Star Award</strong> and recognized as an <strong>Outstanding Contributor</strong> within my first six months at HCLTech . My problem-solving background also includes being selected for the prestigious <strong>Amazon Summer ML School</strong> .
                </div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                🌱 On the innovation front, I engineered <strong>UPAJ (Crop Suggestion System)</strong>, a machine learning-backed platform that leverages Python and real-time weather/soil analytics to deliver personalized agricultural recommendations, improving predictive accuracy by 25% .
                </div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                🔍 Recognized for strong technical discipline, organizational finesse, and acute attention to detail, I thrive in dynamic development environments where I can build software that leaves a measurable digital footprint .
                </div>
                {/* PARAGRAPH END */}                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] relative">
                    {/* Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled itLorem Ipsum is
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it */}
                </Div>
                {/* PARAGRAPH END */}
            </Wrapper>
        </div>
    );
};

export default AboutMe;

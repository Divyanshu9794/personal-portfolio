import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import SkillIcon from "./SkillIcon";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Achievements from "./Achievements";
import Div from "./Div";

// IMAGES
import wordpress from "../assets/wordpress.png";
import tableu from "../assets/Tableau-Logo.png";
import PHP from "../assets/php.png";
import android from "../assets/android.jpg";
import sk8 from "../assets/sk-8.png";
import sk9 from "../assets/sk-9.png";
import sk10 from "../assets/sk-10.png";

import pattern from "../assets/heading-pattern.png";
import pe1 from "../assets/sec-3-p-e-1.png";
import pe2 from "../assets/sec-3-p-e-2.png";
import pe3 from "../assets/sec-3-p-e-3.png";

const Skills = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1500], [1000, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 2200], [1500, 0], { clamp: false });
    const y3 = useTransform(scrollY, [0, 2700], [2000, 0], { clamp: false });
    return (
        <div
            id="skills"
            className="bg-[#111111] py-[50px] md:py-[100px] relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <div className="sec-3-bg-gradient-1" />
            <div className="sec-3-bg-gradient-2" />
            <motion.img className="sec-3-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-3-p-e-2" style={{ y: y2 }} src={pe2} />
            <motion.img className="sec-3-p-e-3" style={{ y: y3 }} src={pe3} />
            {/* BACKGROUND ELEMENTS END */}
            <Wrapper>
                {/* SKILL ICONS START */}
                <Div className="grid grid-cols-4 gap-3 md:grid-cols-11 relative">
                <SkillIcon path={wordpress} />
                <SkillIcon path={tableu} />
                <SkillIcon path={PHP} />
                <SkillIcon path={android} />
                    <SkillIcon path={sk8} />
                    <SkillIcon path={sk9} />
                    <SkillIcon path={sk10} />
                   
                </Div>
                {/* SKILL ICONS END */}

                {/* SERVICES SECTION START */}
                <div className="flex items-end justify-between flex-wrap-reverse py-[50px] md:py-[100px] relative">
                    {/* SERVICES START */}
                    <div className="md:max-w-[65%] flex flex-col gap-6 md:gap-10">
                        <Service
                            num="1"
                            title="Frontend Development"
                            desc="Passionate about creating immersive and user-centric digital journeys, I thrive as a frontend developer. Armed with expertise in HTML, CSS, JavaScript, and cutting-edge frameworks like React and Vue.js, I blend artistic design with seamless functionality to craft visually stunning and intuitive interfaces. With meticulous attention to detail and a commitment to delivering exceptional user experiences, I bring ideas to life, leaving a lasting impact on the digital landscape. Let's collaborate and shape the future of the web together!"
                            data={[
                                
                            ]}
                        />
                        <Service
                            num="2"
                            title="Android Development"
                            desc="Driven by my passion for Android development, I specialize in creating captivating mobile experiences using Java and Android Studio. With a meticulous eye for detail and a knack for problem-solving, I build robust and user-friendly Android applications that exceed expectations. From designing elegant UI/UX interfaces to implementing efficient algorithms, I thrive on delivering high-quality, performance-driven solutions. With an unwavering commitment to staying up-to-date with the latest industry trends, I constantly strive to push the boundaries of what's possible in the world of Android development."
                            data={[
                               
                            ]}
                        />
                        <Service
                            num="3"
                            title="Backend Development"
                            desc="As a skilled backend developer, I specialize in harnessing the full potential of Node.js, MongoDB, PHP, and JavaScript to build robust and scalable applications. With a deep understanding of database connectivity, I create seamless interactions between front-end interfaces and back-end systems. From crafting efficient APIs to optimizing server performance, I thrive in architecting reliable and secure solutions that empower businesses to thrive in the digital landscape. Let me transform your vision into a dynamic reality, powered by cutting-edge technologies and seamless data integration."
                            data={[
                               
                            ]}
                        />
                        <Service
                            num="4"
                            title="Wordpress Development"
                            desc="ith a passion for WordPress development, I specialize in crafting dynamic and visually stunning websites. Leveraging my expertise in HTML, CSS, and JavaScript, I transform ideas into pixel-perfect WordPress solutions. Whether it's custom theme development, plugin customization, or optimizing website performance, I deliver exceptional results. With an eye for design and a commitment to user experience, I ensure seamless functionality and intuitive interfaces. Let's collaborate to bring your vision to life and create an impactful online presence."
                            data={[
                                
                            ]}
                        />

                        <Service
                            num="5"
                            title="Tableau Data Analyser"
                            desc="As a Tableau Analyst with a solid foundation in the basics, I excel at transforming raw data into captivating visual narratives. With an innate ability to unravel complex datasets, I leverage Tableau's power to unlock actionable insights. From crafting dynamic dashboards to conducting data exploration, I bring a creative touch to data analysis. With Tableau as my trusted companion, I transform numbers into compelling stories that empower decision-makers. Together, let's embark on a journey of data exploration and unveil the untold potential hidden within your organization's information landscape."
                            data={[
                                
                            ]}
                        />  
                    </div>
                    {/* SERVICES END */}

                    {/* SECTION HEADING START */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-10 md:mb-0 md:sticky top-2">
                        <span>Solving</span>
                        <span>Problems</span>
                        <span className="flex items-center gap-2">
                            Through
                            <img
                                src={pattern}
                                className="block md:hidden w-[80px] mt-1"
                            />
                        </span>
                        <span className="flex items-center gap-4">
                            Good{" "}
                            <img
                                src={pattern}
                                className="hidden md:block md:w-[140px] 2xl:w-[190px] mt-3"
                            />
                        </span>
                        <span>Services</span>
                    </div>
                    {/* SECTION HEADING END */}
                </div>
                {/* SERVICES SECTION END */}

                <Portfolio />
                <Achievements />
            </Wrapper>
        </div>
    );
};

export default Skills;

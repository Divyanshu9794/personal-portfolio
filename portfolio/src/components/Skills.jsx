// import React from "react";
// import { motion, useTransform, useScroll } from "framer-motion";

// import Wrapper from "./Wrapper";
// import SkillIcon from "./SkillIcon";
// import Service from "./Service";
// import Portfolio from "./Portfolio";
// import Achievements from "./Achievements";
// import Div from "./Div";

// // IMAGES
// import tableu from "../assets/Tableau-Logo.png";
// import android from "../assets/android.jpg";
// import sk8 from "../assets/sk-8.png";
// import sk9 from "../assets/sk-9.png";
// import sk10 from "../assets/sk-10.png";

// import pattern from "../assets/heading-pattern.png";
// import pe1 from "../assets/sec-3-p-e-1.png";
// import pe2 from "../assets/sec-3-p-e-2.png";
// import pe3 from "../assets/sec-3-p-e-3.png";

// const Skills = () => {
//     const { scrollY } = useScroll();
//     const y1 = useTransform(scrollY, [0, 1500], [1000, 0], { clamp: false });
//     const y2 = useTransform(scrollY, [0, 2200], [1500, 0], { clamp: false });
//     const y3 = useTransform(scrollY, [0, 2700], [2000, 0], { clamp: false });
//     return (
//         <div
//             id="skills"
//             className="bg-[#111111] py-[50px] md:py-[100px] relative overflow-hidden"
//         >
//             {/* BACKGROUND ELEMENTS START */}
//             <div className="sec-3-bg-gradient-1" />
//             <div className="sec-3-bg-gradient-2" />
//             <motion.img className="sec-3-p-e-1" style={{ y: y1 }} src={pe1} />
//             <motion.img className="sec-3-p-e-2" style={{ y: y2 }} src={pe2} />
//             <motion.img className="sec-3-p-e-3" style={{ y: y3 }} src={pe3} />
//             {/* BACKGROUND ELEMENTS END */}
//             <Wrapper>
//                 {/* SKILL ICONS START */}
//                 <Div className="grid grid-cols-4 gap-3 md:grid-cols-11 relative">
//                     <SkillIcon path={tableu} />
//                     <SkillIcon path={android} />
//                     <SkillIcon path={sk8} />
//                     <SkillIcon path={sk9} />
//                     <SkillIcon path={sk10} />
//                 </Div>
//                 {/* SKILL ICONS END */}

//                 {/* SERVICES SECTION START */}
//                 <div className="flex items-end justify-between flex-wrap-reverse py-[50px] md:py-[100px] relative">
//                     {/* SERVICES START */}
//                     <div className="md:max-w-[65%] flex flex-col gap-6 md:gap-10">
//                         <Service
//                             num="1"
//                             title="Frontend Development"
//                             desc="Specialized in crafting modular, highly responsive, and user-centric web applications. Proficient in React.js, modern JavaScript, and component frameworks like Tailwind and Bootstrap, I transform intuitive UI/UX designs into seamless digital interfaces optimized for ultimate client side performance."
//                             data={[]}
//                         />
//                         <Service
//                             num="2"
//                             title="Backend Engineering"
//                             desc="Experienced in designing robust server-side architectures and building highly scalable backend systems. I engineer structured RESTful APIs using Node.js and Express.js, while managing secure data layers with MongoDB, SQL Server, and Firebase Realtime Databases."
//                             data={[]}
//                         />
//                         <Service
//                             num="3"
//                             title="Cloud Infrastructure & DevOps"
//                             desc="Skilled in leveraging Microsoft Azure cloud environments to deploy, monitor, and scale software. I ensure complete application security, configuration management, and zero-downtime hosting solutions utilizing Azure App Service ecosystems alongside unified access policies."
//                             data={[]}
//                         />
//                         <Service
//                             num="4"
//                             title="Microsoft Power Platform"
//                             desc="Expertise in architecting enterprise automation workflows and interactive client software layers. I build scalable Canvas applications via Power Apps, orchestrate integrated API pipelines via Power Automate and Logic Apps, and configure secure data layers leveraging SharePoint architectures."
//                             data={[]}
//                         />
//                         <Service
//                             num="5"
//                             title="Mobile Development"
//                             desc="Proficient in designing and building native smartphone applications within Android Studio utilizing Kotlin and Java. Experienced in crafting architecture flows for localized mobile apps, data synchronization modules, and real-time backend updates integrated seamlessly via Firebase."
//                             data={[]}
//                         />
//                         <Service
//                             num="6"
//                             title="Machine Learning & Analytics"
//                             desc="Equipped with foundational predictive engineering models backed by selection in the Amazon Summer ML School. I process complex agricultural datasets and build telemetry analytical loops, leveraging custom Python modules and Tableau dashboard structures to transform unstructured data into visual insights."
//                             data={[]}
//                         /> 
//                     </div>
//                     {/* SERVICES END */}

//                     {/* SECTION HEADING START */}
//                     <div className="flex flex-wrap justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-10 md:mb-0 md:sticky top-2">
//                         <span>Solving</span>
//                         <span>Problems</span>
//                         <span className="flex items-center gap-2">
//                             Through
//                             <img
//                                 src={pattern}
//                                 className="block md:hidden w-[80px] mt-1"
//                             />
//                         </span>
//                         <span className="flex items-center gap-4">
//                             Good{" "}
//                             <img
//                                 src={pattern}
//                                 className="hidden md:block md:w-[140px] 2xl:w-[190px] mt-3"
//                             />
//                         </span>
//                         <span>Services</span>
//                     </div>
//                     {/* SECTION HEADING END */}
//                 </div>
//                 {/* SERVICES SECTION END */}

//                 <Portfolio />
//                 <Achievements />
//             </Wrapper>
//         </div>
//     );
// };

// export default Skills;

















import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import SkillIcon from "./SkillIcon";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Achievements from "./Achievements";
import Div from "./Div";

// IMAGES
import tableu from "../assets/Tableau-Logo.png";
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
            className="bg-[#111111] py-[60px] md:py-[120px] relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <div className="sec-3-bg-gradient-1 pointer-events-none opacity-40 z-0" />
            <div className="sec-3-bg-gradient-2 pointer-events-none opacity-40 z-0" />
            <motion.img className="sec-3-p-e-1 pointer-events-none z-0" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-3-p-e-2 pointer-events-none z-0" style={{ y: y2 }} src={pe2} />
            <motion.img className="sec-3-p-e-3 pointer-events-none z-0" style={{ y: y3 }} src={pe3} />
            {/* BACKGROUND ELEMENTS END */}
            
            <Wrapper>
                {/* SKILL ICONS START */}
                <Div className="relative z-10 mb-16">
                    <div className="text-[12px] font-mono tracking-widest text-[#EFB946] uppercase mb-6 text-center md:text-left">
                        // Core Tech Stack
                    </div>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6">
                        <SkillIcon path={tableu} />
                        <SkillIcon path={android} />
                        <SkillIcon path={sk8} />
                        <SkillIcon path={sk9} />
                        <SkillIcon path={sk10} />
                    </div>
                </Div>
                {/* SKILL ICONS END */}

                {/* SERVICES SECTION START */}
                <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-12 lg:gap-16 py-[40px] md:py-[80px] relative z-10">
                    
                    {/* LEFT COLUMN: SERVICES LIST */}
                    <div className="w-full lg:max-w-[60%] flex flex-col gap-12 md:gap-16">
                        <Service
                            num="1"
                            title="Frontend Development"
                            desc="Specialized in crafting modular, highly responsive, and user-centric web applications. Proficient in React.js, modern JavaScript, and component frameworks like Tailwind and Bootstrap, I transform intuitive UI/UX designs into seamless digital interfaces optimized for ultimate client side performance."
                            data={[]}
                        />
                        <Service
                            num="2"
                            title="Backend Engineering"
                            desc="Experienced in designing robust server-side architectures and building highly scalable backend systems. I engineer structured RESTful APIs using Node.js and Express.js, while managing secure data layers with MongoDB, SQL Server, and Firebase Realtime Databases."
                            data={[]}
                        />
                        <Service
                            num="3"
                            title="Cloud Infrastructure & DevOps"
                            desc="Skilled in leveraging Microsoft Azure cloud environments to deploy, monitor, and scale software. I ensure complete application security, configuration management, and zero-downtime hosting solutions utilizing Azure App Service ecosystems alongside unified access policies."
                            data={[]}
                        />
                        <Service
                            num="4"
                            title="Microsoft Power Platform"
                            desc="Expertise in architecting enterprise automation workflows and interactive client software layers. I build scalable Canvas applications via Power Apps, orchestrate integrated API pipelines via Power Automate and Logic Apps, and configure secure data layers leveraging SharePoint architectures."
                            data={[]}
                        />
                        <Service
                            num="5"
                            title="Mobile Development"
                            desc="Proficient in designing and building native smartphone applications within Android Studio utilizing Kotlin and Java. Experienced in crafting architecture flows for localized mobile apps, data synchronization modules, and real-time backend updates integrated seamlessly via Firebase."
                            data={[]}
                        />
                        <Service
                            num="6"
                            title="Machine Learning & Analytics"
                            desc="Equipped with foundational predictive engineering models backed by selection in the Amazon Summer ML School. I process complex agricultural datasets and build telemetry analytical loops, leveraging custom Python modules and Tableau dashboard structures to transform unstructured data into visual insights."
                            data={[]}
                        /> 
                    </div>
                    {/* SERVICES LIST END */}

                    {/* RIGHT COLUMN: STICKY HEADING */}
                    <div className="w-full lg:w-[35%] lg:sticky lg:top-24 self-start">
                        <div className="flex flex-wrap lg:flex-col justify-start text-[42px] md:text-[76px] xl:text-[90px] leading-[1.05] font-oswald uppercase text-gradient font-black tracking-tight select-none">
                            <span>Solving</span>
                            <span>Problems</span>
                            <span className="flex items-center gap-3">
                                Through
                                <img
                                    src={pattern}
                                    alt=""
                                    className="block lg:hidden w-[70px] h-[24px] object-contain mt-1"
                                />
                            </span>
                            <span className="flex items-center gap-4">
                                Good{" "}
                                <img
                                    src={pattern}
                                    alt=""
                                    className="hidden lg:block lg:w-[120px] xl:w-[150px] mt-2 object-contain"
                                />
                            </span>
                            <span>Services</span>
                        </div>
                    </div>
                    {/* STICKY HEADING END */}
                    
                </div>
                {/* SERVICES SECTION END */}

                <Portfolio />
                <Achievements />
            </Wrapper>
        </div>
    );
};

export default Skills;
// import { useRef } from "react";
// import { motion } from "framer-motion";

// import Wrapper from "./Wrapper";
// import man from "../assets/myphoto.png";

// import externalLinkIcon from "../assets/external-link-icon.png";
// import gmailIcon from "../assets/email-icon.png";
// import linkedinicon from "../assets/linkedin-icon.png";
// import { scrollTo } from "../helper";
// import { useFollowPointer } from "./useFollowPointer";
// import gitHublogo from "../assets/GitHub-logo.jpg";

// const HeroBanner = () => {
//     const ref = useRef(null);
//     const { x, y } = useFollowPointer(ref);
//     return (
//         <div
//             id="hero"
//             className="w-full h-[100vh] relative bg-[#111111] overflow-hidden"
//         >
//             {/* BACKGROUND ELEMENTS FOR DESKTOP START */}
//             <motion.span
//                 ref={ref}
//                 animate={{ x, y }}
//                 className="hidden md:block sec-1-bg-gradient-1-desktop md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] absolute md:left-[1000px] 2xl:left-[1309px] -top-[709px]"
//             />
//             <span className="hidden md:block sec-1-bg-gradient-2-desktop md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] absolute left-[105px] top-[672px] md:top-[500px] 2xl:top-[672px]" />
//             {/* BACKGROUND ELEMENTS FOR DESKTOP END */}

//             {/* BACKGROUND ELEMENTS FOR DESKTOP START */}
//             <span className="md:hidden sec-1-bg-gradient-1-mobile absolute w-[212px] h-[211px] left-[285px] -top-[25px]" />
//             <span className="md:hidden sec-1-bg-gradient-2-mobile absolute w-[636px] h-[635px] -left-[334px] top-[672px]" />
//             {/* BACKGROUND ELEMENTS FOR DESKTOP END */}

//             <Wrapper>
//                 {/* NAVBAR START */}
//                 <motion.div
//                     className="hidden md:flex items-center justify-between mt-[40px] 2xl:mt-[63px] relative"
//                     initial={{ y: -200, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 0.7, delay: 0.25 }}
//                 >
//                     <div className="flex items-center gap-[6px]">
                        
                    
//                         <div><a href="https://github.com/Divyanshu9794/" target="_blank"><div className="w-[35px] h-[35px] rounded-full bg-[#252525] flex justify-center items-center">
//                             <img src={gitHublogo} alt="" className="w-[18px]" />
//                         </div></a></div>
//                         <div><a href="https://www.linkedin.com/in/divyanshu-singh-3b433119b/" target="_blank"> <div className="w-[35px] h-[35px] rounded-full bg-[#252525] flex justify-center items-center">
//                             <img src={linkedinicon} alt="" className="w-[18px]" />
//                         </div></a></div>
                
//                         {/* <div className="w-[35px] h-[35px] rounded-full bg-[#252525] flex justify-center items-center">
//                             <img src={linkedinicon} alt="" className="w-[18px]" />
//                         </div> */}
//                     </div>
//                     <ul className="flex 2xl:text-[20px]">
//                         <li
//                             className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
//                             onClick={() => scrollTo("about")}
//                         >
//                             About me
//                         </li>
//                         <li
//                             className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
//                             onClick={() => scrollTo("skills")}
//                         >
//                             Skills
//                         </li>
//                         <li
//                             className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
//                             onClick={() => scrollTo("work")}
//                         >
//                             Work
//                         </li>
//                         <li
//                             className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
//                             onClick={() => scrollTo("contact")}
//                         >
//                             Contact
//                         </li>
//                     </ul>
//                 </motion.div>
//                 {/* NAVBAR END */}

//                 {/* BIG HEADING START */}
//                 <motion.div
//                     className="flex justify-center text-center mt-14 mb-10 relative"
//                     initial={{ opacity: 0, scale: 0.5 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     <h1 className="text-[50px] md:text-[120px] 2xl:text-[189px] leading-[50px] md:leading-[125px]  2xl:leading-[192px] font-oswald uppercase">
                        
//                     </h1>
//                 </motion.div>
//                 {/* BIG HEADING END */}

//                 {/* INTRO START */}
//                 <motion.div
//                     className="flex flex-col mb-10 text-center md:text-left text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] relative"
//                     initial={{ y: 300, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 0.7, delay: 0.25 }}
//                 >
//                     <div className="font-light mb-4">
//                         👋 Hi, I Am{" "}
//                         <span className="font-semibold">Divyanshu Singh</span>
//                     </div>
//                     <div className="max-w-[510px]">
                    
                       
//                     </div>
//                 </motion.div>
//                 {/* INTRO END */}

//                 {/* NUMBER BLOCK START */}
//                 <motion.div
//                     className="hidden md:flex gap-8 relative z-10"
//                     initial={{ y: 300, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 0.7, delay: 0.25 }}
//                 >
//                     {/* START */}
//                     {/* <div className="flex items-center gap-3">
//                         <div className="text-[80px] font-light">10+</div>
//                         <div className="leading-[22px]">
//                             SUCCESSFULLY
//                             <br />
//                             COMPLETED
//                             <br />
//                             PROJECTS
//                         </div>
//                     </div> 
//                     {/* END */}

//                     {/* START */}
//                     {/* <div className="flex items-center gap-3">
//                         <div className="text-[80px] font-light"></div>
//                         <div className="leading-[22px]">
//                             Fresher
//                         </div>
//                     </div>  */}
//                     {/* END*/}
//                 </motion.div>
//                 {/* NUMBER BLOCK END */}

//                 {/* PERSON BLOCK START */}
//                 <motion.div
//                     className="w-[300px] md:w-[360px] 2xl:w-[475px] absolute bottom-0 left-[50%] -translate-x-1/2"
//                     initial={{ y: 200, x: "-50%" }}
//                     animate={{ y: 0 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     <img src={man} alt="" />

//                     {/* HIRE ME BUTTON START */}
//                     {/* <div
//                         className="absolute top-[140px] -right-10 2xl:top-[240px] 2xl:-right-10 w-[140px] h-[140px] rounded-full bg-white/[0.7] flex flex-col justify-center items-center gap-2 backdrop-blur-sm cursor-pointer transition-transform scale-[0.65] md:scale-100 active:scale-[0.55] md:active:scale-90"
//                         onClick={() => scrollTo("contact")}
//                     >
//                         <img
//                             src={externalLinkIcon}
//                             alt=""
//                             className="w-[15px]"
//                         />
//                         <div className="text-black">Hire Me</div>
//                     </div> */}
//                     {/* HIRE ME BUTTON END */}
//                 </motion.div>
//                 {/* PERSON BLOCK END */}
//             </Wrapper>
//         </div>
//     );
// };

// export default HeroBanner;

















import { useRef } from "react";
import { motion } from "framer-motion";

import Wrapper from "./Wrapper";
import man from "../assets/myphoto.png";

import externalLinkIcon from "../assets/external-link-icon.png";
import gmailIcon from "../assets/email-icon.png";
import linkedinicon from "../assets/linkedin-icon.png";
import { scrollTo } from "../helper";
import { useFollowPointer } from "./useFollowPointer";
import gitHublogo from "../assets/GitHub-logo.jpg";

const HeroBanner = () => {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);
    return (
        <div
            id="hero"
            className="w-full h-[100vh] relative bg-[#111111] overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS FOR DESKTOP START */}
            <motion.span
                ref={ref}
                animate={{ x, y }}
                className="hidden md:block sec-1-bg-gradient-1-desktop md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] absolute md:left-[1000px] 2xl:left-[1309px] -top-[709px]"
            />
            <span className="hidden md:block sec-1-bg-gradient-2-desktop md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] absolute left-[105px] top-[672px] md:top-[500px] 2xl:top-[672px]" />
            {/* BACKGROUND ELEMENTS FOR DESKTOP END */}

            {/* BACKGROUND ELEMENTS FOR MOBILE START */}
            <span className="md:hidden sec-1-bg-gradient-1-mobile absolute w-[212px] h-[211px] left-[285px] -top-[25px]" />
            <span className="md:hidden sec-1-bg-gradient-2-mobile absolute w-[636px] h-[635px] -left-[334px] top-[672px]" />
            {/* BACKGROUND ELEMENTS FOR MOBILE END */}

            <Wrapper>
                {/* NAVBAR START */}
                <motion.div
                    className="hidden md:flex items-center justify-between mt-[40px] 2xl:mt-[63px] relative z-20"
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                >
                    <div className="flex items-center gap-[10px]">
                        <a href="https://github.com/Divyanshu9794/" target="_blank" rel="noreferrer" className="block">
                            <div className="w-[40px] h-[40px] rounded-full bg-[#161616] border border-neutral-800 hover:border-neutral-600 flex justify-center items-center transition-all">
                                <img src={gitHublogo} alt="GitHub" className="w-[20px] rounded-full" />
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/divyanshu-singh-3b433119b/" target="_blank" rel="noreferrer" className="block">
                            <div className="w-[40px] h-[40px] rounded-full bg-[#161616] border border-neutral-800 hover:border-neutral-600 flex justify-center items-center transition-all">
                                <img src={linkedinicon} alt="LinkedIn" className="w-[20px]" />
                            </div>
                        </a>
                    </div>
                    <ul className="flex gap-2 text-neutral-400 2xl:text-[18px] font-mono uppercase tracking-wider text-[14px]">
                        <li
                            className="cursor-pointer px-4 py-2 hover:text-[#EFB946] transition active:scale-95"
                            onClick={() => scrollTo("about")}
                        >
                            // about
                        </li>
                        <li
                            className="cursor-pointer px-4 py-2 hover:text-[#EFB946] transition active:scale-95"
                            onClick={() => scrollTo("skills")}
                        >
                            // skills
                        </li>
                        <li
                            className="cursor-pointer px-4 py-2 hover:text-[#EFB946] transition active:scale-95"
                            onClick={() => scrollTo("work")}
                        >
                            // work
                        </li>
                        <li
                            className="cursor-pointer px-4 py-2 hover:text-[#EFB946] transition active:scale-95"
                            onClick={() => scrollTo("contact")}
                        >
                            // contact
                        </li>
                    </ul>
                </motion.div>
                {/* NAVBAR END */}

                {/* BIG BACKGROUND HEADING */}
                <motion.div
                    className="flex justify-center text-center mt-6 md:mt-10 mb-6 relative z-0 pointer-events-none"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 0.04, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-[60px] md:text-[140px] 2xl:text-[210px] leading-none font-oswald uppercase font-black text-white tracking-tighter select-none">
                        SOFTWARE ENGINEER
                    </h1>
                </motion.div>
                {/* BIG BACKGROUND HEADING END */}

                {/* INTRO CONTENT BLOCK */}
                <motion.div
                    className="flex flex-col mb-10 text-center md:text-left text-white relative z-10 md:absolute md:top-[38%] md:translate-y-[-38%]"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <div className="text-[14px] md:text-[16px] font-mono text-[#EFB946] tracking-wide mb-2 flex items-center justify-center md:justify-start gap-2">
                        <span>👋 Hi, I Am</span>
                        <span className="font-bold text-white font-sans text-[16px] md:text-[18px]">Divyanshu Singh</span>
                        <span className="text-neutral-600 font-normal">|</span>
                        <span className="text-neutral-400 bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded text-[12px]">Analyst @ HCLTech</span>
                    </div>
                    <h2 className="text-[32px] md:text-[54px] 2xl:text-[64px] font-oswald uppercase font-bold leading-tight tracking-tight mb-4 text-gradient">
                        Building Scalable Web apps<br />& Cloud Solutions
                    </h2>
                    <p className="max-w-[480px] text-neutral-400 text-[14px] md:text-[16px] leading-relaxed font-normal">
                        Software Engineer specializing in crafting responsive frontends with React.js, high-throughput microservices using Node.js, and automated pipeline integration across Microsoft Azure infrastructure.
                    </p>
                </motion.div>
                {/* INTRO END */}

                {/* HISTORICAL STAT METRICS OVERLAY */}
                <motion.div
                    className="hidden md:flex gap-12 absolute bottom-[8%] left-0 z-10"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <div className="flex items-center gap-4 border-l-2 border-[#EFB946] pl-4">
                        <div className="text-[44px] font-oswald font-bold text-white leading-none">1.5+</div>
                        <div className="text-[11px] font-mono tracking-wider text-neutral-400 uppercase leading-tight">
                            Years Professional<br />Experience
                        </div>
                    </div> 
                    <div className="flex items-center gap-4 border-l-2 border-neutral-800 pl-4">
                        <div className="text-[44px] font-oswald font-bold text-white leading-none">2+</div>
                        <div className="text-[11px] font-mono tracking-wider text-neutral-400 uppercase leading-tight">
                            Enterprise Web<br />Applications
                        </div>
                    </div> 
                    <div className="flex items-center gap-4 border-l-2 border-neutral-800 pl-4">
                        <div className="text-[44px] font-oswald font-bold text-white leading-none">12+</div>
                        <div className="text-[11px] font-mono tracking-wider text-neutral-400 uppercase leading-tight">
                            Engineered Open<br />Repositories
                        </div>
                    </div> 
                </motion.div>
                {/* NUMBER BLOCK END */}

                {/* CENTER PIECE PICTURE WRAPPER */}
                <motion.div
                    className="w-[280px] md:w-[380px] 2xl:w-[460px] absolute bottom-0 left-[50%] md:left-[70%] -translate-x-1/2 z-10 select-none pointer-events-none"
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <img src={man} alt="Divyanshu Singh" className="w-full h-auto drop-shadow-[0_20px_50px_rgba(239,185,70,0.15)]" />

                    {/* INTERACTIVE FLOATING CALL TO ACTION BUTTON */}
                    <motion.div
                        className="absolute top-[40%] -right-8 md:-right-12 w-[110px] h-[110px] rounded-full bg-white/10 hover:bg-[#EFB946] border border-white/20 hover:border-[#EFB946] flex flex-col justify-center items-center gap-1 backdrop-blur-md cursor-pointer transition-all duration-300 pointer-events-auto group/btn"
                        onClick={() => scrollTo("contact")}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    >
                        <img
                            src={externalLinkIcon}
                            alt=""
                            className="w-[14px] invert group-hover/btn:invert-0 transition-all"
                        />
                        <div className="text-[13px] font-mono font-bold uppercase tracking-wider text-white group-hover/btn:text-black transition-all">
                            Hire Me
                        </div>
                    </motion.div>
                </motion.div>
                {/* PERSON BLOCK END */}
            </Wrapper>
        </div>
    );
};

export default HeroBanner;
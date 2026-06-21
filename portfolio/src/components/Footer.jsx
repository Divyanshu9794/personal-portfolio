// import React from "react";

// import Wrapper from "./Wrapper";
// import linkedinicon from "../assets/linkedin-icon.png";
// import gitHublogo from "../assets/GitHub-logo.jpg";
// import gmailIcon from "../assets/email-icon.png";
// import { scrollTo } from "../helper";

// const Footer = () => {
//     return (
//         <div className="bg-[#F2F2F2]">
//             <Wrapper>
//                 {/* NAVBAR START */}
//                 <div className="flex flex-col md:flex-row items-center justify-between gap-5 2xl:mt-[63px] relative text-[#111111] border-t border-[#CCCCCC] py-10">
//                     <div className="flex items-center gap-[6px]">
//                         {/* <div className="w-[35px] h-[35px] rounded-full bg-[#252525] flex justify-center items-center">
//                             <img src={gmailIcon} alt="" className="w-[18px]" />
//                         </div><br />
//                         <div><a href="mailto:sdivyanshu352@gmail.com">sdivyanshu352@gmail.com</a></div> */}
//                         <div><a href="https://github.com/Divyanshu9794/" target="_blank"><div className="w-[35px] h-[35px] rounded-full bg-[#252525] flex justify-center items-center">
//                             <img src={gitHublogo} alt="" className="w-[18px]" />
//                         </div></a></div>
//                         <div><a href="https://www.linkedin.com/in/divyanshu-singh-3b433119b/" target="_blank"> <div className="w-[35px] h-[35px] rounded-full bg-[#252525] flex justify-center items-center">
//                             <img src={linkedinicon} alt="" className="w-[18px]" />
//                         </div></a></div>
//                         {/* <div className="w-[35px] h-[35px] rounded-full bg-[#252525] flex justify-center items-center">
//                             <img src={linkedinicon} alt="" className="w-[18px]" />
//                         </div>
//                         <div><a href="https://www.linkedin.com/in/divyanshu-singh-3b433119b/" target="_blank">Divyanshu Singh</a></div>
//                         <br /><br /> */}
//                         {/* <div className="w-[35px] h-[35px] rounded-full bg-[#252525] flex justify-center items-center">
//                             <img src={gitHublogo} alt="" className="w-[18px]" />
//                         </div>
//                         <div><a href="https://github.com/Divyanshu9794/" target="_blank">Divyanshu Singh</a></div> */}
//                     </div>
//                     <ul className="flex 2xl:text-[20px] gap-5 md:gap-8">
//                         <li
//                             className="cursor-pointer transition active:scale-90"
//                             onClick={() => scrollTo("about")}
//                         >
//                             About me
//                         </li>
//                         <li
//                             className="cursor-pointer transition active:scale-90"
//                             onClick={() => scrollTo("skills")}
//                         >
//                             Skills
//                         </li>
//                         <li
//                             className="cursor-pointer transition active:scale-90"
//                             onClick={() => scrollTo("work")}
//                         >
//                             Work
//                         </li>
//                         <li
//                             className="cursor-pointer transition active:scale-90"
//                             onClick={() => scrollTo("contact")}
//                         >
//                             Contact
//                         </li>
//                     </ul>
//                 </div>
//                 {/* NAVBAR END */}
//             </Wrapper>
//         </div>
//     );
// };

// export default Footer;

















import React from "react";

import Wrapper from "./Wrapper";
import linkedinicon from "../assets/linkedin-icon.png";
import gitHublogo from "../assets/GitHub-logo.jpg";
import gmailIcon from "../assets/email-icon.png";
import { scrollTo } from "../helper";

const Footer = () => {
    return (
        <div className="bg-[#F2F2F2]">
            <Wrapper>
                {/* NAVBAR START */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 2xl:mt-[63px] relative text-[#111111] border-t border-[#CCCCCC]/60 py-10">
                    
                    {/* LEFT ROW: SOCIAL CORES & LINKEDIN CONNECT CALL TO ACTION */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                        <div className="flex items-center gap-3">
                            <a 
                                href="https://github.com/Divyanshu9794/" 
                                target="_blank" 
                                rel="noreferrer"
                                className="transition-transform hover:scale-110 active:scale-95"
                            >
                                <div className="w-[38px] h-[38px] rounded-full bg-[#111111] hover:bg-neutral-800 flex justify-center items-center shadow-sm">
                                    <img src={gitHublogo} alt="GitHub" className="w-[18px] rounded-full invert" />
                                </div>
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/divyanshu-singh-3b433119b/" 
                                target="_blank" 
                                rel="noreferrer"
                                className="transition-transform hover:scale-110 active:scale-95"
                            >
                                <div className="w-[38px] h-[38px] rounded-full bg-[#0077B5] hover:bg-[#006296] flex justify-center items-center shadow-sm">
                                    <img src={linkedinicon} alt="LinkedIn" className="w-[16px] invert" />
                                </div>
                            </a>
                        </div>
                        
                        {/* LINKEDIN ANCHOR TEXT */}
                        <a 
                            href="https://www.linkedin.com/in/divyanshu-singh-3b433119b/" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="text-[14px] font-medium text-[#111111] hover:text-[#0077B5] border-b border-transparent hover:border-[#0077B5] pb-0.5 transition-all duration-200 uppercase tracking-wider font-sans"
                        >
                            Let's Connect on LinkedIn →
                        </a>
                    </div>
                    
                    {/* RIGHT ROW: VIEWPORT NAVIGATION LINKS */}
                    <ul className="flex flex-wrap justify-center gap-6 md:gap-8 text-[14px] md:text-[15px] font-medium tracking-wide text-neutral-600">
                        <li
                            className="cursor-pointer hover:text-black transition active:scale-95"
                            onClick={() => scrollTo("about")}
                        >
                            About me
                        </li>
                        <li
                            className="cursor-pointer hover:text-black transition active:scale-95"
                            onClick={() => scrollTo("skills")}
                        >
                            Skills
                        </li>
                        <li
                            className="cursor-pointer hover:text-black transition active:scale-95"
                            onClick={() => scrollTo("work")}
                        >
                            Work
                        </li>
                        <li
                            className="cursor-pointer hover:text-black transition active:scale-95"
                            onClick={() => scrollTo("contact")}
                        >
                            Contact
                        </li>
                    </ul>
                </div>
                {/* NAVBAR END */}
            </Wrapper>
        </div>
    );
};

export default Footer;
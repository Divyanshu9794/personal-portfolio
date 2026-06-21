// import React from "react";

// import { achievements } from "../data";
// import NumInc from "./NumInc";
// import dashedCircle from "../assets/dashed-circle.svg";
// import Div from "./Div";

// const Achievements = () => {
//     return (
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-[15px] md:gap-[25px] 2xl:gap-[50px] mt-[75px] md:mt-[150px] relative">
//             {achievements.map((item) => (
//                 <Div
//                     key={item.id}
//                     className="w-full aspect-square flex justify-center items-center relative bg-[#1A1A1A] md:bg-transparent rounded-[10px]"
//                 >
//                     <img
//                         src={dashedCircle}
//                         className="hidden md:block absolute top-0 left-0"
//                     />
//                     <div className="flex items-center text-white relative">
//                         {/* START */}
//                         <div className="flex items-center justify-center text-center flex-col gap-3 lg:gap-6">
//                             <div className="text-[34px] md:text-[50px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px] font-light flex">
//                                 <NumInc num={item.year} />+
//                             </div>
//                             <div
//                                 className="text-[14px] lg:text-[18px] leading-[18px] lg:leading-[22px] text-[#AAAAAA] md:text-white"
//                                 dangerouslySetInnerHTML={{
//                                     __html: item.description,
//                                 }}
//                             />
//                         </div>
//                         {/* END */}
//                     </div>
//                 </Div>
//             ))}
//         </div>
//     );
// };

// export default Achievements;









import React from "react";

import { achievements } from "../data";
import NumInc from "./NumInc";
import dashedCircle from "../assets/dashed-circle.svg";
import Div from "./Div";

const Achievements = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[15px] md:gap-[25px] 2xl:gap-[50px] mt-[75px] md:mt-[150px] relative">
            {achievements.map((item) => (
                <Div
                    key={item.id}
                    className="w-full aspect-square flex justify-center items-center relative bg-[#1A1A1A] md:bg-transparent rounded-[10px] group"
                >
                    <img
                        src={dashedCircle}
                        className="hidden md:block absolute top-0 left-0"
                    />
                    <div className="flex items-center text-white relative w-full h-full px-4">
                        {/* START */}
                        <div className="flex items-center justify-center text-center flex-col gap-2 lg:gap-4 w-full">
                            {/* Numeric Stat Indicator */}
                            <div className="text-[34px] md:text-[50px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px] font-light flex text-[#EFB946]">
                                <NumInc num={item.year} />+
                            </div>

                            {/* Core Description Title */}
                            <div
                                className="text-[13px] lg:text-[16px] font-bold tracking-wider uppercase leading-[18px] lg:leading-[22px] text-[#AAAAAA] md:text-white"
                                dangerouslySetInnerHTML={{
                                    __html: item.description,
                                }}
                            />

                            {/* Technical Breakout Section (Reveals exact awards and credentials) */}
                            {item.details && (
                                <div className="text-[10px] lg:text-[12px] font-mono text-neutral-500 group-hover:text-neutral-300 transition-colors border-t border-neutral-800/80 pt-2 px-2 max-w-[90%] mx-auto leading-normal">
                                    {item.details}
                                </div>
                            )}
                        </div>
                        {/* END */}
                    </div>
                </Div>
            ))}
        </div>
    );
};

export default Achievements;
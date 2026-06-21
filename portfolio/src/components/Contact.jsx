// import React from "react";

// import Wrapper from "./Wrapper";
// import Form from "./Form";
// import Div from "./Div";

// const Contact = () => {
//     return (
//         <div
//             id="contact"
//             className="w-full py-[50px] md:py-[100px] bg-[#F2F2F2] relative overflow-hidden"
//         >
//             <Wrapper>
//                 {/* SECTION HEADING START */}
//                 <Div className="mb-10 relative">
//                     <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-2 text-[#111111]">
//                         Let’s Talk
//                     </div>
//                     <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center max-w-[1000px] mx-auto">
//                     Reach out and let's collaborate! Together, we can turn your ideas into reality and make a lasting impact in the digital world.
//                     </div>
//                 </Div>
//                 {/* SECTION HEADING END */}

//                 <Form />
//             </Wrapper>
//         </div>
//     );
// };

// export default Contact;







import React, { useState } from "react";
import Div from "./Div";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Standard dynamic mailto fallback format matching your exact resume email address 
        const emailSubject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const emailBody = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nProject Details:\n${formData.message}`
        );
        
        window.location.href = `mailto:sdivyanshu352@gmail.com?subject=${emailSubject}&body=${emailBody}`; // 
        
        setTimeout(() => {
            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <div id="contact" className="bg-[#111111] py-[60px] md:py-[120px] relative overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10">
                
                {/* SECTION HEADER */}
                <Div className="text-center mb-12 md:mb-20">
                    <h2 className="text-[45px] md:text-[90px] 2xl:text-[120px] font-oswald uppercase text-gradient leading-none mb-4">
                        Let’s Talk
                    </h2>
                    <p className="text-[15px] md:text-[18px] text-neutral-400 max-w-[620px] mx-auto leading-relaxed">
                        Reach out and let's collaborate! Together, we can turn your ideas into reality and make a lasting impact in the digital world.
                    </p>
                </Div>

                {/* CONTACT FORM */}
                <form onSubmit={handleSubmit} className="max-w-[960px] mx-auto flex flex-col gap-6 md:gap-8">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {/* NAME INPUT */}
                        <Div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-[12px] md:text-[13px] font-mono uppercase tracking-wider text-neutral-400">
                                Your Name <span className="text-[#EFB946]">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full bg-[#161616] border border-neutral-800 focus:border-[#EFB946] rounded-lg p-4 text-white text-[15px] outline-none transition-colors"
                                placeholder="John Doe"
                            />
                        </Div>

                        {/* EMAIL INPUT */}
                        <Div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-[12px] md:text-[13px] font-mono uppercase tracking-wider text-neutral-400">
                                Your Email <span className="text-[#EFB946]">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full bg-[#161616] border border-neutral-800 focus:border-[#EFB946] rounded-lg p-4 text-white text-[15px] outline-none transition-colors"
                                placeholder="john@example.com"
                            />
                        </Div>
                    </div>

                    {/* MESSAGE TEXTAREA */}
                    <Div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-[12px] md:text-[13px] font-mono uppercase tracking-wider text-neutral-400">
                            Please tell a bit about yourself & your project <span className="text-[#EFB946]">*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows="6"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full bg-[#161616] border border-neutral-800 focus:border-[#EFB946] rounded-lg p-4 text-white text-[15px] outline-none transition-colors resize-none"
                            placeholder="Describe your architecture guidelines, core feature sets, or engineering requirements..."
                        />
                    </Div>

                    {/* SUBMIT ACTION */}
                    <Div className="flex justify-start mt-2">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full md:w-auto bg-black border border-neutral-800 text-neutral-200 hover:text-black hover:bg-[#EFB946] hover:border-[#EFB946] font-mono uppercase text-[13px] tracking-widest px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
                        >
                            {isSubmitting ? "Opening Mail App..." : "Send Contact Request Now"}
                            <span className="text-[14px]">→</span>
                        </button>
                    </Div>
                </form>

            </div>
        </div>
    );
};

export default Contact;
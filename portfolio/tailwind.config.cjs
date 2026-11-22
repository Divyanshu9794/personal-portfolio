module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            sans: ["Inter", "system-ui", "sans-serif"],
            mono: ["JetBrains Mono", "Fira Code", "monospace"],
        },
        extend: {
            colors: {
                navy: {
                    950: "#020817",
                    900: "#050d1e",
                    800: "#0a1628",
                    700: "#0f1f38",
                    600: "#172a4a",
                },
                accent: {
                    blue: "#3b82f6",
                    violet: "#7c3aed",
                    cyan: "#06b6d4",
                    glow: "#60a5fa",
                },
            },
            transitionDuration: {
                2500: "2500ms",
            },
            backgroundImage: {
                "hero-gradient": "radial-gradient(ellipse at top, #0f1f38 0%, #020817 60%)",
                "card-glass": "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
            },
            animation: {
                "fade-in": "fadeIn 0.6s ease-out forwards",
                "slide-up": "slideUp 0.6s ease-out forwards",
                "pulse-slow": "pulse 3s ease-in-out infinite",
                "float": "float 6s ease-in-out infinite",
                "blink": "blink 1s step-end infinite",
                "gradient-shift": "gradientShift 8s ease infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { opacity: "0", transform: "translateY(30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-12px)" },
                },
                blink: {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0" },
                },
                gradientShift: {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
            },
            boxShadow: {
                "glow-blue": "0 0 30px rgba(59, 130, 246, 0.3)",
                "glow-violet": "0 0 30px rgba(124, 58, 237, 0.3)",
                "card": "0 4px 24px rgba(0,0,0,0.4)",
                "card-hover": "0 8px 40px rgba(59,130,246,0.15)",
            },
        },
    },
    plugins: [],
};

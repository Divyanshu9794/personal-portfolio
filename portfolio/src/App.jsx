import React, { Suspense, lazy } from "react";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";

// Lazy load below-the-fold sections for performance
const AboutMe = lazy(() => import("./components/AboutMe"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Certifications = lazy(() => import("./components/Certifications"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

const SectionLoader = () => (
    <div className="w-full py-32 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-slate-600">
            <svg className="spinner" viewBox="0 0 50 50">
                <circle
                    className="spinner-path"
                    cx="25" cy="25" r="20"
                    fill="none"
                    strokeWidth="4"
                />
            </svg>
            <span className="text-xs font-mono tracking-wider">Loading...</span>
        </div>
    </div>
);

function App() {
    return (
        <div className="App bg-navy-950 min-h-screen">
            {/* Global scroll progress bar */}
            <ScrollProgress />

            {/* Fixed navbar */}
            <Navbar />

            {/* Hero — not lazy loaded (above the fold) */}
            <HeroBanner />

            {/* Lazy-loaded sections */}
            <Suspense fallback={<SectionLoader />}>
                <AboutMe />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
                <Experience />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
                <Projects />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
                <Skills />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
                <Certifications />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
                <Contact />
            </Suspense>

            <Suspense fallback={null}>
                <Footer />
            </Suspense>
        </div>
    );
}

export default App;

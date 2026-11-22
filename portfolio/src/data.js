// ============================================================
// PORTFOLIO DATA — Divyanshu Singh
// ============================================================

// ---- NAVIGATION ----
export const navLinks = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Certifications", id: "certifications" },
    { label: "Contact", id: "contact" },
];

// ---- EXPERIENCE ----
export const experience = [
    {
        company: "HCLTech",
        role: "Analyst - Software Engineer",
        period: "Nov 2024 – Present",
        location: "Lucknow, Uttar Pradesh",
        type: "Full-time",
        tags: [
            "React.js",
            "Node.js",
            "Express.js",
            "Azure App Service",
            "Power Automate",
            "Logic Apps",
            "SharePoint",
            "SQL Server",
            "RBAC"
        ],
        bullets: [
            "Engineered and delivered 2+ enterprise-grade web applications using React.js, Node.js, and Azure App Service, managing the complete software development lifecycle from implementation to deployment.",
            "Built responsive React.js user interfaces and developed RESTful APIs using Node.js and Express.js to support scalable business applications.",
            "Designed and integrated Logic Apps and Power Automate workflows for data collection, processing, and third-party API integrations.",
            "Deployed, monitored, and maintained applications on Microsoft Azure App Service, ensuring availability, security, and performance.",
            "Integrated SharePoint, SQL Server, and external APIs while implementing authentication, authorization, and role-based access control (RBAC).",
            "Partnered with cross-functional teams and stakeholders to gather requirements, resolve production issues, and deliver business-critical solutions that enhanced operational efficiency."
        ],
    }
];

// ---- PROJECTS ----
export const filters = [
    { name: "All", id: "all" },
    { name: "Web Apps", id: "website" },
    { name: "Android", id: "android" },
    { name: "Automation & Cloud", id: "automation" },
    { name: "Machine Learning", id: "ml" },
];

export const projects = [
    {
        id: 1,
        name: "Crop Suggestion System (UPAJ)",
        tagline: "Machine learning crop advisory & disease detection",
        image: null,
        featured: true,
        tags: ["android", "ml"],
        techStack: ["Android Studio", "Firebase", "Machine Learning", "Node.js", "Python"],
        link: "https://github.com/Divyanshu9794/Major_final",
        github: "https://github.com/Divyanshu9794/Major_final",
        description:
            "Engineered a machine learning-based Android application that recommends optimal crops based on soil and weather conditions with disease detection modules.",
        highlights: [
            "Recommends optimal crops using soil and weather telemetry",
            "Firebase Authentication & Realtime Database integration",
            "Built crop prediction and disease detection improving accuracy by ~25%",
            "Data-driven agricultural decision making dashboard"
        ],
    },
    {
        id: 2,
        name: "Yummy Cart - Food Ordering Application",
        tagline: "Android food ordering app with restaurant admin management",
        image: null,
        featured: true,
        tags: ["android"],
        techStack: ["Android Studio", "Firebase", "Kotlin"],
        link: "https://github.com/Divyanshu9794/Yummy_cart",
        github: "https://github.com/Divyanshu9794/Yummy_cart",
        description:
            "Built a comprehensive food ordering Android application enabling restaurant discovery, menu browsing, and order placement with separate admin controls.",
        highlights: [
            "Architected separate user client and restaurant admin modules",
            "Realtime order management with Firebase Realtime Database",
            "Secure authentication and profile state management",
            "Intuitive modern UI built natively in Kotlin"
        ],
    },
    {
        id: 3,
        name: "Workflow Automation Platform",
        tagline: "Enterprise approval and document processing orchestration",
        image: null,
        featured: true,
        tags: ["automation", "website"],
        techStack: ["Power Apps", "Power Automate", "SharePoint", "Azure", "Logic Apps"],
        link: null,
        github: "https://github.com/Divyanshu9794/",
        description:
            "Designed workflow automation solutions to streamline approval and document management processes across enterprise business systems.",
        highlights: [
            "Integrated SharePoint, SQL Server, and external REST APIs",
            "Automated data collection, approval loops, and notifications",
            "Established Role-Based Access Control (RBAC) & security governance",
            "Drastically reduced manual processing overhead through orchestration"
        ],
    },
    {
        id: 4,
        name: "GetJobLink — Web Platform",
        tagline: "Full-stack job portal connecting candidates and recruiters",
        image: null,
        featured: true,
        tags: ["website"],
        techStack: ["React.js", "Node.js", "REST API", "Firebase", "Express.js"],
        link: "https://getjoblink.in/",
        github: "https://github.com/Divyanshu9794/get-job-link",
        description:
            "Full-stack job portal web application featuring job listing workflows, candidate profiles, recruiter dashboards, and real-time alerts.",
        highlights: [
            "Live production platform at getjoblink.in",
            "Recruiter and candidate role-based dashboards",
            "RESTful API backend powered by Node.js & Express.js"
        ],
    },
    {
        id: 5,
        name: "GetJobLink — Android Companion App",
        tagline: "Native Android client for mobile job discovery and applications",
        image: null,
        featured: false,
        tags: ["android"],
        techStack: ["Android Studio", "Kotlin", "Firebase", "REST API"],
        link: "https://github.com/Divyanshu9794/Get_job_Link_Android-App",
        github: "https://github.com/Divyanshu9794/Get_job_Link_Android-App",
        description:
            "Native Android application built in Kotlin allowing candidates to explore openings, submit applications, and receive instantaneous hiring updates.",
        highlights: [
            "Native Kotlin Android architecture",
            "Synchronized seamlessly with the GetJobLink web ecosystem",
            "Firebase realtime cloud updates"
        ],
    },
    {
        id: 6,
        name: "FileDrop v3 — P2P File Transfer",
        tagline: "Zero-server peer-to-peer file transfer via WebRTC",
        image: null,
        featured: false,
        tags: ["website"],
        techStack: ["WebRTC", "JavaScript", "Node.js", "WebSockets"],
        link: "https://github.com/Divyanshu9794/Cross-device-fileshare",
        github: "https://github.com/Divyanshu9794/Cross-device-fileshare",
        description:
            "Serverless peer-to-peer file transfer platform using WebRTC DataChannels and cloud signaling for high-speed cross-device transmission without size caps.",
        highlights: [
            "No intermediate server storage — private data streaming",
            "WebRTC DataChannels for direct low-latency connection",
            "Cross-platform browser support"
        ],
    },
    {
        id: 7,
        name: "BusYatri Platform (SIH 2023)",
        tagline: "Transit management system & analytics dashboard",
        image: null,
        featured: false,
        tags: ["website", "ml"],
        techStack: ["React.js", "Python", "Tableau", "Machine Learning", "REST API"],
        link: "https://github.com/Divyanshu9794/SIH_2023/",
        github: "https://github.com/Divyanshu9794/SIH_2023/",
        description:
            "Smart India Hackathon 2023 transit platform featuring telemetry analytics, route optimization, and interactive Tableau business intelligence visuals.",
        highlights: [
            "Built for Smart India Hackathon 2023",
            "Route optimization and telemetry analytics",
            "Interactive Tableau revenue dashboards"
        ],
    }
];

// ---- SKILLS (From Resume) ----
export const skillCategories = [
    {
        label: "Frontend",
        icon: "🖥️",
        skills: ["React.js", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
    },
    {
        label: "Backend",
        icon: "⚙️",
        skills: ["Node.js", "Express.js", "REST APIs", "RBAC & Authentication"],
    },
    {
        label: "Programming Languages",
        icon: "💻",
        skills: ["JavaScript", "C++", "Kotlin", "SQL"],
    },
    {
        label: "Databases",
        icon: "🗄️",
        skills: ["SQL Server", "MongoDB", "Firebase Realtime Database"],
    },
    {
        label: "Cloud & DevOps",
        icon: "☁️",
        skills: ["Microsoft Azure", "Azure App Service", "Git", "GitHub"],
    },
    {
        label: "Microsoft Technologies",
        icon: "⚡",
        skills: ["Power Apps", "Power Automate", "Logic Apps", "SharePoint"],
    },
    {
        label: "Mobile Development",
        icon: "📱",
        skills: ["Android Studio", "Kotlin", "Firebase"],
    },
    {
        label: "Tools & Analytics",
        icon: "🛠️",
        skills: ["Postman", "Tableau", "Streamlit", "VS Code", "Git"],
    },
];

// ---- CERTIFICATIONS (From Resume) ----
export const certifications = [
    {
        title: "Claude Code in Action",
        code: "Anthropic",
        issuer: "Anthropic",
        date: "Mar 2026",
        icon: "🔬",
        color: "#d97706",
        badge: "AI Dev",
        description: "Practical AI-assisted engineering and autonomous coding with Claude Code.",
    },
    {
        title: "Microsoft Certified: Power Platform Fundamentals",
        code: "PL-900",
        issuer: "Microsoft",
        date: "Dec 2025",
        icon: "⚡",
        color: "#742774",
        badge: "Power Platform",
        description: "Power Apps, Power Automate, Logic Apps, and business orchestration.",
    },
    {
        title: "Microsoft Certified: Azure AI Fundamentals",
        code: "AI-900",
        issuer: "Microsoft",
        date: "Nov 2025",
        icon: "🤖",
        color: "#0078d4",
        badge: "Azure AI",
        description: "Artificial Intelligence, Machine Learning workloads, and Azure Cognitive Services.",
    },
    {
        title: "Microsoft Certified: Azure Fundamentals",
        code: "AZ-900",
        issuer: "Microsoft",
        date: "Jun 2025",
        icon: "☁️",
        color: "#0078d4",
        badge: "Azure Cloud",
        description: "Core Azure architecture, compute, networking, storage, and security.",
    },
    {
        title: "Postman API Fundamentals Student Expert",
        code: "Student Expert",
        issuer: "Postman",
        date: "Certified",
        icon: "🔌",
        color: "#ef5b25",
        badge: "API Expert",
        description: "Proficiency in RESTful API development, testing, automation, and documentation.",
    },
];

// ---- CODING PROFILES ----
export const codingProfiles = [
    {
        platform: "GitHub",
        username: "Divyanshu9794",
        url: "https://github.com/Divyanshu9794/",
        icon: "GH",
        color: "#f0f6fc",
        bg: "#161b22",
        stat: "12+ Repos",
        description: "Open-source repositories, full-stack & mobile apps",
    },
    {
        platform: "LeetCode",
        username: "Divyanshu9794",
        url: "https://leetcode.com/u/Divyanshu9794/",
        icon: "LC",
        color: "#ffa116",
        bg: "#1a1a1a",
        stat: "Problem Solving",
        description: "Data Structures & Algorithms in C++ and JavaScript",
    },
    {
        platform: "GeeksForGeeks",
        username: "divyanshusingh",
        url: "https://www.geeksforgeeks.org/user/divyanshusingh/",
        icon: "GfG",
        color: "#2f8d46",
        bg: "#1a1a1a",
        stat: "CS Fundamentals",
        description: "Core Computer Science concepts and problem solving",
    },
];

// ---- EDUCATION (From Resume) ----
export const education = [
    {
        degree: "Bachelor of Technology in Computer Science with Honors",
        institution: "United College of Engineering and Research",
        period: "Graduated Jul 2024",
        location: "Prayagraj, Uttar Pradesh",
        grade: "CGPA: 8.36 / 10",
        highlights: [
            "Bachelor of Technology in Computer Science with Honors",
            "GATE 2024 Qualified (Computer Science & Information Technology)",
            "Amazon Summer ML School 2023 Selected",
        ],
    },
];

// ---- ACHIEVEMENTS (From Resume) ----
export const achievements = [
    {
        id: 1,
        title: "Rising Star Award - HCLTech",
        description: "Awarded within 6 months of joining for outstanding performance and contributions.",
        tag: "Award",
    },
    {
        id: 2,
        title: "Outstanding Contributor - HCLTech",
        description: "Recognized for consistently delivering high-quality solutions and business impact.",
        tag: "Award",
    },
    {
        id: 3,
        title: "Amazon Summer ML School 2023",
        description: "Selected for Amazon’s prestigious machine learning program.",
        tag: "Recognition",
    },
    {
        id: 4,
        title: "GATE 2024 Qualified",
        description: "Successfully qualified the Graduate Aptitude Test in Engineering (Computer Science).",
        tag: "Examination",
    },
    {
        id: 5,
        title: "Postman API Fundamentals Student Expert",
        description: "Demonstrated proficiency in API development, testing, and documentation.",
        tag: "Certification",
    },
];

// ---- CONTACT DETAILS ----
export const contactInfo = {
    phone: "+91 97947 63252",
    email: "sdivyanshu352@gmail.com",
    linkedin: "https://www.linkedin.com/in/divyanshu-singh-3b433119b/",
    github: "https://github.com/Divyanshu9794/",
    leetcode: "https://leetcode.com/u/Divyanshu9794/",
    location: "Lucknow, Uttar Pradesh, India",
};

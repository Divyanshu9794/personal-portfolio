import p1 from "./assets/project-1.png";
import p2 from "./assets/project-2.png";
import p3 from "./assets/project-3.png";
import p4 from "./assets/project-4.png";
import p5 from "./assets/project-5.png";
import p7 from "./assets/project-7.png";
import p8 from "./assets/project-8.png";
import p9 from "./assets/project-9.jpg";
import p10 from "./assets/project-10.jpg";
import p11 from "./assets/project-11.png";
import p12 from "./assets/project-12.png";
import p13 from "./assets/project-13.png";

export const filters = [
    {
        name: "All",
        id: "all",
    },
    {
        name: "Web Applications",
        id: "website",
    },
    {
        name: "Mobile Development",
        id: "Android Application",
    },
    {
        name: "Machine Learning",
        id: "Machine Learning",
    },
    {
        name: "Data Analytics",
        id: "data-analysis",
    },
    {
        name: "Educational Tools",
        id: "educational",
    },
    {
        name: "Blogging",
        id: "blog",
    },
];

export const projects = [
    {
        name: "FileDrop v3 — Zero-Server P2P File Transfer",
        image: p4, // Mapped to unused slot p4
        tags: ["website", "P2P Systems"],
        link: 'https://github.com/Divyanshu9794/Cross-device-fileshare',
    },
    {
        name: "Yummy Cart — Food Ordering Application",
        image: p10, // Grouped logically next to Admin app
        tags: ["Android Application", "Kotlin"],
        link: 'https://github.com/Divyanshu9794/Yummy_cart',
    },
    {
        name: "Yummy Cart — Restaurant Management Admin Panel",
        image: p11, 
        tags: ["Android Application", "Kotlin"],
        link: 'https://github.com/Divyanshu9794/Admin_Yummy_Cart',
    },
    {
        name: "UPAJ — Smart Agriculture Mobile Client",
        image: p9,
        tags: ["Machine Learning", "Android Application"],
        link: 'https://github.com/Divyanshu9794/Major_final/tree/main/Upaj_application2',
    },
    {
        name: "UPAJ Web Ecosystem",
        image: p13,
        tags: ["website", "Machine Learning"],
        link: 'https://github.com/Divyanshu9794/Major_final/tree/main/Upaj2.0%20(2)',
    },
    {
        name: "BusYatri Platform (SIH 2023)",
        image: p8,
        tags: ["data-analysis", "website", "Machine Learning"],
        link: 'https://github.com/Divyanshu9794/SIH_2023/',
    },
    {
        name: "BusYatri — Tableau Revenue Dashboard",
        image: p5,
        tags: ["data-analysis"],
        link: 'https://public.tableau.com/app/profile/divyanshu.singh4340/viz/BusYatriRevenueAnalysis/Dashboard1',
    },
    {
        name: "Plant & Crop Disease Prediction Engine",
        image: p7,
        tags: ["Machine Learning"],
        link: 'https://github.com/Divyanshu9794/Plant_Disease_Prediction_System_',
    },
    {
        name: "Edureka — Educational Community Platform",
        image: p2,
        tags: ["educational", "website"],
        link: 'https://github.com/Divyanshu9794/edureka.github.io',
    },
    {
        name: "We Bloggers — Technical Blogging Platform",
        image: p1,
        tags: ["blog", "website"],
        link: 'https://github.com/Divyanshu9794/blogger.github.io',
    },
    {
        name: "The Coder's Help Guide",
        image: p3,
        tags: ["educational", "website"],
        link: 'https://github.com/Divyanshu9794/codersguide.github.io',
    },
    {
        name: "Developer Portfolio Website",
        image: p12,
        tags: ["website"],
        link: 'https://github.com/Divyanshu9794/personal-portfolio',
    }
];


export const achievements = [
    {
        id: 1,
        year: 2,
        description: "HCLTECH PRODUCTION AWARDS",
        details: "Rising Star Award & Outstanding Contributor",
    },
    {
        id: 2,
        year: 12,
        description: "ENGINEERED OPEN-SOURCE REPOSITORIES",
        details: "Web Clients, Android Apps & ML Systems",
    },
    {
        id: 3,
        year: 2024,
        description: "GATE CS QUALIFIED EXAMINEE",
        details: "All India Rank in Computer Science & IT",
    },
    {
        id: 4,
        year: 5,
        description: "PROFESSIONAL TECH CERTIFICATIONS",
        details: "Azure (AZ-900, AI-900), Power Platform (PL-900), Claude Code & Postman Expert",
    },
];

// export const achievements = [
//     {
//         id: 1,
//         year: 2,
//         description: "HCLTECH<br />PRODUCTION<br />AWARDS",
//     },
//     {
//         id: 2,
//         year: 12,
//         description: "ENGINEERED<br />OPEN-SOURCE<br />REPOSITORIES",
//     },
//     {
//         id: 3,
//         year: 2024,
//         description: "GATE CS<br />QUALIFIED<br />EXAMINEE",
//     },
//     {
//         id: 4,
//         year: 5,
//         description: "PROFESSIONAL<br />TECH<br />CERTIFICATIONS",
//     },
// ];
export const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
};

export const cn = (...classes) => classes.filter(Boolean).join(" ");

/**
 * Auto-calculates experience duration from a start date.
 * Returns a human-friendly string like "2 yrs 1 mo" or "8 months".
 */
export const getExperience = (startDate = "2024-11-14") => {
    const start = new Date(startDate);
    const now = new Date();

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    const totalMonths = years * 12 + months;

    if (totalMonths < 1) return "< 1 month";
    if (totalMonths < 12) return `${totalMonths} month${totalMonths > 1 ? "s" : ""}`;
    if (months === 0) return `${years} yr${years > 1 ? "s" : ""}`;
    return `${years} yr${years > 1 ? "s" : ""} ${months} mo`;
};

/**
 * Returns a short label like "1+ yr" for stat cards.
 */
export const getExperienceShort = (startDate = "2024-11-14") => {
    const start = new Date(startDate);
    const now = new Date();

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    if (months < 0) { years -= 1; months += 12; }

    const totalMonths = years * 12 + months;
    if (totalMonths < 12) return `${totalMonths}mo`;
    if (months === 0) return `${years}yr`;
    return `${years}yr ${months}mo`;
};

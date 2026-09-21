/**
 * Global Constants & Configurations
 */

export const PERSONAL_INFO = {
    name: "Madhuri Katta",
    title: "AI/ML Enthusiast | Python Developer",
    tagline: "Developing Practical Solutions with AI/ML & Python.",
    website: "https://madhurikatta07.vercel.app",
    email: "madhukatta0731@gmail.com",
    github: "https://github.com/madhurikatta07",
    linkedin: "https://www.linkedin.com/in/madhurikatta07/",
    resume: "/resume/resume.pdf",
};

export const NAV_LINKS = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Certificates", href: "#certifications" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = [
    {
        name: "GitHub",
        url: PERSONAL_INFO.github,
        label: "GitHub Profile",
    },
    {
        name: "LinkedIn",
        url: PERSONAL_INFO.linkedin,
        label: "LinkedIn Profile",
    },
    {
        name: "Email",
        url: `mailto:${PERSONAL_INFO.email}`,
        label: "Send Email",
    },
];

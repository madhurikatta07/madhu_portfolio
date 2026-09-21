# 🌌 Madhuri Katta — Personal Portfolio

<div align="center">

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react&logoColor=black&style=for-the-badge)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?logo=vite&logoColor=white&style=for-the-badge)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.2.0-FF0055?logo=framer&logoColor=white&style=for-the-badge)](https://www.framer.com/motion/)
[![EmailJS](https://img.shields.io/badge/EmailJS-Integrated-EA4335?logo=gmail&logoColor=white&style=for-the-badge)](https://www.emailjs.com/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

**A modern, responsive, recruiter-first portfolio website showcasing AI/ML projects, Python applications, certifications, and technical experience.**

[🌟 View Live Site](https://madhurikatta07.vercel.app/) • [📄 Documentation](./docs/) • [📫 Contact Me](madhukatta0731@gmail.com)

</div>

---

## 📌 Overview

This project is the personal portfolio of **Madhuri Katta**, a final-year B.Tech Computer Science & Engineering (Artificial Intelligence) student specializing in **Machine Learning**, **Python Backend Development**, and **Applied AI Systems**.

### ✨ Highlights & Features
- ⚡ **Ultra-Fast Performance:** Built with React + Vite for sub-second page loads and zero bundle bloat.
- 🎨 **Futuristic Tech Aesthetic:** Dark mode interface with glassmorphism, gradient glows, and refined typography.
- 📱 **100% Fully Responsive:** Tailored layouts for ultra-wide desktops, laptops, tablets, and smartphones.
- 📜 **16 Verified Certificates:** Integrated modal viewer for instant certificate previews and credential validation.
- 📬 **Live Contact Form:** Powered by EmailJS for instant client/recruiter messaging without a separate backend server.
- 🔍 **SEO & Social Optimization:** Preconfigured Open Graph meta tags, structured JSON-LD data, and Twitter cards.

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Frontend Framework** | React.js 19, Vite 7 |
| **Styling & Theme** | Vanilla CSS (Scoped & Modular), CSS Custom Properties |
| **Animations** | Framer Motion |
| **Icons** | React Icons (`react-icons/fi`) |
| **Email Service** | EmailJS Browser SDK |
| **Deployment** | Vercel |

---

## 📂 Project Architecture

```
e:\madhu\
├── public/                         # Public static files
│   ├── favicon/favicon.svg         # Browser tab icon
│   ├── images/og-image.png         # Social share preview card
│   └── resume/resume.pdf           # Downloadable PDF resume
│
├── src/
│   ├── assets/                     # Bundled media assets
│   │   ├── certificates/           # Certificate images and PDFs
│   │   └── images/profile.png      # Profile picture
│   │
│   ├── components/                 # Reusable UI Section Components
│   │   ├── Navbar/                 # Sticky navigation with mobile menu
│   │   ├── Hero/                   # Introduction & primary CTAs
│   │   ├── About/                  # Background, strengths & focus areas
│   │   ├── Skills/                 # Categorized technical skill cards
│   │   ├── Projects/               # Project showcases with code & demo links
│   │   ├── Experience/             # Internship and practical experience
│   │   ├── Education/              # Academic history & honors
│   │   ├── Certificates/           # Certificate grid with modal previewer
│   │   ├── AchievementsLeadership/ # Hackathons & leadership highlights
│   │   ├── Contact/                # Interactive EmailJS form
│   │   ├── Footer/                 # Back to top, copyright & socials
│   │   ├── Card/                   # Shared card component
│   │   └── SectionTitle/           # Shared section header component
│   │
│   ├── data/                       # Content data arrays (Separation of Concerns)
│   │   ├── certificates.js
│   │   ├── education.js
│   │   ├── experience.js
│   │   ├── projects.js
│   │   └── skills.js
│   │
│   ├── hooks/                      # Custom React Hooks
│   │   ├── useScrollSpy.js         # Scroll-based active section detection
│   │   └── useScrollPosition.js    # Window scroll position tracker
│   │
│   ├── services/                   # External API & Service Handlers
│   │   └── emailService.js         # EmailJS submission logic
│   │
│   ├── utils/                      # Helper Utilities & Constants
│   │   └── constants.js            # Nav items, personal info & social links
│   │
│   ├── styles/                     # Global styles
│   │   └── global.css              # Design tokens, variables & typography
│   │
│   ├── App.jsx                     # Root application container
│   └── main.jsx                    # React DOM entry
│
├── docs/                           # 📚 Comprehensive Documentation
│   ├── DESIGN_SYSTEM.md            # Color palette, font hierarchy & wireframe
│   ├── PROJECTS_AND_SKILLS.md      # Detailed project & skill breakdown
│   └── PROJECT_GOAL.md             # Career goals & recruiter objectives
│
├── .env.example                    # Environment variable template
├── index.html                      # HTML5 shell & SEO meta configuration
├── package.json                    # Dependencies and scripts
└── vite.config.js                  # Vite configuration
```

---

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### 1. Clone the Repository
```bash
git clone https://github.com/madhurikatta07/madhu_portfolio.git
cd madhu-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

---

## 📚 Project Documentation

For deeper insight into the design decisions, wireframes, and career roadmap:
- 🎨 [Design System & Color Specs](./docs/DESIGN_SYSTEM.md)
- 🚀 [Projects & Technical Skills Catalog](./docs/PROJECTS_AND_SKILLS.md)
- 🎯 [Project Goals & Recruiter Persona](./docs/PROJECT_GOAL.md)

---

## 📬 Contact & Connect

**Madhuri Katta** — *AI/ML Enthusiast & Python Developer*

- 📧 **Email:** [madhukatta0731@gmail.com](mailto:madhukatta0731@gmail.com)
- 💼 **LinkedIn:** [linkedin.com/in/madhurikatta07](https://www.linkedin.com/in/madhurikatta07/)
- 🐙 **GitHub:** [github.com/madhurikatta07](https://github.com/madhurikatta07)

---

<div align="center">
  <sub>Designed & Developed with ❤️ by Madhuri Katta. Built with React & Vite.</sub>
</div>


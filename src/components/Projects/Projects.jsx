import {
    FiGithub,
    FiExternalLink,
    FiArrowUpRight,
    FiCode,
    FiCpu,
    FiMic,
    FiHeart,
    FiMessageCircle,
    FiShoppingBag,
    FiGlobe,
    FiBriefcase,
    FiCheckCircle,
} from 'react-icons/fi'

import { motion } from 'framer-motion'

import Card from '../Card/Card'
import SectionTitle from '../SectionTitle/SectionTitle'
import projects from '../../data/projects'

import './Projects.css'

/* ── Animation variants ── */
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
}

/* ── Icon map ── */
const ICONS = {
    'Vision 10+2': <FiBriefcase />,
    'AI Fake Review Detection': <FiCpu />,
    'Voice Bridge': <FiMic />,
    'Emotion Detection ML': <FiHeart />,
    'College Chatbot': <FiMessageCircle />,
    'Healthcare Schemes Portal': <FiHeart />,
    'Silent Voice': <FiMic />,
    'Madhu Magic Fashion Hub': <FiShoppingBag />,
    'Bento Bakery': <FiGlobe />,
}

function ProjectCard({ project }) {
    return (
        <motion.div variants={cardVariants}>
            <Card className="project-card">

                {/* Project Visual */}
                <div className="project-visual">
                    <div className="project-grid-overlay" />
                    <div className="project-glow" />

                    <span className="project-number">
                        {project.number}
                    </span>

                    <span className="project-category">
                        {project.category}
                    </span>

                    <div className="project-icon">
                        {ICONS[project.title] || <FiCode />}
                    </div>

                    <div className="project-corner project-corner-top" />
                    <div className="project-corner project-corner-bottom" />
                </div>

                {/* Project Content */}
                <div className="project-content">

                    <div className="project-heading">
                        <div>
                            <h3 className="project-title">
                                {project.title}
                            </h3>
                            <p className="project-subtitle">
                                {project.subtitle}
                            </p>
                        </div>

                        <FiArrowUpRight className="project-arrow" />
                    </div>

                    <p className="project-description">
                        {project.description}
                    </p>

                    {/* Highlights */}
                    {project.highlights && project.highlights.length > 0 && (
                        <div className="project-highlights">
                            <h4 className="project-highlights-title">
                                Highlights
                            </h4>
                            <ul className="project-highlights-list">
                                {project.highlights.map((highlight) => (
                                    <li
                                        key={highlight}
                                        className="project-highlight-item"
                                    >
                                        <FiCheckCircle className="project-highlight-icon" />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Tech Stack */}
                    <div className="project-tech">
                        {project.tech.map((technology) => (
                            <span
                                key={technology}
                                className="project-tech-item"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="project-actions">
                        {project.github && project.github !== '#' && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="project-btn project-btn-github"
                            >
                                <FiGithub />
                                <span>GitHub</span>
                            </a>
                        )}

                        {project.live && project.live !== '#' && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noreferrer"
                                className="project-btn project-btn-demo"
                            >
                                <FiExternalLink />
                                <span>Live Demo</span>
                            </a>
                        )}
                    </div>

                </div>
            </Card>
        </motion.div>
    )
}

function Projects() {
    const visibleProjects = projects.slice(0, 3)
    const hiddenProjects = projects.slice(3)

    return (
        <section id="projects" className="projects section">
            <div className="section-container">

                <SectionTitle
                    title="Projects"
                    subtitle="A collection of practical AI/ML, software, and web development projects focused on solving real-world problems."
                />

                {/* First 3 Projects — animated */}
                <motion.div
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {visibleProjects.map((project) => (
                        <ProjectCard
                            key={project.number}
                            project={project}
                        />
                    ))}
                </motion.div>

                {/* Hidden Projects */}
                {hiddenProjects.length > 0 && (
                    <details className="more-projects">
                        <summary className="more-projects-button">
                            <span>View All Projects</span>
                            <FiArrowUpRight />
                        </summary>

                        <motion.div
                            className="projects-grid more-projects-grid"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.05 }}
                        >
                            {hiddenProjects.map((project) => (
                                <ProjectCard
                                    key={project.number}
                                    project={project}
                                />
                            ))}
                        </motion.div>
                    </details>
                )}

            </div>
        </section>
    )
}

export default Projects
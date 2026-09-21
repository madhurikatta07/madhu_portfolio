import { motion } from 'framer-motion'
import { FiBookOpen } from 'react-icons/fi'

import SectionTitle from '../SectionTitle/SectionTitle'
import education from '../../data/education'

import './Education.css'

function Education() {
    return (
        <section id="education" className="education section">
            <div className="section-container">

                <SectionTitle
                    title="Education"
                    subtitle="My academic journey and foundation in computer science and artificial intelligence."
                />

                <div className="education-timeline">

                    {/* Desktop Timeline */}
                    <div className="education-desktop-line" />

                    {education.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="education-item"
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                        >
                            {/* Timeline Marker */}
                            <div className="education-marker">
                                <span />
                            </div>

                            {/* Education Card */}
                            <div className="education-card">

                                <div className="education-header">

                                    <div className="education-heading">

                                        <div className="education-icon">
                                            <FiBookOpen />
                                        </div>

                                        <div>
                                            <p className="education-duration">
                                                {item.duration}
                                            </p>

                                            <h3 className="education-degree">
                                                {item.degree}
                                            </h3>

                                            {item.branch && (
                                                <p className="education-branch">
                                                    {item.branch}
                                                </p>
                                            )}
                                        </div>

                                    </div>

                                    {item.cgpa && (
                                        <span className="education-cgpa">
                                            CGPA {item.cgpa}
                                        </span>
                                    )}

                                </div>

                                <div className="education-divider" />

                                <p className="education-institution">
                                    {item.institution}
                                </p>

                                <p className="education-location">
                                    {item.location}
                                </p>

                                {item.status && (
                                    <span className="education-status">
                                        ● {item.status}
                                    </span>
                                )}

                                {/* Relevant Areas */}
                                {item.relevantAreas && (
                                    <div className="education-relevant">

                                        <span className="education-relevant-title">
                                            Relevant Areas
                                        </span>

                                        <div className="education-relevant-list">
                                            {item.relevantAreas.map((area) => (
                                                <span
                                                    key={area}
                                                    className="education-relevant-item"
                                                >
                                                    {area}
                                                </span>
                                            ))}
                                        </div>

                                    </div>
                                )}

                            </div>
                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    )
}

export default Education
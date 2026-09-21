import SectionTitle from '../SectionTitle/SectionTitle'
import Card from '../Card/Card'
import experience from '../../data/experience'
import './Experience.css'

function Experience() {
    return (
        <section id="experience" className="experience section">
            <div className="section-container">

                <SectionTitle
                    title="Experience / Internships"
                    subtitle="Practical internship experiences that strengthened my foundation in data analysis, artificial intelligence, and machine learning."
                />

                {/* Internship Timeline */}
                <div className="experience-timeline">

                    {experience.map((internship, index) => (
                        <div
                            key={internship.organization}
                            className="experience-item"
                        >

                            {/* Timeline Marker */}
                            <div className="experience-timeline-marker">
                                <span />
                            </div>

                            {/* Timeline Line */}
                            {index !== experience.length - 1 && (
                                <div className="experience-timeline-line" />
                            )}

                            {/* Experience Card */}
                            <Card className="experience-card">

                                <div className="experience-header">

                                    <div className="experience-heading">

                                        <span className="experience-type">
                                            {internship.type}
                                        </span>

                                        <h3 className="experience-title">
                                            {internship.title}
                                        </h3>

                                        <p className="experience-organization">
                                            {internship.organization}
                                        </p>

                                    </div>

                                    <div className="experience-date">
                                        <span>{internship.year}</span>
                                        <small>{internship.duration}</small>
                                    </div>

                                </div>

                                <p className="experience-description">
                                    {internship.description}
                                </p>

                                <div className="experience-skills">
                                    {internship.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="experience-skill"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                            </Card>

                        </div>
                    ))}

                </div>

                {/* Practical Project Experience */}
                <div className="practical-experience">

                    <div className="practical-heading">

                        <span className="experience-type">
                            PRACTICAL EXPERIENCE
                        </span>

                        <h3 className="practical-title">
                            Building Through Projects
                        </h3>

                        <p className="practical-description">
                            Alongside my internships, I have developed practical
                            AI/ML, Python, backend, and web-based applications
                            focused on solving real-world problems.
                        </p>

                    </div>

                    <div className="practical-tags">
                        <span>AI / ML</span>
                        <span>Python</span>
                        <span>NLP</span>
                        <span>Backend Development</span>
                        <span>Web Development</span>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Experience
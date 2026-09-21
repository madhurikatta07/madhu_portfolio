
import SectionTitle from '../SectionTitle/SectionTitle'
import Card from '../Card/Card'
import skills from '../../data/skills'
import './Skills.css'

function Skills() {
    return (
        <section id="skills" className="skills section">
            <div className="section-container">

                <SectionTitle
                    title="Technical Skills"
                    subtitle="Technologies and tools I use to build practical AI/ML and software solutions."
                />

                <div className="skills-grid">

                    {skills.map((skillGroup) => (
                        <Card
                            key={skillGroup.category}
                            className="skill-card"
                        >

                            {/* Category Header */}
                            <div className="skill-card-header">

                                <span className="skill-icon">
                                    {skillGroup.icon}
                                </span>

                                <span className="skill-accent">
                                    ✦
                                </span>

                            </div>


                            {/* Category Name */}
                            <h3 className="skill-category">
                                {skillGroup.category}
                            </h3>


                            {/* Skills */}
                            <div className="skill-list">

                                {skillGroup.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="skill-badge"
                                    >
                                        {skill}
                                    </span>
                                ))}

                            </div>


                            {/* Bottom Accent */}
                            <div className="skill-bottom-accent" />

                        </Card>
                    ))}

                </div>

            </div>
        </section>
    )
}

export default Skills
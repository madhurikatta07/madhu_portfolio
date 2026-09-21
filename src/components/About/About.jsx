import SectionTitle from '../SectionTitle/SectionTitle'
import Card from '../Card/Card'
import './About.css'

function About() {
    const strengths = [
        'Problem Solving',
        'Continuous Learning',
        'Team Collaboration',
        'Project Development',
    ]

    return (
        <section id="about" className="about section">
            <div className="section-container">

                <SectionTitle
                    title="About Me"
                />

                {/* Main About Card */}
                <Card className="about-main-card">

                    <h3 className="about-name">
                        Hi, I'm Madhuri Katta
                    </h3>

                    <p className="about-role">
                        AI/ML & Python Developer
                    </p>

                    {/* Introduction */}
                    <div className="about-block">
                        <h4 className="about-label">
                            Introduction
                        </h4>

                        <p className="about-text">
                            I am a final-year Computer Science and Engineering student
                            specializing in Artificial Intelligence. I am passionate about
                            building practical AI/ML applications and Python-based
                            solutions that solve real-world problems.
                        </p>
                    </div>

                    {/* Focus + Career Goal */}
                    <div className="about-info-grid">

                        <div className="about-block">
                            <h4 className="about-label">
                                Focus
                            </h4>

                            <p className="about-text">
                                AI/ML • Python • Backend Development • Data
                            </p>
                        </div>

                        <div className="about-block">
                            <h4 className="about-label">
                                Career Goal
                            </h4>

                            <p className="about-text">
                                Aspiring AI/ML Engineer focused on developing practical
                                intelligent solutions using Python and machine learning.
                            </p>
                        </div>

                    </div>

                    {/* Strengths */}
                    <div className="about-block about-strengths">

                        <h4 className="about-label">
                            Strengths
                        </h4>

                        <div className="about-strength-list">
                            {strengths.map((strength) => (
                                <span
                                    key={strength}
                                    className="about-strength"
                                >
                                    {strength}
                                </span>
                            ))}
                        </div>

                    </div>

                </Card>


                {/* About Stats */}
                <div className="about-stats">

                    <Card className="about-stat-card">
                        <span className="about-stat-number blue">
                            7+  
                        </span>

                        <p className="about-stat-label">
                            Projects
                        </p>
                    </Card>


                    <Card className="about-stat-card">
                        <span className="about-stat-number purple">
                            AI/ML
                        </span>

                        <p className="about-stat-label">
                            Focus
                        </p>
                    </Card>


                    <Card className="about-stat-card">
                        <span className="about-stat-number magenta">
                            Python
                        </span>

                        <p className="about-stat-label">
                            Developer
                        </p>
                    </Card>

                </div>

            </div>
        </section>
    )
}

export default About
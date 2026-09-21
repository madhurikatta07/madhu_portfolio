
import { useEffect, useState } from 'react'
import { FiArrowRight, FiDownload } from 'react-icons/fi'
import './Hero.css'
import profilePhoto from '../../assets/images/profile.png'


function Hero() {
    const roles = [
        'AI/ML Enthusiast',
        'Python Developer',
        'Backend Developer',
        'AI Application Developer',
    ]

    const [roleIndex, setRoleIndex] = useState(0)
    const [displayText, setDisplayText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentRole = roles[roleIndex]

        const typingSpeed = isDeleting ? 60 : 100

        const timer = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentRole.substring(0, displayText.length + 1))

                if (displayText === currentRole) {
                    setTimeout(() => setIsDeleting(true), 1200)
                }
            } else {
                setDisplayText(currentRole.substring(0, displayText.length - 1))

                if (displayText === '') {
                    setIsDeleting(false)
                    setRoleIndex((prev) => (prev + 1) % roles.length)
                }
            }
        }, typingSpeed)

        return () => clearTimeout(timer)
    }, [displayText, isDeleting, roleIndex])

    return (
        <section id="home" className="hero">

            {/* Background Effects */}
            <div className="hero-grid" />
            <div className="hero-glow hero-glow-blue" />
            <div className="hero-glow hero-glow-purple" />
            <div className="hero-glow hero-glow-pink" />

            <div className="hero-container">

                {/* =========================
            PHOTO AREA
        ========================== */}
                <div className="hero-photo-wrapper">

                    <div className="hero-photo-glow" />

                    <div className="hero-photo">

                        <img
                            src={profilePhoto}
                            alt="Madhuri Katta"
                            className="hero-photo-image"
                        />

                    </div>

                    {/* Decorative particles */}
                    <span className="hero-particle particle-one">✦</span>
                    <span className="hero-particle particle-two">✦</span>
                    <span className="hero-particle particle-three">•</span>
                    <span className="hero-particle particle-four">••</span>

                </div>

                {/* =========================
            HERO CONTENT
        ========================== */}
                <div className="hero-content">

                    <p className="hero-greeting">
                        Hi, I'm
                    </p>

                    <h1 className="hero-name">
                        Madhuri Katta
                    </h1>

                    {/* Typing Role */}
                    <div className="hero-role">
                        <span className="gradient-text">
                            {displayText}
                        </span>

                        <span className="typing-cursor">
                            |
                        </span>
                    </div>

                    <p className="hero-tagline">
                        Developing Practical Solutions with AI/ML & Python.
                    </p>

                    <p className="hero-description">
                        Final-year Computer Science & Engineering student specializing
                        in Artificial Intelligence, passionate about building practical
                        AI/ML applications and Python-based solutions.
                    </p>

                    {/* =========================
              BUTTONS
          ========================== */}
                    <div className="hero-buttons">

                        <a
                            href="#projects"
                            className="hero-button hero-button-primary"
                        >
                            <span>View Projects</span>
                            <FiArrowRight />
                        </a>

                        <a
                            href="/resume/resume.pdf"
                            download
                            className="hero-button hero-button-secondary"
                        >
                            <FiDownload />
                            <span>Download Resume</span>
                        </a>

                    </div>

                    {/* =========================
              TECHNOLOGY BADGES
          ========================== */}
                    <div className="hero-badges">

                        <div className="hero-badge">
                            <span>✦</span>
                            AI / ML
                        </div>

                        <div className="hero-badge">
                            <span>✦</span>
                            Python
                        </div>

                        <div className="hero-badge">
                            <span>✦</span>
                            Backend
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Hero


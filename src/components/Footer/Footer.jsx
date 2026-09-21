import {
    FiGithub,
    FiLinkedin,
    FiMail,
    FiArrowUp,
} from 'react-icons/fi'
import './Footer.css'
import { PERSONAL_INFO } from '../../utils/constants'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">

            <div className="footer-container">

                {/* ===== BRAND ===== */}
                <div className="footer-brand">
                    <a href="#home" className="footer-name">
                        {PERSONAL_INFO.name}
                    </a>

                    <p className="footer-role">
                        {PERSONAL_INFO.title}
                    </p>

                    <p className="footer-tagline">
                        {PERSONAL_INFO.tagline}
                    </p>
                </div>

                {/* ===== SOCIAL LINKS ===== */}
                <div className="footer-socials">

                    <a
                        href={PERSONAL_INFO.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-link"
                        aria-label="GitHub"
                    >
                        <FiGithub size={18} />
                        <span>GitHub</span>
                    </a>

                    <a
                        href={PERSONAL_INFO.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-link"
                        aria-label="LinkedIn"
                    >
                        <FiLinkedin size={18} />
                        <span>LinkedIn</span>
                    </a>

                    <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="footer-social-link"
                        aria-label="Email"
                    >
                        <FiMail size={18} />
                        <span>Email</span>
                    </a>

                </div>

                {/* ===== DIVIDER ===== */}
                <div className="footer-divider" />

                {/* ===== BOTTOM ===== */}
                <div className="footer-bottom">

                    <p className="footer-copyright">
                        © {currentYear} Madhuri Katta
                    </p>

                    <a
                        href="#home"
                        className="footer-back-top"
                        aria-label="Back to top"
                    >
                        <span>Back to Top</span>
                        <FiArrowUp size={17} />
                    </a>

                </div>

            </div>

        </footer>
    )
}

export default Footer
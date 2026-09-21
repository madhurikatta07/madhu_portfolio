import { useState } from 'react'
import { FiMenu, FiX, FiFileText } from 'react-icons/fi'
import './Navbar.css'
import { NAV_LINKS, PERSONAL_INFO } from '../../utils/constants'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const handleLinkClick = () => {
        setIsOpen(false)
    }

    return (
        <header className="navbar">
            <nav className="navbar-container">
                {/* Brand Logo */}
                <a
                    href="#home"
                    onClick={handleLinkClick}
                    className="navbar-brand"
                >
                    {PERSONAL_INFO.name.toUpperCase()}
                </a>

                {/* Desktop Navigation Links */}
                <div className="navbar-links">
                    {NAV_LINKS.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="navbar-link"
                        >
                            {item.label}
                        </a>
                    ))}

                    <a
                        href={PERSONAL_INFO.resume}
                        download
                        className="navbar-resume"
                    >
                        <FiFileText size={15} />
                        <span>Resume</span>
                    </a>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="navbar-menu-button"
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                >
                    {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                </button>
            </nav>

            {/* Mobile Navigation Dropdown */}
            <div className={`mobile-menu ${isOpen ? 'mobile-menu-open' : ''}`}>
                {NAV_LINKS.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        onClick={handleLinkClick}
                        className="mobile-nav-link"
                    >
                        {item.label}
                    </a>
                ))}

                <a
                    href={PERSONAL_INFO.resume}
                    download
                    onClick={handleLinkClick}
                    className="mobile-resume"
                >
                    <FiFileText size={15} />
                    <span>Download Resume</span>
                </a>
            </div>
        </header>
    )
}

export default Navbar
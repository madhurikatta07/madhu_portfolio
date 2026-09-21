import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
    FiMail,
    FiGithub,
    FiLinkedin,
    FiSend,
    FiCheckCircle,
    FiAlertCircle,
} from "react-icons/fi";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Contact.css";
import { sendContactEmail } from "../../services/emailService";
import { PERSONAL_INFO } from "../../utils/constants";

const Contact = () => {
    const formRef = useRef(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState({
        type: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (
            !formData.name.trim() ||
            !formData.email.trim() ||
            !formData.message.trim()
        ) {
            setStatus({
                type: "error",
                message: "Please fill in all fields.",
            });
            return;
        }

        // Show loading state
        setStatus({
            type: "loading",
            message: "Sending your message...",
        });

        try {
            // Send form through EmailJS service
            await sendContactEmail(formRef.current);

            // Success
            setStatus({
                type: "success",
                message:
                    "Thank you! Your message has been sent successfully.",
            });

            // Clear form
            setFormData({
                name: "",
                email: "",
                message: "",
            });

            formRef.current.reset();

        } catch (error) {
            // Error
            console.error("EmailJS Error:", error);

            setStatus({
                type: "error",
                message:
                    `Failed to send message. Please email me directly at ${PERSONAL_INFO.email}.`,
            });
        }

        // Clear status after 6 seconds
        setTimeout(() => {
            setStatus({
                type: "",
                message: "",
            });
        }, 6000);
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">

                {/* Section Header */}
                <div className="contact-header">
                    <SectionTitle
                        title="Let's Connect"
                        subtitle="Have an opportunity or project idea? I'm always interested in learning, building, and collaborating."
                    />
                </div>

                {/* Contact Form */}
                <motion.div
                    className="contact-form-wrapper"
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                >
                    <form
                        ref={formRef}
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >
                        {/* Name */}
                        <div className="form-group">
                            <label htmlFor="name">Name</label>

                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                autoComplete="name"
                            />
                        </div>

                        {/* Email */}
                        <div className="form-group">
                            <label htmlFor="email">Email</label>

                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                autoComplete="email"
                            />
                        </div>

                        {/* Message */}
                        <div className="form-group">
                            <label htmlFor="message">Message</label>

                            <textarea
                                id="message"
                                name="message"
                                placeholder="Write your message..."
                                rows="6"
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Status Message */}
                        {status.message && (
                            <div
                                className={`contact-status ${status.type}`}
                            >
                                {status.type === "success" ? (
                                    <FiCheckCircle />
                                ) : (
                                    <FiAlertCircle />
                                )}

                                <span>{status.message}</span>
                            </div>
                        )}

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            className="contact-submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={status.type === "loading"}
                        >
                            <span>
                                {status.type === "loading"
                                    ? "Sending..."
                                    : "Send Message"}
                            </span>

                            <FiSend />
                        </motion.button>
                    </form>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    className="contact-socials"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    {/* GitHub */}
                    <a
                        href={PERSONAL_INFO.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FiGithub />
                        <span>GitHub</span>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href={PERSONAL_INFO.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FiLinkedin />
                        <span>LinkedIn</span>
                    </a>

                    {/* Email */}
                    <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        aria-label="Email"
                    >
                        <FiMail />
                        <span>Email</span>
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;
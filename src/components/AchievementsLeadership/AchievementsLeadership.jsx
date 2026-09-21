import { motion } from "framer-motion";
import {
    FiAward,
    FiCode,
    FiUsers,
    FiActivity,
    FiTarget,
    FiHeart,
    FiChevronRight,
} from "react-icons/fi";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./AchievementsLeadership.css";

const achievements = [
    {
        icon: <FiAward />,
        title: "Hackathon Achievement",
        description:
            "Secured 10th place in a competitive hackathon through collaborative problem-solving and rapid project development.",
    },
    {
        icon: <FiCode />,
        title: "JNTUGV Hackathon",
        description:
            "Participated in a team-based hackathon focused on developing practical technical solutions under time constraints.",
    },
    {
        icon: <FiTarget />,
        title: "Technical Learning",
        description:
            "Continuously strengthened technical skills through coding challenges, workshops, and hands-on project development.",
    },
];

const leadershipActivities = [
    {
        icon: <FiUsers />,
        title: "CRT Coordinator",
        description:
            "Coordinated campus recruitment training activities and supported placement-related programs.",
    },
    {
        icon: <FiActivity />,
        title: "Research Conclave Coordinator",
        description:
            "Supported event planning, coordination, and participant-related activities.",
    },
    {
        icon: <FiUsers />,
        title: "Project Team Leader",
        description:
            "Coordinated team tasks, project progress, and collaboration during academic project development.",
    },
    {
        icon: <FiCode />,
        title: "Code Infinity Club",
        description:
            "Participated in coding and problem-solving activities as an active club member.",
    },
    {
        icon: <FiHeart />,
        title: "NGO Involvement",
        description:
            "Contributed to community outreach and volunteering activities.",
    },
];

function AchievementsLeadership() {
    return (
        <section
            id="achievements"
            className="achievements-leadership-section"
        >
            <div className="achievements-container">

                {/* Section Header */}
                <div className="achievements-section-header">
                    <SectionTitle
                        title="Achievements & Leadership"
                        subtitle="Highlights of my technical accomplishments, leadership experiences, and involvement beyond academics."
                    />
                </div>

                {/* Main Content */}
                <div className="achievements-content">

                    {/* LEFT — ACHIEVEMENTS */}
                    <motion.div
                        className="achievements-column"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="column-heading">
                            <div className="column-icon">
                                <FiAward />
                            </div>

                            <div>
                                <span>TECHNICAL MILESTONES</span>
                                <h3>Achievements</h3>
                            </div>
                        </div>

                        <div className="achievement-list">
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    className="achievement-card"
                                    key={achievement.title}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="achievement-icon">
                                        {achievement.icon}
                                    </div>

                                    <div className="achievement-info">
                                        <h4>{achievement.title}</h4>

                                        <p>{achievement.description}</p>

                                        <div className="achievement-arrow">
                                            <FiChevronRight />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT — LEADERSHIP */}
                    <motion.div
                        className="leadership-column"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="column-heading">
                            <div className="column-icon">
                                <FiUsers />
                            </div>

                            <div>
                                <span>IMPACT • INVOLVEMENT</span>
                                <h3>Leadership & Activities</h3>
                            </div>
                        </div>

                        <div className="leadership-timeline">
                            {leadershipActivities.map((activity, index) => (
                                <motion.div
                                    className="leadership-item"
                                    key={activity.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                >
                                    <div className="timeline-marker">
                                        {activity.icon}
                                    </div>

                                    <div className="timeline-content">
                                        <h4>{activity.title}</h4>

                                        <p>{activity.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default AchievementsLeadership;
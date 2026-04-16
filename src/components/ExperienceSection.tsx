import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { usePortfolio } from "../context/PortfolioContext";
import "./styles/ExperienceSection.css";

const ExperienceSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { data } = usePortfolio();
  if (!data) return null;
  const { experience } = data;

  return (
    <section className="experience-section" id="experience" ref={ref}>
      <div className="section-header">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          PROFESSIONAL JOURNEY
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Work <span className="accent-blue">Experience</span>
        </motion.h2>
      </div>

      <div className="timeline-wrapper">
        <div className="timeline-line" />
        {experience.map((exp, i) => (
          <motion.div
            key={i}
            className={`timeline-item ${i % 2 === 0 ? "timeline-left" : "timeline-right"}`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.25 }}
          >
            <div className={`timeline-node ${exp.type === "present" ? "node-present" : ""}`}>
              {exp.type === "present" && <div className="node-pulse" />}
            </div>

            <div className="timeline-card">
              <div className="timeline-card-glow" />
              <div className="timeline-meta">
                <span className={`timeline-period ${exp.type === "present" ? "period-present" : ""}`}>
                  {exp.type === "present" && <span className="live-dot" />}
                  {exp.period}
                </span>
                <span className="timeline-location">📍 {exp.location}</span>
              </div>
              <h3 className="timeline-role">{exp.title}</h3>
              <h4 className="timeline-company">{exp.company}</h4>
              <p className="timeline-desc">{exp.description}</p>
              <ul className="timeline-achievements">
                {exp.achievements.map((ach, j) => (
                  <li key={j}>
                    <span className="achievement-bullet">▸</span>
                    {ach}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { usePortfolio } from "../context/PortfolioContext";
import "./styles/ProjectsSection.css";

const ProjectsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { data } = usePortfolio();
  if (!data) return null;
  const { projects } = data;

  return (
    <section className="projects-section" id="projects" ref={ref}>
      <div className="section-header">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          FEATURED WORK
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Cloud <span className="accent-green">Projects</span>
        </motion.h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
          >
            <div className="project-card-glow" />
            <div className="project-header">
              <span className="project-number">{project.number}</span>
              <span className="project-category">{project.category}</span>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-metrics">
              {project.metrics.map((metric, j) => (
                <div key={j} className="metric-item">
                  <span className="metric-icon">✦</span>
                  <span>{metric}</span>
                </div>
              ))}
            </div>

            <div className="project-tools">
              {project.tools.map((tool, j) => (
                <span key={j} className="tool-tag">{tool}</span>
              ))}
            </div>

            <div className="project-footer">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-github-link"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  View on GitHub
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

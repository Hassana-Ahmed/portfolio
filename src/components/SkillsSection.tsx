import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiGooglecloud,
  SiTerraform,
  SiAnsible,
  SiGithubactions,
  SiJenkins,
  SiDocker,
} from "react-icons/si";
import { FaAws, FaMicrosoft, FaServer, FaCloud, FaEye, FaDatabase } from "react-icons/fa";
import { usePortfolio } from "../context/PortfolioContext";
import "./styles/SkillsSection.css";

const iconMap: Record<string, React.ReactNode> = {
  AWS: <FaAws />,
  Azure: <FaMicrosoft />,
  GCP: <SiGooglecloud />,
  "Alibaba Cloud": <FaCloud />,
  Terraform: <SiTerraform />,
  CloudFormation: <FaAws />,
  Ansible: <SiAnsible />,
  "GitHub Actions": <SiGithubactions />,
  Jenkins: <SiJenkins />,
  Docker: <SiDocker />,
  "AWS ECS": <FaAws />,
  "Amazon ECR": <FaAws />,
  CloudWatch: <FaEye />,
  "VMware vSphere": <FaServer />,
  "Amazon S3": <FaAws />,
  "Amazon RDS": <FaDatabase />,
};

const categoryColors: Record<string, string> = {
  "Cloud Platforms": "#00d4ff",
  "Infrastructure as Code": "#00ff88",
  "CI/CD": "#ff6b6b",
  Containers: "#4ecdc4",
  Monitoring: "#ffd93d",
  "Virtualization & Storage": "#c77dff",
};

const SkillsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { data } = usePortfolio();
  if (!data) return null;
  const { skills } = data;

  return (
    <section className="skills-section" id="skills" ref={ref}>
      <div className="section-header">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          TECHNICAL EXPERTISE
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Skills & <span className="accent-blue">Technologies</span>
        </motion.h2>
      </div>

      <div className="skills-grid">
        {skills.map((category, i) => (
          <motion.div
            key={i}
            className="skill-category-card"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{ "--category-color": categoryColors[category.category] || "#00d4ff" } as React.CSSProperties}
          >
            <div className="skill-category-header">
              <div className="skill-category-dot" />
              <h3>{category.category}</h3>
            </div>
            <div className="skill-tags">
              {category.items.map((item, j) => (
                <motion.div
                  key={j}
                  className="skill-tag"
                  whileHover={{ scale: 1.08, y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="skill-icon">{iconMap[item.name] || <FaCloud />}</span>
                  <span>{item.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

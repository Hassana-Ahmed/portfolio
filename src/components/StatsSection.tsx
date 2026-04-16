import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { usePortfolio } from "../context/PortfolioContext";
import "./styles/StatsSection.css";

const StatsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { data } = usePortfolio();
  if (!data) return null;
  const { stats } = data;

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-bg-line" />
      <div className="stats-container">
        <motion.div
          className="stats-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="stats-label">BY THE NUMBERS</p>
          <h2 className="stats-title">Impact & Metrics</h2>
        </motion.div>

        <div className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="stat-card"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="stat-glow" />
              <div className="stat-value">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    decimals={stat.decimals || 0}
                    suffix={stat.suffix}
                    delay={i * 0.1}
                  />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <p className="stat-label">{stat.label}</p>
              <div className="stat-underline" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

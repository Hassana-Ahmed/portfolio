import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { usePortfolio, Certification } from "../context/PortfolioContext";
import "./styles/CertificationsSection.css";

const CertificationsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { data } = usePortfolio();
  if (!data) return null;
  const { certifications } = data;

  return (
    <section className="certs-section" id="certifications" ref={ref}>
      <div className="section-header">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          PROFESSIONAL CREDENTIALS
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Certifi<span className="accent-green">cations</span>
        </motion.h2>
      </div>

      <div className="certs-grid">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50, rotateY: -15 }}
            animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <CertCard cert={cert} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const CertCard = ({ cert }: { cert: Certification }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="cert-flip-container"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className="cert-flip-inner"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div className="cert-face cert-front" style={{ "--cert-color": cert.color } as React.CSSProperties}>
          <div className="cert-front-glow" />
          <div className="cert-logo-area">
            {cert.logo === "azure" ? (
              <AzureLogo />
            ) : (
              <HuaweiLogo />
            )}
          </div>
          <div className="cert-badge-tag" style={{ background: cert.color }}>
            {cert.short}
          </div>
          <h3 className="cert-name">{cert.name}</h3>
          <p className="cert-issuer">{cert.issuer}</p>
          <div className="cert-year">Valid until {cert.year}</div>
          <div className="cert-hint">Hover to flip ↻</div>
        </div>

        {/* Back */}
        <div className="cert-face cert-back" style={{ "--cert-color": cert.color } as React.CSSProperties}>
          <div className="cert-back-glow" />
          <div className="cert-back-icon">✦</div>
          <h3>{cert.short}</h3>
          <p className="cert-back-desc">{cert.description}</p>
          <div className="cert-back-details">
            <div className="cert-detail-row">
              <span className="cert-detail-label">Issuer</span>
              <span className="cert-detail-val">{cert.issuer}</span>
            </div>
            <div className="cert-detail-row">
              <span className="cert-detail-label">Status</span>
              <span className="cert-detail-val cert-active">✓ Active</span>
            </div>
            <div className="cert-detail-row">
              <span className="cert-detail-label">Valid Until</span>
              <span className="cert-detail-val">{cert.year}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const AzureLogo = () => (
  <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" className="cert-svg-logo">
    <defs>
      <linearGradient id="az1" x1="-.03" y1="0.7" x2="0.22" y2="0.03" gradientUnits="objectBoundingBox">
        <stop offset="0" stopColor="#114a8b"/>
        <stop offset="1" stopColor="#0669bc"/>
      </linearGradient>
      <linearGradient id="az2" x1="0.54" y1="0.45" x2="0.46" y2="0.81" gradientUnits="objectBoundingBox">
        <stop offset="0" stopOpacity=".3"/>
        <stop offset=".07" stopOpacity=".2"/>
        <stop offset=".32" stopOpacity=".1"/>
        <stop offset=".62" stopOpacity=".05"/>
        <stop offset="1" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="az3" x1="0.74" y1="0.34" x2="0.38" y2="0.97" gradientUnits="objectBoundingBox">
        <stop offset="0" stopColor="#3ccbf4"/>
        <stop offset="1" stopColor="#2892df"/>
      </linearGradient>
    </defs>
    <path d="M33.338 6.544h26.038L31.613 89.456a4.15 4.15 0 01-3.933 2.829H8.149a4.145 4.145 0 01-3.928-5.469L29.404 9.373a4.15 4.15 0 013.934-2.83z" fill="url(#az1)"/>
    <path d="M71.175 60.5H29.972a1.912 1.912 0 00-1.3 3.31l26.647 24.845a4.168 4.168 0 002.838 1.131h23.445z" fill="url(#az2)"/>
    <path d="M33.338 6.544a4.12 4.12 0 00-3.943 2.879L4.252 86.777a4.14 4.14 0 003.9 5.508h20.811a4.44 4.44 0 003.428-2.9l5.02-14.795 17.944 16.723a4.24 4.24 0 002.666.97H81.2L71.024 60.5H45.88l15.59-45.445L57.612 6.544z" fill="url(#az3)"/>
    <path d="M66.6 9.373A4.145 4.145 0 0062.668 6.5H33.648a4.145 4.145 0 013.934 2.877l25.18 77.419a4.145 4.145 0 01-3.934 5.469h29.021a4.145 4.145 0 003.933-5.469z" fill="#0078d4"/>
  </svg>
);

const HuaweiLogo = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="cert-svg-logo">
    <circle cx="50" cy="50" r="48" fill="#CF0A2C" />
    <text x="50" y="62" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold" fontFamily="Arial">HUAWEI</text>
  </svg>
);

export default CertificationsSection;

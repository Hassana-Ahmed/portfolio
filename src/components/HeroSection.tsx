import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { usePortfolio } from "../context/PortfolioContext";
import "./styles/HeroSection.css";

const lines = [
  { cmd: "$ whoami", out: "hassan-ahmed" },
  { cmd: "$ cat role.txt", out: "DevOps Engineer | Multi-Cloud Specialist" },
  { cmd: "$ echo $LOCATION", out: "Karachi, Pakistan 🇵🇰" },
  { cmd: "$ cat skills.json", out: '["AWS","Azure","Terraform","Docker","K8s"]' },
  { cmd: "$ uptime --infra", out: "99.8% uptime ✓ — 20+ VMs managed" },
];

const TerminalLines = () => {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [currentText, setCurrentText] = useState("");
  const [phase, setPhase] = useState<"cmd" | "out">("cmd");
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    if (lineIdx >= lines.length) {
      setDone(true);
      return;
    }
    const currentLine = lines[lineIdx];
    const targetText = phase === "cmd" ? currentLine.cmd : currentLine.out;

    if (charIdx < targetText.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + targetText[charIdx]);
        setCharIdx((prev) => prev + 1);
      }, phase === "cmd" ? 40 : 20);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        if (phase === "cmd") {
          setVisibleLines((prev) => [...prev, lineIdx * 2]);
          setCurrentText("");
          setCharIdx(0);
          setPhase("out");
        } else {
          setVisibleLines((prev) => [...prev, lineIdx * 2 + 1]);
          setCurrentText("");
          setCharIdx(0);
          setPhase("cmd");
          setLineIdx((prev) => prev + 1);
        }
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [charIdx, lineIdx, phase, done]);

  return (
    <div className="terminal-content">
      {lines.slice(0, lineIdx + 1).map((line, i) => (
        <div key={i}>
          {(i < lineIdx || phase === "out") && (
            <div className="terminal-line terminal-cmd">
              <span className="t-prompt">$</span>
              <span className="t-text">
                {i === lineIdx && phase === "cmd" ? currentText : line.cmd.slice(2)}
              </span>
              {i === lineIdx && phase === "cmd" && <span className="t-cursor">█</span>}
            </div>
          )}
          {(visibleLines.includes(i * 2 + 1) || (i < lineIdx) || (i === lineIdx && phase === "out" && charIdx > 0)) && (
            <div className="terminal-line terminal-out">
              <span className="t-output">
                {i === lineIdx && phase === "out" ? currentText : line.out}
              </span>
              {i === lineIdx && phase === "out" && <span className="t-cursor">█</span>}
            </div>
          )}
        </div>
      ))}
      {done && (
        <div className="terminal-line terminal-cmd">
          <span className="t-prompt">$</span>
          <span className="t-cursor blink">█</span>
        </div>
      )}
    </div>
  );
};

const HeroSection = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const { data } = usePortfolio();
  if (!data) return null;
  const { personalInfo } = data;

  return (
    <section className="hero-section" id="home">
      <div className="hero-bg-grid" />
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      <div className="hero-container">
        {/* Left: Name & Titles */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="badge-dot" />
            Available for Opportunities
          </motion.div>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {personalInfo.name.split(" ").map((word, i) => (
              <span key={i} className={i === 1 ? "hero-name-accent" : ""}>
                {word}
                {i === 0 ? <br /> : ""}
              </span>
            ))}
          </motion.h1>

          <motion.div
            className="hero-title-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="hero-title-prefix">&gt; </span>
            <span className="hero-typing-title">
              <Typewriter
                words={personalInfo.titles}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={50}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </span>
          </motion.div>

          <motion.p
            className="hero-summary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {personalInfo.summary.slice(0, 180)}...
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a href="#projects" className="cta-btn cta-primary">
              <span>View Projects</span>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="#contact" className="cta-btn cta-secondary">
              Contact Me
            </a>
            <a
              href="/Hassan_Ahmed_Resume.pdf"
              download
              className="cta-btn cta-outline"
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Terminal */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <span className="terminal-title">hassan@cloud-engineer:~</span>
            </div>
            <div className="terminal-body" ref={terminalRef}>
              <TerminalLines />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="scroll-line" />
        <span>Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;

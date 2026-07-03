import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import ResumeModal from './ResumeModal';

// ── Particle canvas ──────────────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Generate stars
    const stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.3,
      alpha: Math.random(),
      speed: Math.random() * 0.004 + 0.002,
      drift: (Math.random() - 0.5) * 0.15,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        s.alpha += s.speed;
        if (s.alpha > 1 || s.alpha < 0) s.speed *= -1;
        s.x += s.drift;
        if (s.x < 0) s.x = canvas.width;
        if (s.x > canvas.width) s.x = 0;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 229, 255, ${s.alpha * 0.7})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}

// ── Typing animation ─────────────────────────────────────────────
function TypingText({ words }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    let timeout;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, words]);

  return (
    <span className="text-gradient">
      {displayed}
      <span className="cursor-blink text-[#00E5FF]">|</span>
    </span>
  );
}

// ── Hero ─────────────────────────────────────────────────────────
export default function Hero({ profile }) {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden section-padding pt-20">
        {/* Particle stars */}
        <ParticleCanvas />

        {/* Background orbs */}
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#00E5FF]/10 blur-[120px] pointer-events-none -top-32 -left-32 z-0" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#7C3AED]/10 blur-[100px] pointer-events-none z-0" />

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-[#00E5FF] text-lg font-medium mb-4"
              >
                Hi, I'm {profile.name} 👋
              </motion.p>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <TypingText words={profile.taglines} />
              </h1>

              <p className="text-gray-400 text-lg max-w-lg mb-8 leading-relaxed">
                {profile.heroDescription}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a href="#projects" className="btn-primary inline-flex items-center gap-2">
                  View My Work <ArrowRight size={18} />
                </a>
                <button
                  onClick={() => setResumeOpen(true)}
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <Download size={18} /> Resume
                </button>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-4">
                <a href={profile.github} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-[#00E5FF] hover:border-[#00E5FF]/30 transition-all">
                  <FaGithub size={20} />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-[#00E5FF] hover:border-[#00E5FF]/30 transition-all">
                  <FaLinkedinIn size={20} />
                </a>
                <a href={profile.twitter} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-[#00E5FF] hover:border-[#00E5FF]/30 transition-all">
                  <FaTwitter size={20} />
                </a>
                <span className="flex items-center gap-2 text-gray-500 text-sm ml-2">
                  <MapPin size={14} /> {profile.location}
                </span>
              </div>
            </motion.div>

            {/* Right — avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-[340px] h-[340px] md:w-[440px] md:h-[440px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/20 to-[#7C3AED]/20 rounded-full blur-3xl" />
                <div className="absolute inset-8 rounded-3xl glass-card overflow-hidden flex items-center justify-center">
                  <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
                </div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  className="absolute -bottom-4 -left-4 glass p-3 rounded-xl shadow-lg shadow-[#00E5FF]/10"
                >
                  <div className="flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-gray-300 font-medium">Available for work</span>
                  </div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                  className="absolute -top-4 -right-4 glass p-3 rounded-xl shadow-lg shadow-[#7C3AED]/10"
                >
                  <div className="text-sm text-gray-300 font-medium">⚡ 3+ Years Exp.</div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {profile.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 z-10">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#00E5FF]/50 to-transparent" />
        </div>
      </section>

      {/* Resume modal */}
      {resumeOpen && <ResumeModal url={profile.resumeUrl} onClose={() => setResumeOpen(false)} />}
    </>
  );
}

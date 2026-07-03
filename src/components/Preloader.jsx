import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Letter({ char, delay, color, shadowColor }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 60, rotateX: -90, scale: 0.5 }}
      animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      transition={{ delay, duration: 0.7, type: 'spring', stiffness: 120, damping: 12 }}
      style={{
        display: 'inline-block',
        fontSize: 'clamp(7rem, 18vw, 11rem)',
        fontWeight: 900,
        fontFamily: '"Arial Black", Impact, sans-serif',
        lineHeight: 1,
        color,
        textShadow: [
          `0 2px 0 ${shadowColor}cc`,
          `0 4px 0 ${shadowColor}99`,
          `0 6px 0 ${shadowColor}66`,
          `0 8px 0 ${shadowColor}44`,
          `0 12px 20px ${shadowColor}88`,
          `0 0 60px ${color}66`,
        ].join(', '),
        filter: `drop-shadow(0 0 24px ${color}99)`,
        transformStyle: 'preserve-3d',
        perspective: '600px',
        letterSpacing: '-0.02em',
      }}
    >
      {char}
    </motion.span>
  );
}

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center"
          style={{ perspective: '800px' }}
        >
          {/* Spotlight glow behind letters */}
          <div
            style={{
              position: 'absolute',
              width: '500px',
              height: '300px',
              background: 'radial-gradient(ellipse at center, #00E5FF18 0%, #7C3AED12 50%, transparent 70%)',
              filter: 'blur(40px)',
              pointerEvents: 'none',
            }}
          />

          {/* KP letters */}
          <div style={{ display: 'flex', gap: '0.15em', alignItems: 'center', transformStyle: 'preserve-3d' }}>
            <Letter char="K" delay={0.1} color="#00E5FF" shadowColor="#0099bb" />
            <Letter char="P" delay={0.35} color="#7C3AED" shadowColor="#4a1f8a" />
          </div>

          {/* Divider line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5, ease: 'easeOut' }}
            style={{
              marginTop: '0.5rem',
              width: '180px',
              height: '3px',
              background: 'linear-gradient(90deg, #00E5FF, #7C3AED)',
              borderRadius: '9999px',
              boxShadow: '0 0 16px #00E5FF88, 0 0 32px #7C3AED66',
            }}
          />

          {/* Loading bar */}
          <div style={{ marginTop: '2rem', width: '160px', height: '2px', background: 'rgba(255,255,255,0.08)', borderRadius: '9999px', overflow: 'hidden' }}>
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.6, duration: 1.8, ease: 'easeInOut' }}
              style={{ height: '100%', background: 'linear-gradient(90deg, #00E5FF, #7C3AED)' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

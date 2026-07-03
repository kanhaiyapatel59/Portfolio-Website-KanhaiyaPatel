import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Navbar({ name }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      // Scrolled state for glass effect
      setScrolled(window.scrollY > 20);

      // Scroll progress bar
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);

      // Active section detection
      const sections = navLinks.map((l) => document.getElementById(l.toLowerCase()));
      let current = '';
      sections.forEach((sec) => {
        if (sec && window.scrollY >= sec.offsetTop - 120) {
          current = sec.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      {/* Scroll progress bar */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] transition-all duration-100 z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            {/* Icon mark — geometric K monogram inspired by design.com style */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="8" fill="url(#logo-grad)"/>
              <path d="M9 8h3.2v6.8l5.6-6.8H21l-6 7.2L21.4 24H18l-5.8-7.6V24H9V8z" fill="#050505"/>
              <defs>
                <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00E5FF"/>
                  <stop offset="1" stopColor="#7C3AED"/>
                </linearGradient>
              </defs>
            </svg>
            {/* Wordmark */}
            <span className="hidden sm:flex items-baseline gap-0">
              <span className="font-bold text-lg tracking-tight text-white">{name.split(' ')[0]}</span>
              {name.split(' ')[1] && (
                <span className="font-bold text-lg tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] ml-1.5">{name.split(' ')[1]}</span>
              )}
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((item) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-[#00E5FF] bg-[#00E5FF]/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00E5FF]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA */}
          <a href="#contact" className="hidden md:inline-flex btn-primary text-sm px-5 py-2">
            Hire Me
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-[#050505]/95 backdrop-blur-xl" />
          <div className="relative flex flex-col items-center justify-center h-full gap-6">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className={`text-2xl font-semibold transition-colors ${
                  activeSection === item.toLowerCase() ? 'text-[#00E5FF]' : 'text-gray-300 hover:text-[#00E5FF]'
                }`}
              >
                {item}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-4">
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

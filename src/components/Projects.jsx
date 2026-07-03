import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

function TiltCard({ children, className }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const card = ref.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)';
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ transition: 'transform 0.15s ease', transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
}

export default function Projects({ projects }) {
  return (
    <section id="projects" className="py-24 section-padding relative">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Projects"
          title="Featured Work"
          description="A selection of projects that showcase my skills and problem-solving approach."
        />

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.1 }}
            >
              <TiltCard className="glass-card glow-border overflow-hidden group">
                <div className="grid lg:grid-cols-[2fr_3fr] gap-0">
                  {/* Image */}
                  <div className="relative h-[250px] lg:h-auto overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111]/80 hidden lg:block" />
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8 flex flex-col justify-center">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-[#00E5FF] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-5">{project.description}</p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-6">
                      {project.highlights.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/10 text-[#00E5FF]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 btn-primary text-sm px-4 py-2"
                      >
                        <ExternalLink size={15} /> Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 btn-secondary text-sm px-4 py-2"
                      >
                        <FaGithub size={15} /> GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

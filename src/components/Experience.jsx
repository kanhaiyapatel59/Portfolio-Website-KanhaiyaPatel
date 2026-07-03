import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function Experience({ timeline }) {
  return (
    <section id="experience" className="py-24 section-padding relative">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Experience"
          title="My Journey"
          description="The path that shaped my skills and perspective as a developer."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00E5FF]/50 via-[#7C3AED]/50 to-transparent md:-translate-x-px" />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex gap-6 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Icon dot */}
                <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00E5FF] to-[#7C3AED] flex items-center justify-center shadow-lg shadow-[#00E5FF]/20">
                    {item.type === 'experience'
                      ? <Briefcase size={18} className="text-[#050505]" />
                      : <GraduationCap size={18} className="text-[#050505]" />
                    }
                  </div>
                </div>

                {/* Card */}
                <div className={`flex-1 glass-card glow-border p-6 ml-4 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-[calc(50%+2rem)]' : 'md:ml-[calc(50%+2rem)]'
                }`}>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-[#00E5FF] mb-1">{item.type}</p>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-[#7C3AED] font-medium text-sm">{item.organization}</p>
                    </div>
                    <span className="shrink-0 text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-400">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

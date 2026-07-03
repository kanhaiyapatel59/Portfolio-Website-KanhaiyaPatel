import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function Certifications({ certifications }) {
  return (
    <section id="certifications" className="py-24 section-padding relative">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials"
          description="Verified learning milestones that back up the skills I bring to every project."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {certifications.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="glass-card glow-border p-5"
            >
              <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center mb-4">
                <BadgeCheck size={20} className="text-[#00E5FF]" />
              </div>
              <h3 className="text-sm font-semibold mb-1 leading-snug">{item.title}</h3>
              <p className="text-[#7C3AED] text-xs font-medium mb-3">{item.provider}</p>
              <span className="text-xs px-2 py-0.5 rounded-full border border-[#00E5FF]/20 bg-[#00E5FF]/5 text-[#00E5FF]">
                {item.year}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

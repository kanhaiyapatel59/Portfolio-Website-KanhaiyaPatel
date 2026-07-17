import { motion } from 'framer-motion';
import { Trophy, Star, Zap } from 'lucide-react';
import SectionHeading from './SectionHeading';

const icons = [Trophy, Star, Zap];

export default function Achievements({ achievements }) {
  return (
    <section id="achievements" className="py-24 section-padding relative">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Achievements"
          title="Recognition & Impact"
          description="Milestones that reflect the quality and impact of my work."
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {achievements.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card glow-border p-6 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#00E5FF] to-[#7C3AED] flex items-center justify-center shadow-lg shadow-[#00E5FF]/20">
                  <Icon size={22} className="text-[#050505]" />
                </div>
                {item.image && (
                  <img src={item.image} alt={item.title} className="w-full h-36 object-cover rounded-lg mb-4" />
                )}
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.detail}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

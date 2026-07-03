import { motion } from 'framer-motion';
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiDocker, SiGit,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

const iconMap = {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql,
  SiAmazonwebservices: FaAws,
  SiDocker, SiGit,
};

const categories = ['All', 'Language', 'Frontend', 'Styling', 'Backend', 'Database', 'Cloud', 'DevOps', 'Tools'];

export default function Skills({ skills }) {
  return (
    <section id="skills" className="py-24 section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#7C3AED]/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <SectionHeading
          eyebrow="Skills"
          title="My Tech Stack"
          description="Technologies I work with to build modern, scalable applications."
        />

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon];
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -6, scale: 1.05 }}
                className="glass-card glow-border p-5 flex flex-col items-center gap-3 cursor-pointer group"
              >
                {Icon && (
                  <Icon
                    size={36}
                    style={{ color: skill.color }}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                )}
                <span className="text-xs text-gray-400 font-medium text-center group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

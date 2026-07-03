import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <p className="text-[#00E5FF] text-sm font-medium uppercase tracking-widest mb-3">{eyebrow}</p>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
      {description && <p className="text-gray-400 text-lg max-w-2xl mx-auto">{description}</p>}
    </motion.div>
  );
}

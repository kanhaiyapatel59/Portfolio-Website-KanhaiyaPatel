import { motion } from 'framer-motion';
import { MapPin, Mail, Download } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function About({ profile }) {
  return (
    <section id="about" className="py-24 section-padding relative">
      <div className="container mx-auto">
        <SectionHeading eyebrow="About Me" title="Who I Am" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/30 to-[#7C3AED]/30 rounded-3xl blur-2xl" />
            <div className="relative glass-card h-full flex items-center justify-center overflow-hidden rounded-3xl">
              <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover rounded-3xl" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-2">{profile.name}</h3>
            <p className="text-[#00E5FF] font-medium mb-6">{profile.title}</p>
            <p className="text-gray-400 leading-relaxed mb-6">{profile.aboutDescription}</p>
            <p className="text-gray-400 leading-relaxed mb-8">{profile.aboutBody}</p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin size={16} className="text-[#00E5FF]" />
                {profile.location}
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={16} className="text-[#00E5FF]" />
                {profile.email}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href={`mailto:${profile.email}`} className="btn-primary inline-flex items-center gap-2">
                <Mail size={16} /> Get In Touch
              </a>
              <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn-secondary inline-flex items-center gap-2">
                <Download size={16} /> Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

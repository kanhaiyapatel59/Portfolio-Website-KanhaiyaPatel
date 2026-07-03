import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import Toast from './Toast';
import { useToast } from '../hooks/useToast';

export default function Contact({ profile }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const { toasts, add, remove } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate async send — wire to EmailJS / Formspree / your API here
    await new Promise((r) => setTimeout(r, 1200));

    const success = true; // flip to false to test error toast
    if (success) {
      add("Message sent! I'll get back to you soon 🚀", 'success');
      setForm({ name: '', email: '', message: '' });
    } else {
      add('Something went wrong. Please try again.', 'error');
    }
    setLoading(false);
  };

  return (
    <>
      <section id="contact" className="py-24 section-padding relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00E5FF]/5 blur-[120px] pointer-events-none" />

        <div className="container mx-auto relative z-10">
          <SectionHeading
            eyebrow="Contact"
            title={profile.contactTitle}
            description={profile.contactDescription}
          />

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-4 mb-8">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-[#00E5FF]/20 transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center">
                    <Mail size={18} className="text-[#00E5FF]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
                    <p className="text-sm font-medium group-hover:text-[#00E5FF] transition-colors">{profile.email}</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 glass-card rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#7C3AED]/10 flex items-center justify-center">
                    <MapPin size={18} className="text-[#7C3AED]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Location</p>
                    <p className="text-sm font-medium">{profile.location}</p>
                  </div>
                </div>
                {profile.phone && (
                  <div className="flex items-center gap-4 p-4 glass-card rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center">
                      <Phone size={18} className="text-[#00E5FF]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Phone</p>
                      <p className="text-sm font-medium">{profile.phone}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                <a href={profile.github} target="_blank" rel="noreferrer" className="p-3 glass-card rounded-xl text-gray-400 hover:text-[#00E5FF] hover:border-[#00E5FF]/20 transition-all">
                  <FaGithub size={20} />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="p-3 glass-card rounded-xl text-gray-400 hover:text-[#00E5FF] hover:border-[#00E5FF]/20 transition-all">
                  <FaLinkedinIn size={20} />
                </a>
                <a href={profile.twitter} target="_blank" rel="noreferrer" className="p-3 glass-card rounded-xl text-gray-400 hover:text-[#00E5FF] hover:border-[#00E5FF]/20 transition-all">
                  <FaTwitter size={20} />
                </a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="glass-card p-8 space-y-5"
            >
              <div>
                <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00E5FF]/50 focus:ring-1 focus:ring-[#00E5FF]/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00E5FF]/50 focus:ring-1 focus:ring-[#00E5FF]/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00E5FF]/50 focus:ring-1 focus:ring-[#00E5FF]/50 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#050505]/30 border-t-[#050505] rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <><Send size={16} /> Send Message</>
                )}
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      <Toast toasts={toasts} remove={remove} />
    </>
  );
}

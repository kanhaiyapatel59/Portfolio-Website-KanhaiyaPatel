import { Heart } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function Footer({ profile }) {
  return (
    <footer className="border-t border-white/5 bg-[#050505]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>© {new Date().getFullYear()} {profile.name}.</span>
            <span className="flex items-center gap-1">
              Built with <Heart size={12} className="text-[#00E5FF] mx-1" /> using React & Tailwind
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#00E5FF] transition-colors">
              <FaGithub size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#00E5FF] transition-colors">
              <FaLinkedinIn size={18} />
            </a>
            <a href={profile.twitter} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#00E5FF] transition-colors">
              <FaTwitter size={18} />
            </a>
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors text-sm">
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

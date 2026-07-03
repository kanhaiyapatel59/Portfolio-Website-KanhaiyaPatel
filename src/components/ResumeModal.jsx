import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink } from 'lucide-react';

export default function ResumeModal({ url, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        key="resume-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[90] flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

        {/* Modal */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          className="relative z-10 w-full max-w-3xl bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
            <p className="font-semibold text-white">Resume Preview</p>
            <div className="flex items-center gap-3">
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#00E5FF] hover:underline"
              >
                <ExternalLink size={14} /> Open in new tab
              </a>
              <a
                href={url}
                download
                className="btn-primary inline-flex items-center gap-2 text-sm px-4 py-2"
              >
                <Download size={14} /> Download
              </a>
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* PDF iframe */}
          <div className="w-full h-[70vh] bg-[#0a0a0a]">
            <iframe
              src={`${url}#toolbar=0`}
              title="Resume"
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

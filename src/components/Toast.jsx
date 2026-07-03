import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, X } from 'lucide-react';

export default function Toast({ toasts, remove }) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] flex flex-col gap-3 items-center pointer-events-none">
      <AnimatePresence>
        {toasts.map((t) => (
          <ToastItem key={t.id} toast={t} remove={remove} />
        ))}
      </AnimatePresence>
    </div>
  );
}

function ToastItem({ toast, remove }) {
  useEffect(() => {
    const timer = setTimeout(() => remove(toast.id), toast.duration ?? 4000);
    return () => clearTimeout(timer);
  }, [toast, remove]);

  const isSuccess = toast.type === 'success';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={`pointer-events-auto flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl border backdrop-blur-xl text-sm font-medium min-w-[280px] max-w-sm ${
        isSuccess
          ? 'bg-[#050505]/90 border-[#00E5FF]/30 text-white shadow-[#00E5FF]/10'
          : 'bg-[#050505]/90 border-red-500/30 text-white shadow-red-500/10'
      }`}
    >
      {isSuccess
        ? <CheckCircle size={18} className="text-[#00E5FF] shrink-0" />
        : <XCircle size={18} className="text-red-400 shrink-0" />
      }
      <span className="flex-1">{toast.message}</span>
      <button
        onClick={() => remove(toast.id)}
        className="text-gray-500 hover:text-white transition-colors ml-1"
      >
        <X size={15} />
      </button>
    </motion.div>
  );
}

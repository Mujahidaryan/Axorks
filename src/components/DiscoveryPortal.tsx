import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface DiscoveryPortalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiscoveryPortal: React.FC<DiscoveryPortalProps> = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      document.body.style.overflow = 'hidden';
    } else {
      setTimeout(() => setMounted(false), 300); // match transition
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!mounted && !isOpen) return null;

  const calLink = "https://cal.com/axorks-discovery";

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${
      isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
    }`}>
      <div 
        className="absolute inset-0 bg-[#08080A]/80 backdrop-blur-md"
        onClick={onClose}
      />
      
      <div className={`relative w-full max-w-4xl bg-[#08080A] rounded-3xl overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)] border border-[rgba(146,157,167,0.14)] flex flex-col transition-all duration-300 transform ${
        isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
      }`} style={{ height: '85vh', maxHeight: '800px' }}>
        
        <div className="flex items-center justify-between p-4 border-b border-[rgba(146,157,167,0.14)] bg-[#121214] shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-mono-code text-[10px] uppercase tracking-widest text-[#E8B923] font-bold">
              Discovery Call
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-[#A1A1AA] hover:text-[#F4F4F5] hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 w-full relative bg-[#08080A] overflow-hidden">
          <iframe 
            src={calLink} 
            className="w-full h-full border-none"
            title="Book Discovery Call"
            loading="lazy"
          />
        </div>

      </div>
    </div>
  );
};

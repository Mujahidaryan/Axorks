import React, { useEffect } from 'react';
import { X, Calendar, ExternalLink, ShieldCheck, Clock } from 'lucide-react';
import { useCal } from '../context/CalContext';

export const CalModal: React.FC = () => {
  const { isOpen, closeCal, calLink } = useCal();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeCal();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeCal]);

  if (!isOpen) return null;

  // Format cal link for iframe embed with dark theme
  const embedUrl = calLink.includes('?') 
    ? `${calLink}&embed=true&theme=dark` 
    : `${calLink}?embed=true&theme=dark`;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cal-modal-title"
      onClick={closeCal}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border border-white/15 bg-[#060913] text-[#F8FAFC] shadow-2xl shadow-black/80 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 sm:px-6 sm:py-5 border-b border-white/10 bg-gradient-to-r from-[#0B132B] via-[#060913] to-[#060913]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20 text-[#F5C761]">
              <Calendar className="h-5 w-5" />
            </div>
            <div>
              <h2 id="cal-modal-title" className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2">
                Book 20-Min Technical Discovery Session
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Direct consultation with Muhammad Mujahid, Chief Systems Architect
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a 
              href={calLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors"
              title="Open in new window"
            >
              <span>New Window</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <button
              onClick={closeCal}
              className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 hover:text-white hover:bg-white/10 border border-white/10 transition-colors"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Micro-guarantee banner */}
        <div className="px-5 py-2.5 sm:px-6 bg-slate-900/60 border-b border-white/5 flex flex-wrap items-center gap-4 text-xs text-slate-300">
          <span className="flex items-center gap-1.5 text-amber-400 font-medium">
            <Clock className="h-3.5 w-3.5" />
            24-Hour Spec & Fixed-Price Proposal
          </span>
          <span className="hidden md:inline text-slate-600">•</span>
          <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <ShieldCheck className="h-3.5 w-3.5" />
            Zero Obligation & 100% Confidential
          </span>
          <span className="hidden md:inline text-slate-600">•</span>
          <span className="text-slate-400">
            Projects start from $1,000
          </span>
        </div>

        {/* Cal.com Embed Container */}
        <div className="relative flex-1 min-h-[500px] sm:min-h-[580px] w-full bg-[#060913] overflow-hidden">
          <iframe
            src={embedUrl}
            title="Book Discovery Call with Axorks"
            className="w-full h-full min-h-[520px] sm:min-h-[600px] border-0"
            allow="camera; microphone; autoplay; fullscreen"
          />
        </div>
      </div>
    </div>
  );
};

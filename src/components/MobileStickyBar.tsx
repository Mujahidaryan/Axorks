import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';

export const MobileStickyBar: React.FC = () => {
  return (
    <aside 
      aria-label="Quick Actions"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-[#060A16]/92 backdrop-blur-2xl border-t border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.7)]"
      style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom, 0px))' }}
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        <a
          href="https://wa.me/923141030223?text=Hi%20Axorks%20team,%20I'd%20like%20to%20discuss%20a%20project%20and%20fixed-price%20proposal."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-headline text-xs font-bold uppercase tracking-wider transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
          </span>
          <MessageSquare className="w-3.5 h-3.5 text-[#10B981]" />
          <span>WhatsApp</span>
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@axorks.com,muhammad.mujahid@axorks.com&su=Discovery%20Call%20Request%20-%20Axorks"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-gradient-to-r from-[#F5C761] to-[#D97706] text-[#2A1800] font-headline text-xs font-bold uppercase tracking-wider shadow-md active:scale-95 transition-transform"
        >
          <span>Book Call</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </aside>
  );
};

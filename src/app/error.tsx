'use client';

import { useEffect } from 'react';
import { RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled Application Error:', error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="relative overflow-hidden rounded-3xl border border-red-500/30 bg-obsidian-raised p-8 sm:p-12 max-w-md w-full shadow-obsidian-md">
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
        <span className="font-mono text-xs font-semibold text-red-400 uppercase tracking-wider">
          SYSTEM_EXCEPTION_ENCOUNTERED
        </span>
        <h1 className="mt-3 font-serif text-3xl font-bold text-paper">
          Execution Error
        </h1>
        <p className="mt-3 text-xs leading-relaxed text-steel">
          An unexpected error occurred during execution: {error.message || 'Internal boundary failure.'}
        </p>
        <div className="mt-6 pt-4 border-t border-white/10">
          <button
            onClick={() => reset()}
            className="btn btn-gold inline-flex items-center gap-2"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            Reset State & Retry
          </button>
        </div>
      </div>
    </div>
  );
}

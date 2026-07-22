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
      <div className="schematic-bracket border border-red-500/30 bg-obsidian-raised p-8 sm:p-12 max-w-md w-full">
        <span className="font-mono text-xs font-semibold text-red-400 uppercase tracking-wider">
          SYSTEM_EXCEPTION_ENCOUNTERED
        </span>
        <h1 className="mt-3 font-serif text-3xl font-bold text-paper">
          Execution Error
        </h1>
        <p className="mt-3 text-xs leading-relaxed text-steel">
          An unexpected error occurred during execution: {error.message || 'Internal boundary failure.'}
        </p>
        <div className="mt-6 pt-4 border-t border-obsidian-border">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 rounded bg-signal-blue px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-paper hover:bg-signal-blue-hover transition-colors"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            Reset State & Retry
          </button>
        </div>
      </div>
    </div>
  );
}

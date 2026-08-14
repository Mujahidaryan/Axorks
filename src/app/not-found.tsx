import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-obsidian-raised p-8 sm:p-12 max-w-md w-full shadow-obsidian-md">
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
        <span className="font-mono text-xs font-semibold text-gold uppercase tracking-wider">
          ERROR 404 — SYSTEM_PATH_NOT_FOUND
        </span>
        <h1 className="mt-3 font-serif text-3xl font-bold text-paper">
          Page Not Found
        </h1>
        <p className="mt-3 text-xs leading-relaxed text-steel">
          The requested system route does not exist or has been relocated within our architecture.
        </p>
        <div className="mt-6 pt-4 border-t border-white/10">
          <Link
            href="/"
            className="btn btn-gold inline-flex items-center gap-2"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Return to Command Center
          </Link>
        </div>
      </div>
    </div>
  );
}

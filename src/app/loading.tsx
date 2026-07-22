export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-4">
      <div className="relative h-10 w-10">
        <div className="absolute inset-0 rounded-full border-2 border-obsidian-border" />
        <div className="absolute inset-0 rounded-full border-2 border-gold border-t-transparent animate-spin" />
      </div>
      <span className="font-mono text-xs text-steel uppercase tracking-widest">
        Initializing System View...
      </span>
    </div>
  );
}

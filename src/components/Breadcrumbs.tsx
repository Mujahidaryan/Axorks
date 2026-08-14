import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { SITE_URL } from '@/lib/config';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_URL,
    },
    ...items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 2,
      name: item.label,
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: schemaItems,
  };

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] text-steel">
        <li>
          <Link
            href="/"
            className="group flex items-center gap-1.5 rounded-full border border-white/10 bg-obsidian-raised/70 px-3 py-1.5 transition-all duration-300 hover:border-gold/40 hover:shadow-[0_0_12px_rgba(201,162,75,0.12)]"
          >
            <Home className="h-3.5 w-3.5 text-gold transition-transform duration-300 group-hover:-translate-y-px" />
            <span className="text-paper/70 transition-colors group-hover:text-paper">Home</span>
          </Link>
        </li>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center gap-1.5">
              <ChevronRight className="h-3 w-3 text-gold/50" />
              {isLast || !item.href ? (
                <span
                  className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1.5 font-semibold text-gold shadow-[0_2px_10px_rgba(201,162,75,0.08)]"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="rounded-full border border-transparent bg-obsidian-raised/70 px-3 py-1.5 text-paper/70 transition-all duration-300 hover:border-white/15 hover:text-paper"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
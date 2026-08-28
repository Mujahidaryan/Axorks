import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-12">
          {/* Brand */}
          <div className="space-y-3 md:col-span-1">
            <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
              Axorks
            </Link>
            <p className="text-sm leading-relaxed text-slate-500">
              Custom software development and technical solutions for modern businesses.
            </p>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">Company</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services" className="text-slate-600 transition-colors hover:text-slate-900">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-slate-600 transition-colors hover:text-slate-900">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-slate-600 transition-colors hover:text-slate-900">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-600 transition-colors hover:text-slate-900">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">Legal</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/privacy" className="text-slate-600 transition-colors hover:text-slate-900">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-600 transition-colors hover:text-slate-900">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">Contact</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:hello@axorks.com"
                  className="text-slate-600 transition-colors hover:text-slate-900"
                >
                  hello@axorks.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 Axorks Pvt Limited. All rights reserved.</p>
          <Link
            href="/careers"
            className="text-sm text-slate-500 transition-colors hover:text-slate-900"
          >
            Careers
          </Link>
        </div>
      </div>
    </footer>
  );
}
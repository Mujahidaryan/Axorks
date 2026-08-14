'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send, CheckCircle2, AlertCircle, Phone, FileText, PhoneCall } from 'lucide-react';
import { BUDGET_RANGES_USD } from '@/lib/pricing';

function ContactFormInner() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Web Applications & Custom Systems',
    budget: '$1,500 – $3,500',
    selectedTier: '',
    ctaMode: 'quote',
    message: '',
    company_website: '', // Honeypot field
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const services = [
    'Custom Website Development',
    'Web Applications & Custom Systems',
    'Mobile App Development',
    'AI Solutions & Automation',
    'Government & Enterprise Digital Solutions',
    'Maintenance & Support Retainer',
  ];

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    const tierParam = searchParams.get('tier');
    const ctaParam = searchParams.get('cta');

    if (serviceParam || tierParam || ctaParam) {
      setFormData((prev) => ({
        ...prev,
        service: serviceParam ? decodeURIComponent(serviceParam) : prev.service,
        selectedTier: tierParam ? decodeURIComponent(tierParam) : prev.selectedTier,
        ctaMode: ctaParam === 'discovery' ? 'discovery' : 'quote',
      }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const tierNote = formData.selectedTier ? ` [Tier Selected: ${formData.selectedTier}]` : '';
      const ctaTypeNote = formData.ctaMode === 'discovery' ? ' [Request Type: Book Discovery Call]' : ' [Request Type: Get Quick Quote]';
      const payload = {
        ...formData,
        message: `[Expected Budget: ${formData.budget}]${tierNote}${ctaTypeNote}\n\n${formData.message}`,
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit inquiry.');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Web Applications & Custom Systems',
        budget: '$1,500 – $3,500',
        selectedTier: '',
        ctaMode: 'quote',
        message: '',
        company_website: '',
      });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="glass-card-dark relative overflow-hidden rounded-3xl p-6 sm:p-8">
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-gold/30 via-gold to-gold/30" />
      <div className="border-b border-white/10 pb-5">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold">
            Project Initiation Protocol
          </span>
          {formData.selectedTier && (
            <span className="rounded-full border border-gold/40 bg-gold/15 px-3 py-1 font-mono text-[11px] font-bold text-gold">
              Tier: {formData.selectedTier}
            </span>
          )}
        </div>
        <h2 className="mt-2 font-serif text-2xl font-bold text-paper flex items-center gap-2">
          {formData.ctaMode === 'discovery' ? (
            <>
              <PhoneCall className="h-5 w-5 text-gold" />
              Book a Technical Discovery Call
            </>
          ) : (
            <>
              <FileText className="h-5 w-5 text-gold" />
              Request a Quick Project Quote
            </>
          )}
        </h2>
        <p className="mt-2 text-xs text-steel">
          Direct line to our founder &amp; engineering leads. Guaranteed response within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        {/* Honeypot field */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <label htmlFor="company_website">Do not fill this field</label>
          <input
            type="text"
            id="company_website"
            name="company_website"
            value={formData.company_website}
            onChange={(e) => setFormData({ ...formData, company_website: e.target.value })}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block font-mono text-xs font-medium text-paper">
              Full Name <span className="text-gold">*</span>
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="e.g. Alex Morgan"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-1.5 w-full rounded-xl border border-white/10 bg-obsidian/80 px-3.5 py-2.5 text-xs text-paper placeholder-steel/50 transition-all focus:border-indigo-400/60 focus:bg-obsidian focus:shadow-[0_0_0_3px_rgba(79,70,229,0.15)] focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-mono text-xs font-medium text-paper">
              Business Email <span className="text-gold">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="alex@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1.5 w-full rounded-xl border border-white/10 bg-obsidian/80 px-3.5 py-2.5 text-xs text-paper placeholder-steel/50 transition-all focus:border-indigo-400/60 focus:bg-obsidian focus:shadow-[0_0_0_3px_rgba(79,70,229,0.15)] focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block font-mono text-xs font-medium text-paper">
              Phone / WhatsApp <span className="text-steel/70">(Optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="mt-1.5 w-full rounded-xl border border-white/10 bg-obsidian/80 px-3.5 py-2.5 text-xs text-paper placeholder-steel/50 transition-all focus:border-indigo-400/60 focus:bg-obsidian focus:shadow-[0_0_0_3px_rgba(79,70,229,0.15)] focus:outline-none"
            />
          </div>

          {/* Service Selection */}
          <div>
            <label htmlFor="service" className="block font-mono text-xs font-medium text-paper">
              Required Service <span className="text-gold">*</span>
            </label>
            <select
              id="service"
              required
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="mt-1.5 w-full rounded-xl border border-white/10 bg-obsidian/80 px-3 py-2.5 text-xs text-paper transition-all focus:border-indigo-400/60 focus:shadow-[0_0_0_3px_rgba(79,70,229,0.15)] focus:outline-none"
            >
              {services.map((svc) => (
                <option key={svc} value={svc} className="bg-obsidian text-paper">
                  {svc}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Budget Selector */}
        <div>
          <label htmlFor="budget" className="block font-mono text-xs font-medium text-paper">
            Expected Project Investment Band <span className="text-gold">*</span>
          </label>
          <select
            id="budget"
            required
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="mt-1.5 w-full rounded-xl border border-gold/40 bg-obsidian/80 px-3 py-2.5 text-xs font-mono text-gold transition-all focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,162,75,0.15)] focus:outline-none"
          >
            {BUDGET_RANGES_USD.map((b) => (
              <option key={b} value={b} className="bg-obsidian text-paper">
                {b}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block font-mono text-xs font-medium text-paper">
            Project Scope &amp; System Details <span className="text-gold">*</span>
          </label>
          <textarea
            id="message"
            required
            rows={4}
            placeholder="Tell us about your core requirements, target features, expected timeline, or key technical goals..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="mt-1.5 w-full rounded-xl border border-white/10 bg-obsidian/80 px-3.5 py-2.5 text-xs text-paper placeholder-steel/50 transition-all focus:border-indigo-400/60 focus:bg-obsidian focus:shadow-[0_0_0_3px_rgba(79,70,229,0.15)] focus:outline-none"
          />
        </div>

        {/* Status Alerts */}
        {status === 'success' && (
          <div className="flex items-center gap-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 text-xs text-emerald-400">
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            <span>Inquiry received! Our founder will reach out to you within 24 hours.</span>
          </div>
        )}

        {status === 'error' && (
          <div className="flex items-center gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-xs text-red-400">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col items-center justify-between gap-4 pt-2 sm:flex-row">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn btn-primary flex w-full items-center justify-center gap-2 disabled:opacity-60 sm:w-auto"
          >
            {status === 'loading' ? (
              <span>Dispatching...</span>
            ) : (
              <>
                <span>{formData.ctaMode === 'discovery' ? 'Book Discovery Call' : 'Submit Quick Quote Inquiry'}</span>
                <Send className="h-3.5 w-3.5" />
              </>
            )}
          </button>

          <a
            href="https://wa.me/923141030223"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-5 py-3 font-mono text-xs font-semibold text-gold transition-colors hover:bg-gold/20 sm:w-auto"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>Instant WhatsApp Connect</span>
          </a>
        </div>
      </form>
    </div>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="p-8 font-mono text-xs text-steel">Loading contact protocol...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}

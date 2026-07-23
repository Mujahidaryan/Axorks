'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, DollarSign } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Web Applications & Custom Systems',
    budget: 'PKR 250,000 – 500,000',
    message: '',
    company_website: '', // Honeypot field
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const services = [
    'Website Development',
    'Web Applications & Custom Systems',
    'Mobile App Development',
    'AI Integration & Automation',
    'Government & Enterprise Digital Solutions',
    'Maintenance & Support Retainer',
  ];

  const budgetRanges = [
    'Under PKR 100,000',
    'PKR 100,000 – 250,000',
    'PKR 250,000 – 500,000',
    'PKR 500,000 – 1,500,000',
    'PKR 1,500,000+',
    'Custom Enterprise Quotation',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const payload = {
        ...formData,
        message: `[Expected Budget: ${formData.budget}]\n\n${formData.message}`,
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
        budget: 'PKR 250,000 – 500,000',
        message: '',
        company_website: '',
      });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 sm:p-8">
      <div className="border-b border-obsidian-border pb-4">
        <span className="font-mono text-xs text-gold uppercase tracking-wider">
          PROJECT_INITIATION_PROTOCOL
        </span>
        <h2 className="mt-1 font-serif text-2xl font-bold text-paper">
          Book a Technical Consultation
        </h2>
        <p className="mt-1 text-xs text-steel">
          Direct line to our founder & engineering leads. Guaranteed response within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        {/* Honeypot field (hidden visually) */}
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
              className="mt-1.5 w-full rounded border border-obsidian-border bg-obsidian px-3.5 py-2.5 text-xs text-paper placeholder-steel/50 transition-colors focus:border-signal-blue focus:outline-none"
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
              className="mt-1.5 w-full rounded border border-obsidian-border bg-obsidian px-3.5 py-2.5 text-xs text-paper placeholder-steel/50 transition-colors focus:border-signal-blue focus:outline-none"
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
              placeholder="+92 314 1030223"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="mt-1.5 w-full rounded border border-obsidian-border bg-obsidian px-3.5 py-2.5 text-xs text-paper placeholder-steel/50 transition-colors focus:border-signal-blue focus:outline-none"
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
              className="mt-1.5 w-full rounded border border-obsidian-border bg-obsidian px-3 py-2.5 text-xs text-paper transition-colors focus:border-signal-blue focus:outline-none"
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
            className="mt-1.5 w-full rounded border border-gold/40 bg-obsidian px-3 py-2.5 text-xs font-mono text-gold transition-colors focus:border-signal-blue focus:outline-none"
          >
            {budgetRanges.map((b) => (
              <option key={b} value={b} className="bg-obsidian text-paper">
                {b}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block font-mono text-xs font-medium text-paper">
            Project Scope & System Details <span className="text-gold">*</span>
          </label>
          <textarea
            id="message"
            required
            rows={4}
            placeholder="Tell us about what you want to build, key features, target timeline, or current technical bottlenecks..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="mt-1.5 w-full rounded border border-obsidian-border bg-obsidian px-3.5 py-2.5 text-xs text-paper placeholder-steel/50 transition-colors focus:border-signal-blue focus:outline-none"
          />
        </div>

        {/* Status Alerts */}
        {status === 'success' && (
          <div className="flex items-center gap-2.5 rounded border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs text-emerald-400">
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            <span>Inquiry received! Our founder will reach out to you within 24 hours.</span>
          </div>
        )}

        {status === 'error' && (
          <div className="flex items-center gap-2.5 rounded border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-400">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col items-center justify-between gap-4 pt-2 sm:flex-row">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="flex w-full items-center justify-center gap-2 rounded bg-signal-blue px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-paper transition-all hover:bg-signal-blue-hover disabled:opacity-50 sm:w-auto"
          >
            {status === 'loading' ? (
              <span>Dispatching...</span>
            ) : (
              <>
                <span>Submit Inquiry</span>
                <Send className="h-3.5 w-3.5" />
              </>
            )}
          </button>

          <a
            href="https://wa.me/923141030223"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded border border-gold/40 bg-gold/10 px-5 py-3 font-mono text-xs font-semibold text-gold transition-colors hover:bg-gold/20 sm:w-auto"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>Instant WhatsApp Connect</span>
          </a>
        </div>
      </form>
    </div>
  );
}

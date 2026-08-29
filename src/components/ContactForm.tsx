'use client';

import { useState, Suspense } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageCircle } from 'lucide-react';

function ContactFormInner() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    company_website: '', // Honeypot field
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        service: 'Discovery Call',
        message: formData.message.trim(),
        company_website: formData.company_website,
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message. Please try again.');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        company_website: '',
      });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="rounded-[12px] border border-slate-200/90 bg-white p-6 sm:p-9 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.08)] text-slate-900">
      <div className="border-b border-slate-100 pb-5">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Book a free discovery call
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Tell us about your project. We&apos;ll get back to you within 24 hours.
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
            <label htmlFor="name" className="block text-sm font-semibold text-slate-800">
              Name <span className="text-blue-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="Your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-1.5 w-full rounded-[12px] border border-slate-200 bg-[#FAF9F6] px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-[#C9A24B] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C9A24B]"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-800">
              Email <span className="text-blue-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="you@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1.5 w-full rounded-[12px] border border-slate-200 bg-[#FAF9F6] px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-[#C9A24B] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C9A24B]"
            />
          </div>
        </div>

        {/* Phone / WhatsApp */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-800">
            Phone / WhatsApp <span className="font-normal text-slate-400">(Optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="mt-1.5 w-full rounded-[12px] border border-slate-200 bg-[#FAF9F6] px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-[#C9A24B] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C9A24B]"
          />
        </div>

        {/* What do you need help with? */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-slate-800">
            What do you need help with? <span className="text-blue-600">*</span>
          </label>
          <textarea
            id="message"
            required
            rows={4}
            placeholder="Tell us about what you want to build or improve..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="mt-1.5 w-full rounded-[12px] border border-slate-200 bg-[#FAF9F6] px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-[#C9A24B] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C9A24B]"
          />
        </div>

        {/* Status Alerts */}
        {status === 'success' && (
          <div className="flex items-center gap-3 rounded-[12px] border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800 animate-fade-in">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
            <p className="font-semibold">Thanks! We&apos;ll be in touch within 24 hours.</p>
          </div>
        )}

        {status === 'error' && (
          <div className="flex items-center gap-3 rounded-[12px] border border-red-200 bg-red-50 p-4 text-sm text-red-800 animate-fade-in">
            <AlertCircle className="h-5 w-5 shrink-0 text-red-600" />
            <p className="font-semibold">{errorMessage}</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col items-center justify-between gap-4 pt-2 sm:flex-row">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-[12px] bg-gradient-to-r from-[#DFBD6C] via-[#C9A24B] to-[#B88E2F] px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_4px_16px_rgba(201,162,75,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_22px_rgba(201,162,75,0.4)] disabled:opacity-60 sm:w-auto"
          >
            <span>{status === 'loading' ? 'Sending...' : 'Send message'}</span>
            <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          <a
            href="https://wa.me/923141030223"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-[12px] border border-slate-200/90 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50 hover:text-slate-900 sm:w-auto"
          >
            <MessageCircle className="h-4 w-4 text-emerald-600" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </form>
    </div>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-sm text-slate-500">Loading form...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}

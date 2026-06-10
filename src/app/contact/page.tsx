"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-accent text-sm font-medium tracking-wide uppercase mb-4">
              Get in Touch
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Together</span>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Start with a free 30-minute Technology Assessment. No pitch, no
              pressure — just an honest conversation about what&apos;s possible
              for your business.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-accent"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-text-primary font-medium">Email</p>
                  <p className="text-text-secondary text-sm">
                    hello@beyondreality.dev
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-accent"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-text-primary font-medium">Location</p>
                  <p className="text-text-secondary text-sm">
                    Regional — available for remote & on-site engagements
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-accent"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div>
                  <p className="text-text-primary font-medium">Response Time</p>
                  <p className="text-text-secondary text-sm">
                    Usually within 2 hours during business days
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-secondary p-8 rounded-2xl border border-border">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-accent"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Message Sent!
                </h3>
                <p className="text-text-secondary">
                  We&apos;ll be in touch within 2 hours during business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-text-primary text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-primary border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-text-primary text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-primary border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-text-primary text-sm font-medium mb-2">
                    What can we help with?
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 bg-primary border border-border rounded-lg text-text-primary focus:outline-none focus:border-accent transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="ai">AI-Powered Solutions</option>
                    <option value="dev">Custom Software Development</option>
                    <option value="consulting">Technology Consulting</option>
                    <option value="other">Something else</option>
                  </select>
                </div>
                <div>
                  <label className="block text-text-primary text-sm font-medium mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-primary border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="What problem are you trying to solve? What's your timeline?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3.5 bg-accent hover:bg-accent-glow text-white font-medium rounded-lg transition-colors"
                >
                  Send Message
                </button>
                <p className="text-text-muted text-xs text-center">
                  Or book directly:{" "}
                  <a href="#" className="text-accent hover:underline">
                    Schedule on Calendly
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

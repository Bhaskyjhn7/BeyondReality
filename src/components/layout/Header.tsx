"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/services/ai-solutions", label: "AI Solutions" },
  { href: "/services/custom-development", label: "Custom Development" },
  { href: "/services/technology-consulting", label: "Consulting" },
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-white font-bold text-sm">BR</span>
          </div>
          <span className="text-text-primary font-semibold text-lg hidden sm:block">
            Beyond Reality
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-secondary hover:text-text-primary transition-colors text-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline-flex px-4 py-2 bg-accent hover:bg-accent-glow text-white text-sm font-medium rounded-lg transition-colors"
          >
            Book a Call
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-text-secondary hover:text-text-primary"
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-secondary border-t border-border">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-text-secondary hover:text-text-primary transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-4 py-2 bg-accent text-white text-sm font-medium rounded-lg text-center"
            >
              Book a Call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

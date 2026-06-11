"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/services/ai-solutions", label: "AI Solutions" },
  { href: "/services/custom-development", label: "Development" },
  { href: "/services/technology-consulting", label: "Consulting" },
  { href: "/case-studies", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Insights" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-18 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logos/br-logo-canva.svg"
            alt="Beyond Reality"
            width={48}
            height={48}
            className="h-10 w-auto"
          />
          <div className="hidden sm:block">
            <span className="text-text-primary font-semibold text-lg tracking-tight">
              Beyond Reality
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-text-secondary hover:text-text-primary hover:bg-surface rounded-lg transition-all text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex btn-primary text-sm !py-2.5 !px-5"
          >
            Get Started
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden glass border-t border-border">
          <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-surface rounded-lg transition-all font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 btn-primary text-center text-sm"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

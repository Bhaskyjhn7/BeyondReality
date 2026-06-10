import Link from "next/link";

const footerLinks = {
  services: [
    { href: "/services/ai-solutions", label: "AI Solutions" },
    { href: "/services/custom-development", label: "Custom Development" },
    { href: "/services/technology-consulting", label: "Technology Consulting" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/blog", label: "Blog" },
    { href: "/careers", label: "Careers" },
  ],
  connect: [
    { href: "/contact", label: "Contact" },
    { href: "https://linkedin.com", label: "LinkedIn" },
    { href: "https://github.com", label: "GitHub" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">BR</span>
              </div>
              <span className="text-text-primary font-semibold text-lg">
                Beyond Reality
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              Engineering what&apos;s next. We build AI-powered solutions and
              custom software that push businesses beyond their current reality.
            </p>
          </div>

          <div>
            <h4 className="text-text-primary font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-text-primary font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-text-primary font-medium mb-4">Connect</h4>
            <ul className="space-y-2">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} Beyond Reality. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-text-muted hover:text-text-primary text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-text-muted hover:text-text-primary text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

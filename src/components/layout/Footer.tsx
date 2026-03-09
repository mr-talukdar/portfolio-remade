import Link from "next/link";
import { navLinks, socialLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <p className="text-sm text-text-secondary">
              Frontend Engineer focused on crafting high-performance digital
              experiences and AI-native systems.
            </p>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
              Social
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-text-tertiary">
            © {new Date().getFullYear()} Rahul Talukdar. All rights reserved.
          </p>
          <p className="text-xs text-text-tertiary">
            Built with Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}

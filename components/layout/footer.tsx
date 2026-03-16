import { FaEnvelope, FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const quickLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'FAQs', href: '#faqs' },
];

const contactLinks = [
  {
    icon: FaXTwitter,
    label: 'X (Twitter)',
    href: 'https://twitter.com/domora_ng',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    href: 'https://instagram.com/domora_ng',
  },
  {
    icon: FaEnvelope,
    label: 'hello@mail.domorang.com',
    href: 'mailto:hello@mail.domorang.com',
  },
];

export function Footer() {
  return (
    <footer className="bg-primary-650 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <p className="text-2xl font-bold">Domorang</p>
            <p className="max-w-xs text-sm leading-relaxed text-white/90">
              Domorang is a proptech platform for people living in Abuja or
              planning to move to Abuja. We help you find real houses for rent
              and connect you with trusted agents and landlords.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <p className="text-lg font-semibold">Quick Links</p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/90 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="text-lg font-semibold">Contact Us</p>
            <div className="flex flex-col gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    link.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="flex items-center gap-2 text-sm text-white/90 transition-colors hover:text-white"
                >
                  <link.icon className="h-5 w-5" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-white/90">
              Launching first in Abuja.
            </p>
            <p className="text-center text-sm text-white/90">
              © {new Date().getFullYear()} Domorang. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

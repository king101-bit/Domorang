'use client';
import Link from 'next/link';
import { Button } from '../ui/button';
import { HelpCircle, Home, Menu, MessageCircleQuestion, Search, Sparkles, Star, Upload, UserPlus, Users, Workflow, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
 { link: "#how-it-works", label: "How it works", icon: Workflow },
  { link: "#why-us", label: "Why Us", icon: Star },
  { link: "#faqs", label: "FAQs", icon: HelpCircle },
];

  return (
    <header className="bg-card border-border sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          <Link href={`/`} className="flex items-center gap-2">
            <span className="text-sm font-semibold">Domorang</span>
          </Link>

          {/* Desktop nav */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                className="text-foreground hover:text-foreground/80 text-sm font-semibold transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href={`/register`}>
            <Button
              size="sm"
              className="bg-primary-600 hover:bg-secondary/90 text-secondary-foreground rounded-full px-6"
            >
              Get Early Access
            </Button>
          </Link>
          {/* Mobile menu toggle */}
          <button
            className="p-2 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <nav className="border-border border-t py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.link}
                    href={item.link}
                    className="hover:bg-muted flex items-center gap-3 rounded-md px-2 py-2 text-sm font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    {item.label}
                  </Link>
                );
              })}

              {/* Register button
              <Link
                href="/register"
                className="hover:bg-muted flex items-center gap-3 rounded-md px-2 py-2 text-sm font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                <UserPlus className="h-4 w-4" />
                Register
              </Link> */}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;

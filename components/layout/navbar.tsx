'use client';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Book, HelpCircle, Menu, Star, Workflow, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { link: '#how-it-works', label: 'How it works', icon: Workflow },
    { link: '#why-us', label: 'Why Us', icon: Star },
    { link: '#faqs', label: 'FAQs', icon: HelpCircle },
    { link: '#our-story', label: 'Our Story', icon: Book },
  ];

  return (
    <header className="border-border bg-primary-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="grid h-14 grid-cols-[auto_1fr_auto] items-center gap-8">
          {' '}
          {/* Logo - left */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-sm font-semibold">Domorang</span>
          </Link>
          {/* Nav links - center */}
          <nav className="hidden items-center justify-center gap-6 md:flex">
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
          {/* Buttons - right */}
          <div className="hidden items-center justify-end gap-3 md:flex">
            <Link href={`/auth/signup`}>
              <Button
                size="sm"
                className="bg-primary-600 hover:bg-primary-700 rounded-full px-6 text-white"
              >
                Sign Up
              </Button>
            </Link>
            <Button
              size="sm"
              className="border-primary-600 text-primary-600 hover:bg-primary-600/10 rounded-full border bg-transparent px-6"
            >
              Sign In
            </Button>
          </div>
          {/* Mobile toggle - right on mobile */}
          <div className="flex justify-end md:hidden">
            <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
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

              {/* Mobile buttons */}
              <div className="mt-2 flex flex-col gap-3 px-2">
                <Link href="#waitlist" onClick={() => setIsMenuOpen(false)}>
                  <Button
                    size="sm"
                    className="bg-primary-600 hover:bg-secondary/90 w-full rounded-full px-6 text-white"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="#waitlist" onClick={() => setIsMenuOpen(false)}>
                  <Button
                    size="sm"
                    className="bg-primary-100 text-primary-600 hover:bg-secondary/90 w-full rounded-full px-6"
                  >
                    List Property
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;

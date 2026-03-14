'use client';
import Link from 'next/link';
import { Button } from '../ui/button';
import {
  Book,
  HelpCircle,
  Menu,
  Star,
  Workflow,
  X,
  LogOut,
  User,
  Settings,
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { createClient } from '@/lib/supabase/client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type Profile = {
  full_name: string | null;
  avatar_url: string | null;
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const navItems = [
    { link: '#how-it-works', label: 'How it works', icon: Workflow },
    { link: '#why-us', label: 'Why Us', icon: Star },
    { link: '#faqs', label: 'FAQs', icon: HelpCircle },
    { link: '#our-story', label: 'Our Story', icon: Book },
  ];

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) return;
      supabase
        .from('profiles')
        .select('full_name, avatar_url')
        .eq('id', user.id)
        .single()
        .then(({ data }) => setProfile(data));
    });
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    setProfile(null);
    router.push('/auth/login');
  };

  const avatarUrl =
    profile?.avatar_url ??
    `https://api.dicebear.com/9.x/glass/svg?seed=${profile?.full_name ?? 'User'}`;

  return (
    <header className="border-border bg-primary-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="grid h-14 grid-cols-[auto_1fr_auto] items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-sm font-semibold">Domorang</span>
          </Link>

          {/* Nav links */}
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

          {/* Right side */}
          <div className="hidden items-center justify-end gap-3 md:flex">
            {profile ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 rounded-full p-1 transition hover:bg-black/5"
                >
                  <Image
                    src={avatarUrl}
                    alt={profile.full_name ?? 'User'}
                    width={35}
                    height={35}
                    unoptimized
                    className="border-border rounded-full border"
                  />
                  <span className="text-sm font-medium">
                    {profile.full_name}
                  </span>
                </button>

                {dropdownOpen && (
                  <div className="border-border absolute right-0 z-50 mt-2 w-44 rounded-lg border bg-white py-1 shadow-lg">
                    <Link
                      href="/home"
                      className="hover:bg-muted flex items-center gap-2 px-4 py-2 text-sm"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <User className="h-4 w-4" /> Dashboard
                    </Link>
                    <Link
                      href="/settings"
                      className="hover:bg-muted flex items-center gap-2 px-4 py-2 text-sm"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <Settings className="h-4 w-4" /> Settings
                    </Link>
                    <hr className="border-border my-1" />
                    <button
                      onClick={handleSignOut}
                      className="text-destructive hover:bg-muted flex w-full items-center gap-2 px-4 py-2 text-sm"
                    >
                      <LogOut className="h-4 w-4" /> Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/auth/signup">
                  <Button
                    size="sm"
                    className="bg-primary-600 hover:bg-primary-700 rounded-full px-6 text-white"
                  >
                    Sign Up
                  </Button>
                </Link>
                <Link href="/auth/login">
                  <Button
                    size="sm"
                    className="border-primary-600 text-primary-600 hover:bg-primary-600/10 rounded-full border bg-transparent px-6"
                  >
                    Sign In
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile toggle */}
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

              <div className="mt-2 flex flex-col gap-3 px-2">
                {profile ? (
                  <>
                    <div className="flex items-center gap-3 px-2 py-1">
                      <Image
                        src={avatarUrl}
                        alt="avatar"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <span className="text-sm font-medium">
                        {profile.full_name}
                      </span>
                    </div>
                    <Button
                      size="sm"
                      onClick={handleSignOut}
                      className="text-destructive border-destructive w-full rounded-full border bg-transparent"
                    >
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/auth/signup"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Button
                        size="sm"
                        className="bg-primary-600 w-full rounded-full text-white"
                      >
                        Sign Up
                      </Button>
                    </Link>
                    <Link
                      href="/auth/login"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Button
                        size="sm"
                        className="bg-primary-100 text-primary-600 w-full rounded-full"
                      >
                        Sign In
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;

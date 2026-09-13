'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@marvinho/utils';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Logo, Button, Container, StudentPortalButton } from '@marvinho/ui';
import { navigation } from '@marvinho/config';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const isDark = !scrolled;

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/95 shadow-sm backdrop-blur-xl' : 'bg-transparent'
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between lg:h-20" aria-label="Main navigation">
          <Link href="/" className="flex-shrink-0" aria-label="D KING SAP Academy home">
            <Logo variant={isDark ? 'light' : 'dark'} size="md" />
          </Link>

          <div className="hidden items-center gap-0.5 xl:flex">
            {navigation.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200',
                    pathname === item.href || pathname.startsWith(item.href + '/')
                      ? isDark
                        ? 'text-white'
                        : 'text-[var(--primary)]'
                      : isDark
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-600 hover:text-[var(--primary)]'
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>

                {item.children && openDropdown === item.href && (
                  <div className="absolute left-0 top-full min-w-[260px] rounded-xl border border-[var(--border)] bg-white p-2 shadow-xl">
                    <Link
                      href={item.href}
                      className="block rounded-lg px-4 py-2.5 text-sm font-semibold text-[var(--primary)] transition-colors hover:bg-[var(--surface)]"
                    >
                      {item.label} Overview
                    </Link>
                    <div className="my-1 h-px bg-[var(--border)]" />
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          'block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors',
                          pathname === child.href
                            ? 'bg-[var(--primary)]/5 text-[var(--primary)]'
                            : 'text-gray-600 hover:bg-[var(--surface)] hover:text-[var(--text)]'
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden items-center gap-3 xl:flex">
            <StudentPortalButton />
            <Link href="/contact">
              <Button
                variant={isDark ? 'gold' : 'primary'}
                size="sm"
              >
                Enquire Now
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              'rounded-lg p-2 xl:hidden',
              isDark ? 'text-white' : 'text-[var(--text)]'
            )}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {isOpen && (
          <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-[var(--border)] bg-white pb-6 xl:hidden">
            <div className="space-y-1 pt-4">
              {navigation.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'block rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                      pathname === item.href
                        ? 'bg-[var(--primary)]/5 text-[var(--primary)]'
                        : 'text-gray-700 hover:bg-[var(--surface)]'
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            'block rounded-lg px-4 py-2 text-sm transition-colors',
                            pathname === child.href
                              ? 'text-[var(--primary)]'
                              : 'text-gray-500 hover:text-[var(--text)]'
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 grid gap-3 border-t border-[var(--border)] px-4 pt-4">
              <Link href="/contact">
                <Button variant="gold" size="md" className="w-full">
                  Enquire Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
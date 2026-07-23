'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@marvinho/utils';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Logo, Button, Container } from '@marvinho/ui';
import { navigation, siteConfig } from '@marvinho/config';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/90 shadow-sm backdrop-blur-xl'
          : 'bg-transparent'
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between lg:h-20" aria-label="Main navigation">
          <Link href="/" className="flex-shrink-0">
            <Logo variant={scrolled ? 'dark' : 'light'} size="md" />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
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
                      ? scrolled ? 'text-[#C9A84C]' : 'text-[#C9A84C]'
                      : scrolled
                      ? 'text-gray-600 hover:text-[#141414]'
                      : 'text-gray-300 hover:text-white'
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>

                {item.children && openDropdown === item.href && (
                  <div className="absolute left-0 top-full min-w-[220px] rounded-xl border border-gray-100 bg-white p-2 shadow-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          'block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors',
                          pathname === child.href
                            ? 'bg-[#C9A84C]/10 text-[#C9A84C]'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-[#141414]'
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

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/contact">
              <Button variant={scrolled ? 'primary' : 'white'} size="sm">
                Get a Quote
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              'rounded-lg p-2 lg:hidden',
              scrolled ? 'text-[#141414]' : 'text-white'
            )}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {isOpen && (
          <div className="border-t border-gray-100 bg-white pb-6 lg:hidden">
            <div className="space-y-1 pt-4">
              {navigation.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'block rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                      pathname === item.href
                        ? 'bg-[#C9A84C]/10 text-[#C9A84C]'
                        : 'text-gray-600 hover:bg-gray-50'
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
                              ? 'text-[#C9A84C]'
                              : 'text-gray-400 hover:text-gray-600'
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
            <div className="mt-4 px-4">
              <Link href="/contact">
                <Button variant="primary" size="md" className="w-full">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

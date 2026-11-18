'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-shadow duration-300`}
    >
      <div className="bg-primary text-on-primary py-space-xs px-margin-desktop text-center">
        <p className="font-label-sm text-label-sm uppercase tracking-widest">
          Complimentary Worldwide Express Delivery on Orders Over $350 | Bespoke Monogramming Available
        </p>
      </div>
      <div className="h-20 w-full px-margin-desktop flex items-center justify-between">
        <div className="flex items-center gap-space-xl">
          <Link href="/" className="flex items-center gap-space-sm">
            <img
              alt="Atelier Monogram Logo"
              className="h-8 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida/ALJJyrBLEUDugeKo7ni3w5RU9EJ_sdBkLJakbsOmXLaC-yIzbMjKksKgRVwghL3AEvOhXNgVmBBFKJm5IpDf_Fwzxdlxko8TWqY8i2jYyWfCFJjE6UPkg-Gq3UjztedLfyMAoGQr-dj2pE0-DLJ7XZkzX4hR8gY4hE4XVXOWm-88i5z-YcUid9_0hVUXiw6ofAVHEPlgy6lXx2nhv4BHnWSDpz09DEGh0AvFmgRZkuWkXCHQ"
            />
            <span className="font-headline-md text-headline-md tracking-wider text-primary uppercase">
              ATELIER
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-space-lg">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`font-label-lg text-label-lg uppercase tracking-wider transition-colors duration-200 ${
                    isActive
                      ? 'text-primary font-semibold border-b border-primary pb-0.5'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-space-lg">
          <button
            aria-label="Search"
            className="text-on-surface-variant hover:text-on-surface transition-colors duration-200 flex items-center justify-center"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">search</span>
          </button>
          <div className="flex items-center gap-space-xs cursor-pointer group">
            <span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-on-surface transition-colors duration-200">
              $ USD
            </span>
            <span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-on-surface transition-colors duration-200">
              expand_more
            </span>
          </div>
          <Link
            aria-label="Wishlist"
            className="relative text-on-surface-variant hover:text-on-surface transition-colors duration-200 flex items-center justify-center"
            href="/wishlist"
          >
            <span className="material-symbols-outlined text-[20px]">favorite</span>
            <span className="absolute -top-1.5 -right-2 bg-primary text-on-primary font-label-sm text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              2
            </span>
          </Link>
          <Link
            aria-label="Shopping Bag"
            className="relative text-on-surface-variant hover:text-on-surface transition-colors duration-200 flex items-center justify-center"
            href="/cart"
          >
            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            <span className="absolute -top-1.5 -right-2 bg-primary text-on-primary font-label-sm text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              3
            </span>
          </Link>
          <Link
            className="flex items-center justify-center pl-space-xs"
            href="/account"
          >
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover ring-1 ring-outline-variant/40 hover:ring-primary transition-all duration-200"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2Hvvy4vCqu6gGciCgRoQOT5VID3NXcT_gbViGDbbJl9SrcbfBWSIAhzoaRnmf-ymQoJslbDY2H0cIzZHoFfpxy-6fPUZe_RQ55kGSfImiTYErxxN6JOYFikr5BHMCUBn2EBCRMmaxVzjwvDVOq5YjKPEIURc8zzrkxcBcO3BT7eAA1fZoC6aq_4WYO8Th2oowgkFbJMr3ItHxkMjabPiNGCUkqHptbUmlk2dgiT9a"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
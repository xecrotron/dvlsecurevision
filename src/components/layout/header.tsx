"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/leadership', label: 'Leadership' },
  // { href: '/services', label: 'Services' },
  { href: '/training-recruitment', label: 'Training' },
  { href: '/career', label: 'Career' },
  // { href: '/gallery', label: 'Gallery' },
  // { href: '/technology', label: 'Technology' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = pathname === '/';

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-card shadow-md" : (isHomePage ? "bg-transparent" : "bg-card shadow-sm")
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <Logo />
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-medium transition-colors hover:text-accent",
                  pathname === link.href ? "text-accent" : (isScrolled || !isHomePage) ? "text-primary" : "text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Button asChild className="hidden lg:flex bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className={cn((isScrolled || !isHomePage) ? "text-primary" : "text-white", "hover:text-accent")}>
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                    <SheetDescription className="sr-only">
                        A list of navigation links for the DVL Secure Vision website.
                    </SheetDescription>
                  <div className="flex flex-col space-y-4 p-4">
                    <Logo />
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "font-medium transition-colors hover:text-accent",
                          pathname === link.href ? "text-accent" : "text-primary"
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                    <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

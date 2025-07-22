import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-primary-foreground/70">
              Your trusted partner in comprehensive security solutions. We provide tailored services to protect what matters most to you.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-primary-foreground/70 hover:text-accent"><Facebook /></Link>
              <Link href="#" className="text-primary-foreground/70 hover:text-accent"><Twitter /></Link>
              <Link href="#" className="text-primary-foreground/70 hover:text-accent"><Linkedin /></Link>
              <Link href="#" className="text-primary-foreground/70 hover:text-accent"><Instagram /></Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-accent">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-sm text-primary-foreground/70 hover:text-accent">About Us</Link></li>
              <li><Link href="/services" className="text-sm text-primary-foreground/70 hover:text-accent">Services</Link></li>
              <li><Link href="/career" className="text-sm text-primary-foreground/70 hover:text-accent">Careers</Link></li>
              <li><Link href="/contact" className="text-sm text-primary-foreground/70 hover:text-accent">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-accent">Get in Touch</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mt-1 mr-3 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/70">123 Security Lane, Protect City, PC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-accent" />
                <span className="text-sm text-primary-foreground/70">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-accent" />
                <span className="text-sm text-primary-foreground/70">contact@sentinelshield.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-accent">Newsletter</h3>
            <p className="mt-4 text-sm text-primary-foreground/70">Stay updated with our latest news and security tips.</p>
            <div className="flex mt-4">
              <Input type="email" placeholder="Your Email" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50" />
              <Button type="submit" className="ml-2 bg-accent text-accent-foreground hover:bg-accent/90">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Sentinel Shield. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

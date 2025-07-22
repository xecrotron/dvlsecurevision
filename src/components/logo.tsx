import Link from 'next/link';
import { Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <Shield className="h-8 w-8 text-accent" />
      <span className="text-xl font-bold font-headline">
        Sentinel Shield
      </span>
    </Link>
  );
}

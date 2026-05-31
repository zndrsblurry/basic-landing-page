"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tugbok", label: "Governance Model" },
  { href: "/transparency", label: "Transparency Portal" },
  { href: "/community", label: "Community" },
  { href: "/roadmap", label: "Roadmap & Plans" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center px-4">
        <Link href="/" className="mr-8 flex items-center gap-2">
          <span className="text-sm font-bold tracking-tight">Brgy. Tugbok</span>
          <span className="hidden text-xs text-muted-foreground sm:inline">
            Davao City
          </span>
        </Link>

        <nav className="flex flex-1 items-center gap-1">
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);

            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                  isActive
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

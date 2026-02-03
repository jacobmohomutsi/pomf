import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Patronage", href: "/patronage" },
    { label: "About", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Donate", href: "/donate", highlight: true },
    { label: "Contact", href: "/contact" },
    { label: "Sign Up", href: "/signup", highlight: true },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="/pomf-logo.jpg" 
                alt="POMF Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-bold text-primary leading-tight">PRINCE OTLOTLENG</span>
              <span className="text-xs font-bold text-primary leading-tight">MAMOGALE FOUNDATION</span>
              <span className="text-xs text-accent font-semibold">POMF</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}
                className={`font-medium transition-colors ${
                  item.highlight
                    ? "text-accent hover:text-primary"
                    : "text-foreground hover:text-accent"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border space-y-3 animate-fadeInUp">
            <div className="px-4 py-2 text-xs font-bold text-primary mb-3">
              <p>PRINCE OTLOTLENG MAMOGALE FOUNDATION</p>
            </div>
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => {
                  window.location.href = item.href;
                  setIsOpen(false);
                }}
                className={`w-full text-left py-2 px-4 rounded-lg transition-colors ${
                  item.highlight
                    ? "bg-accent text-primary font-medium"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

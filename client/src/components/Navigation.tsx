import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

interface NavigationProps {
  currentPage?: 'home' | 'ai-services';
}

export default function Navigation({ currentPage = 'home' }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-background/98 backdrop-blur-sm z-50 border-b border-border">
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/assets/flowency-logo-light.svg"
              alt="Flowency"
              className="h-9 w-auto cursor-pointer hover:opacity-70 transition-opacity dark:hidden"
            />
            <img
              src="/assets/flowency-logo-dark.svg"
              alt="Flowency"
              className="h-9 w-auto cursor-pointer hover:opacity-70 transition-opacity hidden dark:block"
            />
          </Link>

          {/* Nav Links - Center */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#approach" className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-foreground after:transition-all after:duration-300">
              Approach
            </a>
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-foreground after:transition-all after:duration-300">
              Services
            </a>
            <Link to="/ai-services" className={`text-sm transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:transition-all after:duration-300 ${
              currentPage === 'ai-services'
                ? 'text-accent font-medium after:w-full after:bg-accent'
                : 'text-muted-foreground hover:text-foreground after:w-0 hover:after:w-full after:bg-foreground'
            }`}>
              AI-DLC
            </Link>
          </div>

          {/* Theme Toggle & CTA - Right */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link
              to="/contact"
              className="px-5 py-2 text-sm font-medium bg-accent text-accent-foreground hover:bg-accent/90 transition-colors rounded-md"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground hover:text-accent transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background">
            <div className="flex flex-col gap-3">
              <a
                href="#approach"
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Approach
              </a>
              <a
                href="#services"
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <Link
                to="/ai-services"
                className={`px-3 py-2 text-sm transition-colors ${
                  currentPage === 'ai-services'
                    ? 'text-accent font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                AI-DLC
              </Link>
              <Link
                to="/contact"
                className="px-3 py-2 text-sm text-accent font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

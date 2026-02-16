import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  currentPage?: 'home' | 'intentops' | 'actuate';
}

export default function Navigation({ currentPage = 'home' }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="https://cdn.prod.website-files.com/668bbc8f0f25bb8294a73f2f/6695430306a42b90cd8bf9be_Flowency-logo-meso.svg"
                alt="Flowency"
                className="h-8 w-auto cursor-pointer"
              />
            </Link>
          </div>

          {/* Nav Links - Center */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={`text-sm transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-orange-500 after:transition-all after:duration-300 ${
              currentPage === 'home'
                ? 'text-orange-600 font-semibold'
                : 'text-gray-600 hover:text-orange-600'
            }`}>
              Home
            </Link>
            <Link to="/intentops" className={`text-sm transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-amber-500 after:transition-all after:duration-300 ${
              currentPage === 'intentops'
                ? 'text-amber-500 font-semibold'
                : 'text-gray-600 hover:text-amber-500'
            }`}>
              IntentOps
            </Link>
            <Link to="/actuate" className={`text-sm transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-teal-500 after:transition-all after:duration-300 ${
              currentPage === 'actuate'
                ? 'text-teal-500 font-semibold'
                : 'text-gray-600 hover:text-teal-500'
            }`}>
              Actuate
            </Link>
          </div>

          {/* CTA - Right */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-all duration-300 text-sm font-medium shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="#contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-md transition-colors text-sm"
            >
              Contact
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col gap-1">
              <Link
                to="/"
                className={`px-3 py-2 text-sm transition-colors duration-300 ${
                  currentPage === 'home'
                    ? 'text-orange-600 font-semibold'
                    : 'text-gray-600 hover:text-orange-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/intentops"
                className={`px-3 py-2 text-sm transition-colors duration-300 ${
                  currentPage === 'intentops'
                    ? 'text-amber-500 font-semibold'
                    : 'text-gray-600 hover:text-amber-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                IntentOps
              </Link>
              <Link
                to="/actuate"
                className={`px-3 py-2 text-sm transition-colors duration-300 ${
                  currentPage === 'actuate'
                    ? 'text-teal-500 font-semibold'
                    : 'text-gray-600 hover:text-teal-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Actuate
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

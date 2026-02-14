import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function CookiePolicyPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Cookie Policy | Flowency"
        description="Understand how Flowency uses cookies and tracking technologies. Learn about your choices and how to manage cookie preferences."
        canonicalUrl="https://flowency.co.uk/cookie-policy"
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/98 backdrop-blur-sm z-50 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/">
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

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/ai-services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                AI Services
              </Link>
              <ThemeToggle />
              <Link
                to="/contact"
                className="px-5 py-2 text-sm font-medium text-accent-foreground bg-accent hover:bg-accent/90 transition-colors rounded"
              >
                Contact
              </Link>
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-accent transition-colors p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-6 py-4 space-y-3">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <Link to="/ai-services" className="block text-sm text-muted-foreground hover:text-foreground">
                AI Services
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm text-accent font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {/* Back Link */}
          <motion.div {...fadeIn} className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </motion.div>

          {/* Page Header */}
          <motion.div {...fadeIn} className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-foreground mb-4">Cookie Policy</h1>
            <p className="text-muted-foreground">Understanding how we use cookies on our website</p>
          </motion.div>

          {/* Content */}
          <motion.div {...fadeIn} className="prose prose-lg dark:prose-invert max-w-none">
            <div className="bg-muted/50 border-l-4 border-accent p-6 mb-8 rounded-r">
              <p className="text-foreground m-0">
                When you use our website, information may be collected through the use of cookies and similar technologies.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">What are cookies?</h2>
            <div className="bg-card border border-border p-6 rounded mb-8">
              <p className="text-muted-foreground mb-4">
                Cookies are small text files downloaded when you visit a website. Your browser can read these files and remember your preferences.
              </p>
              <p className="text-muted-foreground m-0">
                Cookies are not programs and cannot contain viruses. They are stored as plain text and typically contain a site name and unique user ID.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Managing cookies</h2>
            <p className="text-muted-foreground mb-6">
              You can manage cookies through your browser settings. Below are links to manage cookies in major browsers:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-card border border-border p-5 rounded">
                <h3 className="font-semibold text-foreground mb-3">Desktop Browsers</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 transition-colors text-sm"
                    >
                      Microsoft Edge
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 transition-colors text-sm"
                    >
                      Firefox
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.google.com/chrome/answer/95647"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 transition-colors text-sm"
                    >
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://help.opera.com/en/latest/web-preferences/#cookies"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 transition-colors text-sm"
                    >
                      Opera
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border p-5 rounded">
                <h3 className="font-semibold text-foreground mb-3">Mobile Browsers</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 transition-colors text-sm"
                    >
                      Safari (Mac)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.apple.com/en-gb/HT201265"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 transition-colors text-sm"
                    >
                      Safari iOS
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.google.com/chrome/answer/95647"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 transition-colors text-sm"
                    >
                      Chrome (Android)
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-muted/50 border-l-4 border-primary p-6 mb-8 rounded-r">
              <h3 className="font-semibold text-foreground mb-2">Important note</h3>
              <p className="text-muted-foreground m-0">
                Some website features may not work with cookies disabled. Disabling cookies may affect your browsing experience.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Types of cookies we use</h2>
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-accent pl-4">
                <h3 className="font-semibold text-foreground">Essential cookies</h3>
                <p className="text-sm text-muted-foreground m-0">Necessary for the website to function. Cannot be switched off.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-foreground">Analytics cookies</h3>
                <p className="text-sm text-muted-foreground m-0">Help us understand how visitors interact with our website by collecting information anonymously.</p>
              </div>
              <div className="border-l-4 border-muted-foreground pl-4">
                <h3 className="font-semibold text-foreground">Preference cookies</h3>
                <p className="text-sm text-muted-foreground m-0">Allow our website to remember choices you make and provide enhanced features.</p>
              </div>
            </div>

            <div className="bg-card border border-border p-6 rounded">
              <h3 className="font-semibold text-foreground mb-3">Questions about our cookie policy?</h3>
              <p className="text-muted-foreground mb-2">If you have any questions, please contact us:</p>
              <p className="mb-3">
                <a href="mailto:hello@flowency.co.uk" className="text-accent hover:text-accent/80 transition-colors">
                  hello@flowency.co.uk
                </a>
              </p>
              <p className="text-sm text-muted-foreground m-0">
                For more about our data practices, see our{" "}
                <Link to="/privacy-policy" className="text-accent hover:text-accent/80 transition-colors">
                  Privacy Policy
                </Link>.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer showCta={false} />
    </div>
  );
}

import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function TermsOfUsePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Terms of Use | Flowency"
        description="Read Flowency's terms of use governing our AI consultancy services, website usage, and client relationships."
        canonicalUrl="https://flowency.co.uk/terms-of-use"
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
            <h1 className="text-4xl md:text-5xl font-light text-foreground mb-4">Terms of Use</h1>
            <p className="text-muted-foreground">Last updated: February 2026</p>
          </motion.div>

          {/* Content */}
          <motion.div {...fadeIn} className="prose prose-lg dark:prose-invert max-w-none">
            <div className="bg-muted/50 border-l-4 border-accent p-6 mb-8 rounded-r">
              <p className="text-foreground m-0">
                These Terms of Use set out the terms under which you may use Flowency.co.uk. Your agreement to comply with these terms is deemed to occur upon your first use of our site.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Definitions</h2>
            <div className="bg-card border border-border p-6 rounded mb-8">
              <p className="mb-2"><strong className="text-foreground">"Content"</strong> <span className="text-muted-foreground">- any text, images, audio, video, scripts, code, software, databases and any other form of information on our site</span></p>
              <p className="mb-2"><strong className="text-foreground">"User"</strong> <span className="text-muted-foreground">- a user of our site</span></p>
              <p className="mb-2"><strong className="text-foreground">"User Content"</strong> <span className="text-muted-foreground">- any content submitted by users including comments, feedback, reviews</span></p>
              <p className="m-0"><strong className="text-foreground">"We/Us/Our"</strong> <span className="text-muted-foreground">- Flowency Ltd</span></p>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">1. Information About Us</h2>
            <p className="text-muted-foreground mb-6">Our site is Flowency.co.uk, operated by Flowency Ltd.</p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">2. Access to Our Site</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
              <li>Access to our site is free of charge.</li>
              <li>It is your responsibility to make arrangements necessary to access our site.</li>
              <li>Access is provided "as is" and on an "as available" basis. We may alter, suspend or discontinue our site at any time without notice.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">3. Intellectual Property Rights</h2>
            <p className="text-muted-foreground mb-4">All content on our site belongs to or has been licensed by us. You may:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
              <li>Access, view and use our site in a web browser</li>
              <li>Download our site for caching</li>
              <li>Print one copy of any page</li>
              <li>Download extracts from pages</li>
              <li>Save pages for later and/or offline viewing</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">4. User Content</h2>
            <p className="text-muted-foreground mb-6">
              User content includes forms submitted by users. You agree to be solely responsible for your content and that it will comply with our acceptable usage policy.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">5. Liability and Disclaimers</h2>
            <div className="bg-muted/50 border-l-4 border-primary p-6 mb-6 rounded-r">
              <p className="text-foreground m-0">
                Nothing on our site constitutes advice on which you should rely. Professional or specialist advice should always be sought before taking action based on information provided here.
              </p>
            </div>
            <p className="text-muted-foreground mb-6">
              We make reasonable efforts to ensure content is complete and accurate, but make no guarantees. To the fullest extent permissible by law, we accept no liability for any loss or damage arising from use of our site.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">6. Contact Information</h2>
            <div className="bg-card border border-border p-6 rounded">
              <p className="text-muted-foreground mb-2">For questions about these Terms of Use, please contact us at:</p>
              <p className="m-0">
                <a href="mailto:hello@flowency.co.uk" className="text-accent hover:text-accent/80 transition-colors">
                  hello@flowency.co.uk
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer showCta={false} />
    </div>
  );
}

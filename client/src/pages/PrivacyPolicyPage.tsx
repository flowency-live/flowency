import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function PrivacyPolicyPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Privacy Policy | Flowency"
        description="Learn how Flowency protects your privacy and handles data. Comprehensive privacy policy and data protection information."
        canonicalUrl="https://flowency.co.uk/privacy-policy"
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
            <h1 className="text-4xl md:text-5xl font-light text-foreground mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: February 2026</p>
          </motion.div>

          {/* Content */}
          <motion.div {...fadeIn} className="prose prose-lg dark:prose-invert max-w-none">
            <div className="bg-muted/50 border-l-4 border-accent p-6 mb-8 rounded-r">
              <p className="text-foreground m-0">
                Flowency Ltd is dedicated to protecting the confidentiality and privacy of information entrusted to us in accordance with the UK GDPR and the Data Protection Act 2018.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">1. Who are we?</h2>
            <p className="text-muted-foreground mb-6">This Privacy Notice applies to Flowency Ltd, a UK limited company.</p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">2. Contact for privacy questions</h2>
            <div className="bg-card border border-border p-6 rounded mb-8">
              <p className="text-muted-foreground mb-2">If you have questions about this Privacy Notice or how we handle personal data:</p>
              <p className="mb-2">
                <a href="mailto:hello@flowency.co.uk" className="text-accent hover:text-accent/80 transition-colors">
                  hello@flowency.co.uk
                </a>
              </p>
              <p className="text-sm text-muted-foreground m-0">We aim to respond within 30 days.</p>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">3. How do we collect personal data?</h2>
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-accent pl-4">
                <h3 className="font-semibold text-foreground">Directly</h3>
                <p className="text-sm text-muted-foreground m-0">From individuals who complete our forms, subscribe to newsletters, register for training, or attend events.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-foreground">Public sources</h3>
                <p className="text-sm text-muted-foreground m-0">From public registers (Companies House), news articles, and internet searches.</p>
              </div>
              <div className="border-l-4 border-muted-foreground pl-4">
                <h3 className="font-semibold text-foreground">Social networks</h3>
                <p className="text-sm text-muted-foreground m-0">If you login via social media, we collect information you've permitted your provider to share.</p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="font-semibold text-foreground">Business clients</h3>
                <p className="text-sm text-muted-foreground m-0">Clients may share personal data as part of professional service engagements.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">4. What personal data do we collect?</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-card border border-border p-5 rounded">
                <h3 className="font-semibold text-foreground mb-3">Personal data</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li>Contact details (name, company, job title, phone, email, address)</li>
                  <li>Professional details (job history, education, memberships)</li>
                </ul>
              </div>
              <div className="bg-card border border-border p-5 rounded">
                <h3 className="font-semibold text-foreground mb-3">Sensitive data</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li>Information from professional engagements</li>
                  <li>Diversity information from recruitment</li>
                  <li>Location data when seeking offices</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">5. Lawful reasons for processing</h2>
            <div className="space-y-3 mb-8">
              <div className="border-l-4 border-accent pl-4">
                <h3 className="font-semibold text-foreground">Contract</h3>
                <p className="text-sm text-muted-foreground m-0">To perform our contractual obligations</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-foreground">Consent</h3>
                <p className="text-sm text-muted-foreground m-0">Based on your freely given consent</p>
              </div>
              <div className="border-l-4 border-muted-foreground pl-4">
                <h3 className="font-semibold text-foreground">Legitimate interests</h3>
                <p className="text-sm text-muted-foreground m-0">For delivering services, marketing, and operations</p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="font-semibold text-foreground">Legal obligations</h3>
                <p className="text-sm text-muted-foreground m-0">To meet legal and regulatory requirements</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">6. Why do we need personal data?</h2>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground">
              <li>Providing professional advice and services</li>
              <li>Promoting services to existing and prospective clients</li>
              <li>Sending invitations and providing access to events</li>
              <li>Administering and securing our information systems</li>
              <li>Processing career enquiries</li>
              <li>Complying with legal and regulatory obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">7. Your data protection rights</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-card border border-border p-4 rounded">
                <h3 className="font-semibold text-foreground mb-1">Access</h3>
                <p className="text-sm text-muted-foreground m-0">Verify whether we process your data</p>
              </div>
              <div className="bg-card border border-border p-4 rounded">
                <h3 className="font-semibold text-foreground mb-1">Correction</h3>
                <p className="text-sm text-muted-foreground m-0">Correct incorrect information</p>
              </div>
              <div className="bg-card border border-border p-4 rounded">
                <h3 className="font-semibold text-foreground mb-1">Erasure</h3>
                <p className="text-sm text-muted-foreground m-0">Request deletion of your data</p>
              </div>
              <div className="bg-card border border-border p-4 rounded">
                <h3 className="font-semibold text-foreground mb-1">Restrictions</h3>
                <p className="text-sm text-muted-foreground m-0">Restrict how we process your data</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">8. Data retention</h2>
            <p className="text-muted-foreground mb-8">We retain personal data for seven years unless a different timeframe applies due to business needs or legal requirements.</p>

            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">9. Cookies</h2>
            <p className="text-muted-foreground mb-8">
              Our website may use cookies. For more information, please refer to our{" "}
              <Link to="/cookie-policy" className="text-accent hover:text-accent/80 transition-colors">
                Cookie Policy
              </Link>.
            </p>

            <div className="bg-muted/50 border-l-4 border-accent p-6 rounded-r">
              <h3 className="font-semibold text-foreground mb-2">Questions or concerns?</h3>
              <p className="text-muted-foreground m-0">
                Contact us at{" "}
                <a href="mailto:hello@flowency.co.uk" className="text-accent hover:text-accent/80 transition-colors">
                  hello@flowency.co.uk
                </a>{" "}
                or report concerns to the UK Information Commissioner's Office at{" "}
                <a
                  href="https://ico.org.uk/concerns/handling/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  ico.org.uk/concerns
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

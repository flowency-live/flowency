import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { ThemeToggle } from "@/components/ThemeToggle";
import Footer from "@/components/Footer";

export default function AIServicesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Services - IntentOps & Actuate",
    "provider": {
      "@type": "Organization",
      "name": "Flowency",
    },
    "description": "Full-stack AI consulting from strategy to production. IntentOps for alignment and governance, Actuate for building and delivery.",
    "serviceType": "AI Consulting",
    "areaServed": "GB",
  };

  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="AI Services - IntentOps & Actuate | Flowency"
        description="Full-stack AI consulting from strategy to production. IntentOps aligns AI to business value. Actuate builds and delivers working AI tools."
        keywords="AI consulting, AI strategy, AI implementation, IntentOps, Actuate, enterprise AI, AI governance"
        canonicalUrl="https://flowency.co.uk/ai-services"
        structuredData={structuredData}
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
              <Link to="/#approach" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Approach
              </Link>
              <Link to="/#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link to="/ai-services" className="text-sm text-accent font-medium">
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

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-6 py-4 space-y-3">
              <Link to="/" className="block text-foreground hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/ai-services" className="block text-accent font-medium">
                AI Services
              </Link>
              <Link to="/contact" className="block text-foreground hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <motion.div {...fadeIn}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight mb-6">
              AI that <span className="font-semibold">delivers</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              From strategy to production - we help organisations adopt AI that works.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-accent-foreground bg-accent hover:bg-accent/90 transition-colors rounded"
            >
              Start a conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 md:py-20 bg-muted/40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div {...fadeIn}>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              AI adoption is easy to start, hard to sustain. Without alignment between strategy and execution,
              initiatives fragment - pilots that don't scale, tools that don't stick, value that never lands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Two Pillars */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Two pillars. One outcome.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategy without execution is just a deck. Execution without strategy is just a demo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* IntentOps Card */}
            <motion.div
              {...fadeIn}
              className="bg-card border border-border rounded p-8 md:p-10"
            >
              <div className="inline-block bg-primary text-primary-foreground px-4 py-1.5 rounded text-sm font-medium mb-6">
                IntentOps
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                Your real-time control layer for AI-era delivery.
              </h3>
              <p className="text-lg text-accent font-medium mb-4">
                See where you're drifting. Act before it's too late.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                AI adoption is consensus. Aligned execution is competitive advantage. IntentOps ensures your AI initiatives connect to real business value - with governance that enables rather than blocks.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">Align AI efforts to measurable outcomes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">Establish governance that enables speed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">Detect drift before it costs you</span>
                </li>
              </ul>
            </motion.div>

            {/* Actuate Card */}
            <motion.div
              {...fadeIn}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card border border-border rounded p-8 md:p-10"
            >
              <div className="inline-block bg-accent text-accent-foreground px-4 py-1.5 rounded text-sm font-medium mb-6">
                Actuate
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                Your AI-native execution engine.
              </h3>
              <p className="text-lg text-accent font-medium mb-4">
                From raw intent to production-ready prototypes.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We don't do PowerPoints. We ship working AI that delivers. From problem to product, from process to intelligence - Actuate builds what others only talk about.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">From prototype to production - fast</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">Process automation with AI at the core</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">Production-grade prompt engineering</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How They Connect */}
      <section className="py-16 md:py-20 bg-muted/40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Better together
            </h2>

            {/* Simple visual flow */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8">
              <div className="px-6 py-3 bg-primary text-primary-foreground rounded font-medium">
                IntentOps
              </div>
              <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90 md:rotate-0" />
              <div className="px-6 py-3 bg-accent text-accent-foreground rounded font-medium">
                Actuate
              </div>
              <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90 md:rotate-0" />
              <div className="px-6 py-3 bg-foreground text-background rounded font-medium">
                Results
              </div>
            </div>

            <p className="text-lg text-foreground leading-relaxed max-w-2xl mx-auto">
              IntentOps ensures you're building the right thing. Actuate ensures you build it right.
              Together, they close the gap between AI ambition and AI that actually works in your organisation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to make AI work?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Whether you're starting fresh or scaling what works, we can help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium bg-white text-primary hover:bg-gray-100 transition-colors rounded"
            >
              Start a conversation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer
        ctaText=""
        ctaDescription=""
        ctaButtonText=""
        showCta={false}
      />
    </div>
  );
}

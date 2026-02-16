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
              Execution isn't the<br />constraint anymore.
            </h1>
            <p className="text-xl md:text-2xl text-accent font-medium mb-4">
              Alignment is.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              AI can build faster than you can decide what to build. The new bottleneck isn't delivery capacity - it's knowing what to activate, why, and how to keep it aligned once it's live.
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
            <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-6">
              If your clarity is off by 5%, AI will amplify it by 500%.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Speed without intent isn't innovation - it's waste, accelerated. The new failure mode isn't late delivery. It's instant delivery of the wrong things. When every exec's "great idea" can hit production overnight, economic discipline becomes survival.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Shift */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              The craft didn't disappear. It moved.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Upstream</p>
                <p className="text-lg text-foreground font-medium">Strategic intent</p>
                <p className="text-sm text-muted-foreground mt-2">Defining value, clarity, purpose, alignment</p>
              </div>
              <div className="p-6 border-y md:border-y-0 md:border-x border-border">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Middle</p>
                <p className="text-lg text-foreground font-medium">Now ambient</p>
                <p className="text-sm text-muted-foreground mt-2">Build & test - accelerated, spec-driven, AI-native</p>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Downstream</p>
                <p className="text-lg text-foreground font-medium">The new frontier</p>
                <p className="text-sm text-muted-foreground mt-2">Assurance, governance, observability, learning loops</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Two Pillars */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Two capabilities. One control layer.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategy without execution is just a deck. Execution without alignment is just accelerated waste.
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
                Cognitive sovereignty for the AI era.
              </h3>
              <p className="text-lg text-accent font-medium mb-4">
                Retain the ability to steer. Scale without it, and you don't own the outcome.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                When AI systems design, decide, build and act, the risk is no longer loss of data - it's loss of intent, reasoning and accountability. IntentOps is your real-time control layer: connecting AI initiatives to measurable value, with governance that enables rather than blocks.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">Why did the system do this? Who set the rules? Who intervenes when it drifts?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">Compliance as architecture, not documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">Detect drift before it becomes cognitive debt</span>
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
                From spec to production. No slideshows.
              </h3>
              <p className="text-lg text-accent font-medium mb-4">
                Don't like it? Rip it up and start again. In minutes.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                AI-DLC means software is disposable like infrastructure became with IaC. Write the spec. Generate the product. Deploy it. Iterate. Your differentiators become your data, your clarity of intent, and your ability to steer. Actuate builds what others only talk about.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">Prototype to production while you're still in sprint planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">AI-native process automation - not faster automation of broken processes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">Behaviour-first, spec-driven development</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cognitive Debt Warning */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              Cognitive debt is the new technical debt.
            </h2>
            <div className="bg-muted/50 border-l-4 border-accent p-6 rounded-r mb-8">
              <p className="text-foreground leading-relaxed">
                While AI use is democratised across the enterprise, its risks aren't. Code that works but nobody can explain why. Automations running critical systems with zero docs. AI models making decisions we can't trace. Critical business logic buried in tools nobody owns.
              </p>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Yes, AI helps you do things faster. But velocity without discipline is just faster chaos. The $2 trillion in global tech debt isn't a backlog of code - it's a backlog of bad decisions. AI will accelerate both outcomes and debt. You choose which.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How They Connect */}
      <section className="py-16 md:py-20 bg-muted/40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              One loop. Intent to outcome.
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
                Value
              </div>
            </div>

            <p className="text-lg text-foreground leading-relaxed max-w-2xl mx-auto">
              The next era of advantage belongs to organisations that connect strategic intent, intelligent execution, and real-time value assurance into one loop. Don't just modernise your systems. Modernise your intent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Forget your AI strategy.
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium mb-6">
              Where's your Intent Alignment strategy?
            </p>
            <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              The question isn't how fast you can build. It's why you're building, and how quickly you can prove it worked.
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

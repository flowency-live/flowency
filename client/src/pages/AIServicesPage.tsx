import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, ArrowRight, Target, Shield } from "lucide-react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { ThemeToggle } from "@/components/ThemeToggle";
import Footer from "@/components/Footer";

export default function AIServicesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI-DLC - AI Delivery Life Cycle | IntentOps & Actuate",
    "provider": {
      "@type": "Organization",
      "name": "Flowency",
    },
    "description": "AI-DLC keeps delivery systems aligned when AI builds faster than you can decide. IntentOps spans both frontiers (upstream intent, downstream governance). Actuate handles scalable AI-native delivery.",
    "serviceType": "AI Delivery Consulting",
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
        title="AI-DLC - AI Delivery Life Cycle | Flowency"
        description="AI-DLC keeps delivery systems aligned when AI builds faster than you can decide. IntentOps for upstream intent and downstream governance. Actuate for scalable AI-native delivery."
        keywords="AI-DLC, AI delivery life cycle, IntentOps, Actuate, AI governance, delivery systems, AI alignment, enterprise AI"
        canonicalUrl="https://flowency.co.uk/ai-services"
        structuredData={structuredData}
      />

      {/* Navigation - Full-width style with centered links */}
      <nav className="fixed top-0 w-full bg-background/98 backdrop-blur-sm z-50 border-b border-border">
        <div className="flex items-center justify-between h-16 px-6 lg:px-12">
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
            <Link to="/#approach" className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-foreground after:transition-all after:duration-300">
              Approach
            </Link>
            <Link to="/#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-foreground after:transition-all after:duration-300">
              Services
            </Link>
            <Link to="/ai-services" className="text-sm text-accent font-medium relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-accent">
              AI-DLC
            </Link>
          </div>

          {/* Theme Toggle & CTA - Right */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link
              to="/contact"
              className="px-5 py-2 text-sm font-medium text-accent-foreground bg-accent hover:bg-accent/90 transition-colors rounded-md"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground p-2"
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
                AI-DLC
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
            <p className="text-sm uppercase tracking-widest text-accent font-medium mb-4">
              AI Delivery Life Cycle
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight mb-6">
              Execution isn't the<br />constraint anymore.
            </h1>
            <p className="text-xl md:text-2xl text-accent font-medium mb-4">
              Alignment is.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              AI-DLC is how you keep delivery systems aligned when AI builds faster than you can decide. The bottleneck isn't capacity - it's knowing what to activate, why, and how to keep it aligned once it's live.
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
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Speed without intent isn't innovation - it's waste, accelerated. The new failure mode isn't late delivery. It's instant delivery of the wrong things. When every exec's "great idea" can hit production overnight, economic discipline becomes survival.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
            >
              Sound familiar? Let's talk about your alignment gaps.
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* The Shift */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
              The craft didn't disappear. It moved.
            </h2>

            {/* Three column layout with emphasis on frontiers */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 items-stretch mb-8">

              {/* Upstream Frontier - PROMINENT */}
              <div className="bg-accent/10 border-2 border-accent rounded-lg p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Target className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-accent font-semibold">Upstream</p>
                    <p className="text-lg font-bold text-foreground">Frontier</p>
                  </div>
                </div>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Intent & clarity
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Prioritisation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Economics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Alignment
                  </li>
                </ul>
              </div>

              {/* Middle - Original style but slightly muted */}
              <div className="p-6 border-y md:border-y-0 md:border-x border-border flex flex-col justify-center text-center opacity-60">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Middle</p>
                <p className="text-lg text-foreground font-medium">Now ambient</p>
                <p className="text-sm text-muted-foreground mt-2">Build & test - accelerated, spec-driven, AI-native</p>
              </div>

              {/* Downstream Frontier - PROMINENT */}
              <div className="bg-accent/10 border-2 border-accent rounded-lg p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-accent font-semibold">Downstream</p>
                    <p className="text-lg font-bold text-foreground">Frontier</p>
                  </div>
                </div>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Assurance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Governance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Observability
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Learning loops
                  </li>
                </ul>
              </div>
            </div>

            {/* "Where you need us" banner */}
            <div className="bg-primary text-primary-foreground py-5 px-6 rounded-lg text-center">
              <p className="font-semibold text-lg mb-2">This is where you need us.</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm text-primary-foreground/90 hover:text-primary-foreground underline underline-offset-2"
              >
                Book a discovery call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our AI-DLC Approach */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our AI-DLC Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Two capabilities. One control layer across both frontiers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* IntentOps Card */}
            <motion.div
              {...fadeIn}
              className="bg-card border border-border rounded p-8 md:p-10 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-block bg-primary text-primary-foreground px-4 py-1.5 rounded text-sm font-medium">
                  IntentOps
                </div>
                <div className="flex gap-1">
                  <span className="px-2 py-0.5 bg-accent/15 text-accent text-xs rounded border border-accent/30">Upstream</span>
                  <span className="px-2 py-0.5 bg-accent/15 text-accent text-xs rounded border border-accent/30">Downstream</span>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                Cognitive sovereignty for the AI era.
              </h3>
              <p className="text-lg text-accent font-medium mb-4">
                Retain the ability to steer. Scale without it, and you don't own the outcome.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                IntentOps spans both frontiers: upstream for clarifying intent, prioritisation and economics; downstream for governance, observability and learning loops. Your real-time control layer for connecting AI initiatives to measurable value.
              </p>
              <ul className="space-y-3 mb-8">
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
              <div className="mt-auto">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  Talk to us about IntentOps
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Actuate Card */}
            <motion.div
              {...fadeIn}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card border border-border rounded p-8 md:p-10 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-block bg-accent text-accent-foreground px-4 py-1.5 rounded text-sm font-medium">
                  Actuate
                </div>
                <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded border border-border">The Middle</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                From spec to production. No slideshows.
              </h3>
              <p className="text-lg text-accent font-medium mb-4">
                Don't like it? Rip it up and start again. In minutes.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Actuate handles the ambient middle - AI-native delivery at scale. Software becomes disposable like infrastructure did with IaC. Write the spec. Generate. Deploy. Iterate. Your differentiators become your data, your clarity of intent, and your ability to steer.
              </p>
              <ul className="space-y-3 mb-8">
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
              <div className="mt-auto">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  See how Actuate delivers
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
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
            <p className="text-lg text-muted-foreground leading-relaxed text-center mb-8">
              Yes, AI helps you do things faster. But velocity without discipline is just faster chaos. The $2 trillion in global tech debt isn't a backlog of code - it's a backlog of bad decisions. AI will accelerate both outcomes and debt. You choose which.
            </p>
            <div className="text-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground hover:bg-accent/90 font-medium rounded transition-colors"
              >
                Request a cognitive debt audit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
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

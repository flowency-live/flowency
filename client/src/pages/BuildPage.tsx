import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function BuildPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Flowency Build",
    "url": "https://flowency.co.uk/build",
    "description": "We act as your internal CTO and delivery team, building the digital operating system your business should have had years ago.",
    "provider": {
      "@type": "Organization",
      "name": "Flowency"
    },
    "serviceType": ["Business Operating Systems", "Digital Transformation", "CTO Services"],
    "areaServed": "GB"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Build - Flowency"
        description="We act as your internal CTO and delivery team, building the digital operating system your business should have had years ago."
        structuredData={structuredData}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/">
                <img
                  src="/assets/flowency-logo-dark.svg"
                  alt="Flowency"
                  className="h-8 w-auto cursor-pointer hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-foreground hover:text-accent transition-colors">
                Home
              </Link>
              <a
                href="https://flowency.build"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
              >
                Full Site
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-accent p-2"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              <Link to="/" className="block py-2 text-foreground hover:text-accent transition-colors">
                Home
              </Link>
              <a
                href="https://flowency.build"
                className="block py-2 text-foreground hover:text-accent transition-colors"
              >
                Full Site
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Geometric Background Elements */}
        <div className="absolute top-10 right-10 w-[500px] h-[600px] bg-gradient-to-br from-purple/10 to-accent/20 rounded-[4rem] blur-2xl rotate-12" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple/20 rounded-3xl blur-xl" />
        <div className="absolute bottom-20 -left-20 w-[400px] h-[500px] bg-accent/10 rounded-[4rem] blur-2xl -rotate-6" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Your Business.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-accent">
                Digitised Properly.
              </span>{' '}
              Finally.
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              You've built your business. Now it deserves its own operating system.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Most SMEs run on spreadsheets, inboxes and heroic memory. You've built something real - but your systems haven't kept up.
            </p>

            {/* GOLD STACK: CTO Positioning */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="pt-4"
            >
              <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-accent">
                We are your internal CTO and delivery team.
              </p>
            </motion.div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We build the digital operating system your business should have had years ago. Tailored to how you actually work. Delivered in days, not months.
            </p>

            {/* GOLD STACK: Core Pillars */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="pt-4"
            >
              <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-accent">
                Clarity + Speed + Capability.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            >
              <a
                href="https://flowency.build"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-accent text-accent-foreground text-lg font-semibold hover:bg-accent/90 transition-all hover:scale-105 group"
              >
                See How We Build Business Operating Systems
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Truth Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-center">
              The truth nobody tells SMEs
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                Spreadsheets feel comfortable until they become a trap.
              </p>

              <p>
                Manual updates. Copy-paste between systems. Inconsistent data. No real visibility. Decisions made on gut feel because the numbers aren't there.
              </p>

              <p>
                Your team is firefighting. You're compensating for systems that don't exist. Everything feels harder than it should.
              </p>

              <div className="text-center py-4">
                <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-accent">
                  That's the lie we're here to correct.
                </p>
              </div>

              <p className="text-center text-xl">
                Our superpower isn't AI. It's making digital transformation accessible to businesses like yours.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-center">
              What we build
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Custom CRM shaped around your actual sales process',
                'Operational dashboards that replace spreadsheets forever',
                'Job, project or case management with real-time margin visibility',
                'Stock, asset and equipment tracking',
                'Automated reporting, invoicing and compliance',
                'Scheduling, booking and workflow tools',
                'AI assistants tuned to your business and your data',
                'Mobile and web apps for your team and your customers',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 border border-border hover:border-accent/30 transition-all duration-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/80">{item}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center pt-8">
              <p className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-accent">
                If you can describe the problem, we can build the system.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to build your business operating system?
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                Start with a working session. No pressure. No sales pitch.
              </p>

              <p>
                Bring your biggest operational headache.
                <br />
                We'll show you what it looks like as a simple, fast, tailored system.
              </p>

              <div className="pt-4">
                <p className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-accent">
                  You leave with clarity and a working prototype - before spending anything.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <a
                href="https://flowency.build"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-accent text-accent-foreground text-lg font-semibold hover:bg-accent/90 transition-all hover:scale-105 group"
              >
                Explore Flowency Build
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

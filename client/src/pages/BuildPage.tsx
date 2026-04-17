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
        <div className="max-content">
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

      {/* Hero Section - Dark with subtle depth */}
      <section className="section-gradient-hero pt-40 pb-32 md:pt-48 min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Subtle visual elements - reduced opacity */}
        <div className="absolute top-10 right-10 w-[500px] h-[600px] bg-white/[0.03] rounded-[4rem] blur-3xl rotate-12" />
        <div className="absolute bottom-20 -left-20 w-[400px] h-[500px] bg-white/[0.02] rounded-[4rem] blur-2xl -rotate-6" />

        <div className="relative max-content text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* Headline */}
            <h1 className="headline text-white" style={{ fontSize: 'clamp(3.5rem, 9vw, 5.5rem)', lineHeight: 0.9 }}>
              <span className="block">YOUR BUSINESS.</span>
              <span className="block text-accent">DIGITISED PROPERLY.</span>
              <span className="block text-white/50">FINALLY.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-white/70 max-w-xl mx-auto">
              You've built your business. Now it deserves its own operating system.
            </p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <a
                href="https://flowency.build"
                className="inline-flex items-center gap-3 text-lg font-semibold text-white border-b-2 border-white/30 pb-1 hover:border-white transition-colors"
              >
                See How We Build Business Operating Systems
                <span className="text-xl">→</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pause Section - The Problem (Dark) */}
      <section className="section-dark section-pause">
        <div className="max-content">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl text-white/70 text-center max-w-3xl mx-auto"
          >
            Most SMEs run on spreadsheets, inboxes and heroic memory. You've built something real - but your systems haven't kept up.
          </motion.p>
        </div>
      </section>

      {/* Band - Core Pillars (Accent Band) */}
      <section className="section-band-accent py-0">
        <div className="py-16 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="headline-secondary text-white"
          >
            WE ARE YOUR INTERNAL CTO AND DELIVERY TEAM.
          </motion.p>
        </div>
        <div className="band-numbered border-t border-white/10">
          {[
            { num: "01", label: "Clarity" },
            { num: "02", label: "Speed" },
            { num: "03", label: "Capability" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="band-numbered-item py-10"
            >
              <div className="band-number text-white">{item.num}</div>
              <div className="band-label text-white">{item.label}</div>
            </motion.div>
          ))}
        </div>
        <div className="py-12 text-center">
          <p className="text-lg text-white/70 max-w-2xl mx-auto px-6">
            We build the digital operating system your business should have had years ago. Tailored to how you actually work. Delivered in days, not months.
          </p>
        </div>
      </section>

      {/* The Truth Section (Dark) */}
      <section className="section-dark section-spacing-lg">
        <div className="max-content max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="headline-secondary text-white mb-12">
              THE TRUTH NOBODY TELLS SMES
            </h2>

            <div className="space-y-8 body-text text-white/60 mb-12">
              <p className="text-xl text-white/80">
                Spreadsheets feel comfortable until they become a trap.
              </p>

              <p>
                Manual updates. Copy-paste between systems. Inconsistent data. No real visibility. Decisions made on gut feel because the numbers aren't there.
              </p>

              <p>
                Your team is firefighting. You're compensating for systems that don't exist. Everything feels harder than it should.
              </p>
            </div>

            <div className="divider-line mb-12" />

            <div className="text-center">
              <p className="headline-tertiary text-[hsl(18,55%,55%)] mb-6">
                That's the lie we're here to correct.
              </p>
              <p className="text-lg text-white">
                Our superpower isn't AI. It's making digital transformation accessible to businesses like yours.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Build Section (Light Reset) */}
      <section className="section-light section-spacing">
        <div className="max-content">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="headline-secondary text-gray-900 mb-6">
              WHAT WE BUILD
            </h2>
          </motion.div>

          <div className="cards-numbered grid md:grid-cols-2 gap-0 border border-gray-200 bg-white mb-16">
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
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.4 }}
                className={`p-6 flex items-start gap-4 ${
                  i < 6 ? 'border-b' : ''
                } ${i % 2 === 0 ? 'md:border-r' : ''} border-gray-200`}
              >
                <CheckCircle2 className="w-5 h-5 text-[hsl(18,55%,48%)] flex-shrink-0 mt-0.5" />
                <p className="body-text text-gray-800">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="headline-tertiary text-[hsl(18,55%,45%)]">
              If you can describe the problem, we can build the system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DOMINANT CTA Section - Accent Band */}
      <section className="section-band-accent py-32 relative overflow-hidden">
        <div className="max-content relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="headline text-white mb-8" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
              READY TO BUILD YOUR<br />BUSINESS OPERATING SYSTEM?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-6">
              Start with a working session. No pressure. No sales pitch.
            </p>
            <p className="text-lg text-white/60 max-w-xl mx-auto mb-12">
              Bring your biggest operational headache. We'll show you what it looks like as a simple, fast, tailored system. You leave with clarity and a working prototype - before spending anything.
            </p>
            <a
              href="https://flowency.build"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-semibold bg-white text-[hsl(18,55%,40%)] hover:bg-white/90 transition-all duration-300"
            >
              Explore Flowency Build
              <span className="text-xl">→</span>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

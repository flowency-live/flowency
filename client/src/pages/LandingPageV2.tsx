import { motion } from "framer-motion";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { ThemeToggle } from "@/components/ThemeToggle";

// Dictionary Card Component - styled like physical business card
function DictionaryCard() {
  return (
    <div className="relative">
      {/* Card shadow/depth effect */}
      <div className="absolute inset-0 bg-black/20 rounded-lg transform translate-x-2 translate-y-2 blur-sm" />

      {/* Main card */}
      <div className="relative bg-white rounded-lg p-8 md:p-10 max-w-md shadow-xl border border-gray-200/50"
           style={{
             background: 'linear-gradient(145deg, #ffffff 0%, #f8f8f8 100%)',
             boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
           }}>
        {/* Subtle paper texture overlay */}
        <div className="absolute inset-0 rounded-lg opacity-30 pointer-events-none"
             style={{
               backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")'
             }} />

        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 tracking-tight">
            Flowency
          </h2>
          <p className="text-gray-500 text-sm mb-5 italic">
            /ˈflaʊənsi/ - noun
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            The quality or condition of being{" "}
            <span className="font-semibold text-gray-900">fluent in flow</span>, achieving{" "}
            <span className="text-accent font-semibold">optimal flow</span>{" "}
            in your delivery organisation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function LandingPageV2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Flowency",
    "url": "https://flowency.co.uk",
    "description": "Delivery optimisation and capability uplift consultancy helping organisations achieve flow",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@flowency.co.uk",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.linkedin.com/company/flowency/"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GB"
    },
    "areaServed": "GB",
    "serviceType": ["Delivery Optimisation", "Capability Development", "Work System Design", "AI-Ready Process Design"]
  };

  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation - Full-width style */}
      <nav className="fixed top-0 w-full bg-background/98 backdrop-blur-sm z-50 border-b border-border">
        <div className="flex justify-between items-center h-16 px-6 lg:px-12">
          <Link to="/">
            {/* Light mode logo */}
            <img
              src="/assets/flowency-logo-light.svg"
              alt="Flowency"
              className="h-9 w-auto cursor-pointer hover:opacity-70 transition-opacity dark:hidden"
            />
            {/* Dark mode logo */}
            <img
              src="/assets/flowency-logo-dark.svg"
              alt="Flowency"
              className="h-9 w-auto cursor-pointer hover:opacity-70 transition-opacity hidden dark:block"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#approach" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Approach</a>
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <Link to="/ai-services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">AI-DLC</Link>
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
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-6 py-4 space-y-3">
              <a href="#approach" className="block text-sm text-muted-foreground hover:text-foreground">Approach</a>
              <a href="#services" className="block text-sm text-muted-foreground hover:text-foreground">Services</a>
              <Link to="/ai-services" className="block text-sm text-muted-foreground hover:text-foreground">AI-DLC</Link>
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

      <SEOHead
        title="Flowency - Delivery Optimisation & Capability Consultancy"
        description="We help organisations fix friction in how work moves. Delivery optimisation, capability uplift, and lasting change across product, operations, and beyond."
        keywords="delivery optimisation, capability development, flow, lean, agile, AI-ready processes, consultancy, UK"
        ogTitle="Flowency - Building Organisations That Flow"
        ogDescription="Delivery optimisation and capability consultancy helping UK organisations achieve sustainable flow."
        canonicalUrl="https://flowency.co.uk"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div {...fadeIn}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-[1.1] mb-6">
                Building organisations<br />
                that <span className="font-semibold">flow</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
                Delivery optimisation. Capability uplift. Real results.
              </p>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 text-base font-medium text-accent-foreground bg-accent hover:bg-accent/90 transition-colors rounded"
              >
                Start a conversation
              </Link>
            </motion.div>

            <motion.div {...fadeIn} className="hidden lg:flex justify-end">
              <DictionaryCard />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Anti-Theatre Statement */}
      <section className="py-12 md:py-16 bg-muted/40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Digital transformation without the theatre.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="approach" className="py-20 md:py-28 bg-muted/40">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <div className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-base font-medium mb-6">
              <span className="text-accent">Adaptive</span> Delivery
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Approach
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Framework agnostic, method diverse, AI-aware, value focused.
            </p>
            <p className="text-base md:text-lg text-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Our adaptive delivery approach is framework agnostic and method diverse, drawing from the best bits of agile, lean, waterfall and JFDI - combined with years of experience and hard earned insights. What makes us different? We apply the most contextually relevant solutions for your specific organisational context and maturity, whether that's optimising product delivery or transforming workflows across HR, customer service, and financial processes. As AI reshapes how work flows through organisations, this contextual adaptation expertise becomes your competitive advantage.
            </p>
          </motion.div>

          {/* Quote Block */}
          <motion.div {...fadeIn} className="bg-primary text-primary-foreground p-8 rounded max-w-4xl mx-auto mb-12 text-center">
            <p className="text-lg md:text-xl font-semibold">
              We won't tell you the way - we help you find <span className="text-accent">YOUR</span> way.
            </p>
          </motion.div>

          {/* 6-Point Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              { title: "Framework agnostic solutions", desc: "Adapt to your existing methodologies" },
              { title: "Method diverse expertise", desc: "Drawing from agile, lean, and beyond" },
              { title: "Value-focused outcomes", desc: "Measurable business impact" },
              { title: "Contextually relevant approaches", desc: "Tailored to your organisational maturity" },
              { title: "Years of proven experience", desc: "Battle-tested insights and solutions" },
              { title: "Lasting transformational change", desc: "Sustainable improvements that stick" }
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                className="bg-card p-5 rounded border border-border"
              >
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center mb-3">
                  <svg className="w-4 h-4 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-semibold text-card-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Help You Achieve <span className="text-accent">Flow</span>
            </h2>
            <p className="text-lg text-foreground font-medium mb-4 max-w-3xl mx-auto">
              We start with friction. Then apply method, intelligence, and capability to turn flow into value.
            </p>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Four core service areas designed to transform your delivery capabilities and drive lasting organisational change across all departments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div {...fadeIn} className="bg-card rounded p-8 border border-border">
              <div className="w-12 h-12 bg-primary rounded flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">Work System Optimisation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Streamline delivery systems, operational workflows, and cross-departmental processes. Includes our IntentOps framework for managing cognitive debt as AI adoption accelerates. Draws on Actuate to embed automation where it delivers measurable results - whether in product delivery, HR, finance, or customer operations.
              </p>
            </motion.div>

            <motion.div {...fadeIn} className="bg-card rounded p-8 border border-border">
              <div className="w-12 h-12 bg-accent rounded flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">Value Outcome Leadership</h3>
              <p className="text-muted-foreground leading-relaxed">
                Focus on measurable business outcomes across all departments, not just product delivery. Drive strategic alignment and demonstrate tangible ROI whether optimising development pipelines or automating customer support workflows.
              </p>
            </motion.div>

            <motion.div {...fadeIn} className="bg-card rounded p-8 border border-border">
              <div className="w-12 h-12 bg-primary rounded flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">AI-Enabled Process Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Apply proven delivery optimisation principles to any workflow being transformed by AI. From customer service automation to financial reporting, we help you redesign processes that combine human judgement with intelligent automation.
              </p>
            </motion.div>

            <motion.div {...fadeIn} className="bg-card rounded p-8 border border-border">
              <div className="w-12 h-12 bg-secondary rounded flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-secondary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">Organisational Flow Intelligence</h3>
              <p className="text-muted-foreground leading-relaxed">
                Implement systems that provide visibility into work flow across your entire organisation. As AI creates new bottlenecks and opportunities, make the invisible visible across every department and workflow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Deliver Results */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Deliver Results
            </h2>
            <p className="text-lg text-muted-foreground">Our proven three-step methodology</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div {...fadeIn} className="text-center bg-card p-6 rounded border border-border">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">Visualise</h3>
              <p className="text-muted-foreground">
                Make your delivery system visible and understand the current state of flow across all levels.
              </p>
            </motion.div>

            <motion.div {...fadeIn} className="text-center bg-card p-6 rounded border border-border">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">Optimise</h3>
              <p className="text-muted-foreground">
                Identify bottlenecks, eliminate waste, and create smooth value flow throughout your organisation.
              </p>
            </motion.div>

            <motion.div {...fadeIn} className="text-center bg-card p-6 rounded border border-border">
              <div className="w-16 h-16 bg-[hsl(var(--flow-blue-dark))] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">Sustain</h3>
              <p className="text-muted-foreground">
                Build internal capability and ensure continuous improvement becomes part of your organisational DNA.
              </p>
            </motion.div>
          </div>

          <motion.div {...fadeIn} className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              We start where you are, bring clarity and stability, and optimise from there. When you're ready, we activate the tools, automation, and intelligence to take you further.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Flow Domains */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Fluent in FLOW. Applied where it matters.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <motion.div {...fadeIn} className="bg-card rounded p-6 border border-border hover:border-blue-500/50 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">Delivery Flow</h3>
                <p className="text-sm text-muted-foreground">Focused execution, faster throughput, reduced WIP</p>
              </motion.div>

              <motion.div {...fadeIn} className="bg-card rounded p-6 border border-border hover:border-amber-500/50 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-xl">£</span>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">Flow Economics</h3>
                <p className="text-sm text-muted-foreground">Value-centred prioritisation and cost-of-delay insight</p>
              </motion.div>

              <motion.div {...fadeIn} className="bg-card rounded p-6 border border-border hover:border-emerald-500/50 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">Team Flow</h3>
                <p className="text-sm text-muted-foreground">Adaptive collaboration across complex systems</p>
              </motion.div>
            </div>

            <div className="max-w-3xl mx-auto">
              <p className="text-xl font-semibold text-foreground mb-4">Immediate impact and sticky change.</p>
              <p className="text-lg text-muted-foreground">
                We deliver sustainable improvements that reduce lead times, increase value throughput, and align delivery to what matters.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Logos - Two rows, opposite directions, colour */}
      {/* Always light background for coloured logos visibility */}
      <section className="py-12 bg-gray-100 dark:bg-gray-100 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-600 mb-6">Organisations we've helped move faster</p>

          {/* Row 1 - Left to right */}
          <div className="relative overflow-hidden py-2 mb-4">
            <div className="flex animate-scroll whitespace-nowrap">
              <div className="flex items-center gap-16 flex-shrink-0">
                <img src="/assets/images/ClientLogos/668fd36112697a494027a019_5.png" alt="Client" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
                <img src="/assets/images/ClientLogos/668fd3613f99311183fe084f_1-p-500.png" alt="Client" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
                <img src="/assets/images/ClientLogos/668fd3614791016018169276_2-p-500.png" alt="Client" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
                <img src="/assets/images/ClientLogos/668fd3615f621d8571b090f0_8-p-500.png" alt="Client" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
                <img src="/assets/images/ClientLogos/668fd36164dca1b9c365d5c3_6-p-500.png" alt="Client" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
              </div>
              <div className="flex items-center gap-16 flex-shrink-0 ml-16">
                <img src="/assets/images/ClientLogos/668fd36112697a494027a019_5.png" alt="Client" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
                <img src="/assets/images/ClientLogos/668fd3613f99311183fe084f_1-p-500.png" alt="Client" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
                <img src="/assets/images/ClientLogos/668fd3614791016018169276_2-p-500.png" alt="Client" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
                <img src="/assets/images/ClientLogos/668fd3615f621d8571b090f0_8-p-500.png" alt="Client" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
                <img src="/assets/images/ClientLogos/668fd36164dca1b9c365d5c3_6-p-500.png" alt="Client" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
              </div>
            </div>
          </div>

          {/* Row 2 - Right to left */}
          <div className="relative overflow-hidden py-2">
            <div className="flex animate-scroll-reverse whitespace-nowrap">
              <div className="flex items-center gap-16 flex-shrink-0">
                <img src="/assets/images/ClientLogos/668fd3616ed4cd3d5a7e2e4f_7.png" alt="Client" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
                <img src="/assets/images/ClientLogos/668fd361b4e0d8db10d03d54_9-p-500.png" alt="Client" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
                <img src="/assets/images/ClientLogos/668fd361c6ae39ccd09de9d6_10.png" alt="Client" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
                <img src="/assets/images/ClientLogos/668fd361fd70e42e1c1db0a9_4-p-500.png" alt="Client" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
                <img src="/assets/images/ClientLogos/668fd361ff36d3ec709cb15e_3-p-500.png" alt="Client" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
              </div>
              <div className="flex items-center gap-16 flex-shrink-0 ml-16">
                <img src="/assets/images/ClientLogos/668fd3616ed4cd3d5a7e2e4f_7.png" alt="Client" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
                <img src="/assets/images/ClientLogos/668fd361b4e0d8db10d03d54_9-p-500.png" alt="Client" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
                <img src="/assets/images/ClientLogos/668fd361c6ae39ccd09de9d6_10.png" alt="Client" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
                <img src="/assets/images/ClientLogos/668fd361fd70e42e1c1db0a9_4-p-500.png" alt="Client" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
                <img src="/assets/images/ClientLogos/668fd361ff36d3ec709cb15e_3-p-500.png" alt="Client" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer
        ctaText="Ready to improve how work flows?"
        ctaDescription="Let's talk."
        ctaButtonText="Get in touch"
      />
    </div>
  );
}

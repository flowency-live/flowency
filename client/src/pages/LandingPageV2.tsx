import { motion } from "framer-motion";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";
import PBIImage from "@assets/PBI.png";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ScrollProgress from "@/components/ScrollProgress";

export default function LandingPageV2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Flowency",
    "url": "https://flowency.co.uk",
    "description": "Building organisations that flow - delivery optimisation and capability uplift for the AI era",
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
    "serviceType": ["Delivery Optimisation", "AI-Era Delivery", "Capability Development", "Flow Intelligence"]
  };

  return (
    <div className="min-h-screen bg-background">
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
              <Link to="/" className="text-electric hover:text-accent transition-colors font-medium">
                Home V1
              </Link>
              <a href="#home" className="text-foreground hover:text-accent transition-colors">Home</a>
              <Link to="/actuate" className="text-foreground hover:text-accent transition-colors">
                Actuate
              </Link>
              <Link to="/intentops" className="text-foreground hover:text-accent transition-colors">
                IntentOps
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="text-muted-foreground hover:text-electric transition-colors"
              >
                Contact
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-accent transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
            
            {/* Desktop contact button */}
            <button 
              onClick={() => setIsContactModalOpen(true)} 
              className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-accent hover:bg-accent/90 transition-colors"
            >
              Contact us
            </button>
          </div>
        </div>
        
        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-4 py-2 space-y-1">
              <Link to="/" className="block px-3 py-2 text-electric hover:text-accent transition-colors font-medium">
                Home V1
              </Link>
              <a href="#home" className="block px-3 py-2 text-foreground hover:text-accent transition-colors">Home</a>
              <Link to="/actuate" className="block px-3 py-2 text-foreground hover:text-accent transition-colors">
                Actuate
              </Link>
              <Link to="/intentops" className="block px-3 py-2 text-electric hover:text-accent transition-colors font-medium">
                IntentOps
              </Link>
            </div>
          </div>
        )}
      </nav>

      <ScrollProgress />
      <SEOHead
        title="Flowency - AI-Native Execution Engine | From Strategy to Intelligence"
        description="Transform your organisation's AI adoption with Flowency's cognitive debt management solutions. Expert consultancy bridging strategy and execution for enterprise AI implementation."
        keywords="AI adoption, cognitive debt, enterprise AI, AI strategy, AI implementation, delivery optimisation, IntentOps, Actuate, UK AI consultancy"
        ogTitle="Flowency - AI-Native Execution Engine"
        ogDescription="Expert AI consultancy helping UK enterprises bridge strategy and execution. Specialising in cognitive debt management and AI adoption transformation."
        canonicalUrl="https://flowency.co.uk"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 text-foreground leading-tight">
              Building Organisations<br />That <span className="text-electric">Flow</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 md:mb-12 max-w-3xl mx-auto text-muted-foreground leading-relaxed">
              Delivery optimisation. Capability uplift. Real results.
            </p>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="inline-block bg-accent hover:bg-[hsl(16,100%,45%)] text-white px-8 md:px-10 py-4 md:py-5 rounded-lg text-lg md:text-xl font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start Here
            </button>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-6">
              Flowency helps organisations fix the friction in how work moves.
            </p>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-6">
              We diagnose delivery problems, simplify workflows, and build capability that lasts.
            </p>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed">
              We improve performance across product, operations, HR, finance, engineering — anywhere flow matters.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Flowency Stack */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              The Flowency Stack
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Framework agnostic, method diverse, AI-aware, value focused.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Clarity</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Make work visible, cut noise, align direction
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Flow</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Reduce friction, increase throughput, improve predictability
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-[hsl(var(--flow-blue-dark))] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Capability</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Build skills, confidence, and operating maturity that sticks
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-slate-700 p-8 md:p-10 rounded-2xl max-w-4xl mx-auto"
          >
            <p className="text-xl md:text-2xl font-semibold text-white text-center leading-relaxed">
              We won't tell you the way — we help you find <span className="text-accent">YOUR</span> way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              What We Do
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Four core capabilities that transform how work moves through your organisation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl hover:border-accent/50 transition-all"
            >
              <div className="flex items-start mb-4">
                <span className="text-4xl font-bold text-accent mr-4">01</span>
                <h3 className="text-2xl font-bold text-card-foreground mt-1">Work System Optimisation</h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                Simplifying delivery and operational systems across your organisation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl hover:border-accent/50 transition-all"
            >
              <div className="flex items-start mb-4">
                <span className="text-4xl font-bold text-accent mr-4">02</span>
                <h3 className="text-2xl font-bold text-card-foreground mt-1">Strategy to Operating Model Alignment</h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                Turning intent into ways of working people can actually run.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl hover:border-accent/50 transition-all"
            >
              <div className="flex items-start mb-4">
                <span className="text-4xl font-bold text-accent mr-4">03</span>
                <h3 className="text-2xl font-bold text-card-foreground mt-1">Capability & Leadership Development</h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                Coaching, training and uplift that strengthens teams and leaders.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl hover:border-accent/50 transition-all"
            >
              <div className="flex items-start mb-4">
                <span className="text-4xl font-bold text-accent mr-4">04</span>
                <h3 className="text-2xl font-bold text-card-foreground mt-1">AI-Ready Process & Flow Design</h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                Preparing workflows for automation, augmentation, and intelligence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Patterns */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Recognise the Pattern?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Three friction clusters that signal deeper flow problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-card p-8 rounded-xl shadow-lg border border-border hover:border-accent/50 transition-all"
            >
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Flow Friction</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Blockers surface late</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>WIP overload</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Too many priorities</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-card p-8 rounded-xl shadow-lg border border-border hover:border-accent/50 transition-all"
            >
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Delivery Instability</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Unpredictable timelines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Firefighting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Context switching</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-card p-8 rounded-xl shadow-lg border border-border hover:border-accent/50 transition-all"
            >
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Value Confusion</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Unclear ROI</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Slow decisions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Strategy/Execution drift</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-primary to-secondary text-white p-8 md:p-10 rounded-2xl text-center"
          >
            <p className="text-xl md:text-2xl font-semibold leading-relaxed">
              These patterns signal systemic flow problems. We diagnose root causes and implement sustainable solutions.
            </p>
          </motion.div>
        </div>
      </section>



      {/* How We Work */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">How We Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Visualise</h3>
              <p className="text-base text-muted-foreground">
                Make the flow visible.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Optimise</h3>
              <p className="text-base text-muted-foreground">
                Reduce the friction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[hsl(var(--flow-blue-dark))] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Sustain</h3>
              <p className="text-base text-muted-foreground">
                Make it stick.
              </p>
            </motion.div>
          </div>
        </div>
      </section>





      {/* AI-Era Delivery */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
              AI-Era Organisational Flow
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              <p>
                For over a decade, we've been optimising delivery systems. Kanban, lean flow, value stream mapping, team dynamics — these fundamentals don't change.
              </p>
              <p>
                What has changed is the operating environment. AI tools are reshaping how work moves through organisations. Not just in engineering teams — everywhere. Customer support. Finance. HR. Operations.
              </p>
              <p className="text-foreground font-semibold">
                The organisations that thrive aren't the ones with the most AI tools. They're the ones who understand flow.
              </p>
              <p>
                Our <Link to="/actuate" className="text-accent hover:underline font-semibold">Actuate</Link> capability brings AI-native delivery and intelligent automation.{" "}
                <Link to="/intentops" className="text-accent hover:underline font-semibold">IntentOps</Link> provides the alignment and governance layer.{" "}
                Together with Flowency's core capability, they form an adaptive operating stack for the AI era.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-8 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-medium text-muted-foreground mb-4">Organisations we've helped move faster</h3>

          {/* Continuous Ticker Tape */}
          <div className="relative overflow-hidden py-4">
            <div className="flex animate-scroll whitespace-nowrap">
              {/* First set of logos */}
              <div className="flex items-center gap-16 flex-shrink-0">
                <img src="/assets/images/ClientLogos/668fd36112697a494027a019_5.png" alt="Client" className="h-16 w-auto opacity-70 hover:opacity-90 transition-opacity flex-shrink-0 brightness-0 invert" />
                <img src="/assets/images/ClientLogos/668fd3613f99311183fe084f_1-p-500.png" alt="Client" className="h-16 w-auto opacity-70 hover:opacity-90 transition-opacity flex-shrink-0 brightness-0 invert" />
                <img src="/assets/images/ClientLogos/668fd3614791016018169276_2-p-500.png" alt="Client" className="h-16 w-auto opacity-70 hover:opacity-90 transition-opacity flex-shrink-0 brightness-0 invert" />
                <img src="/assets/images/ClientLogos/668fd3615f621d8571b090f0_8-p-500.png" alt="Client" className="h-16 w-auto opacity-70 hover:opacity-90 transition-opacity flex-shrink-0 brightness-0 invert" />
                <img src="/assets/images/ClientLogos/668fd36164dca1b9c365d5c3_6-p-500.png" alt="Client" className="h-16 w-auto opacity-70 hover:opacity-90 transition-opacity flex-shrink-0 brightness-0 invert" />
                <img src="/assets/images/ClientLogos/668fd3616ed4cd3d5a7e2e4f_7.png" alt="Client" className="h-16 w-auto opacity-70 hover:opacity-90 transition-opacity flex-shrink-0 brightness-0 invert" />
                <img src="/assets/images/ClientLogos/668fd361b4e0d8db10d03d54_9-p-500.png" alt="Client" className="h-16 w-auto opacity-70 hover:opacity-90 transition-opacity flex-shrink-0 brightness-0 invert" />
                <img src="/assets/images/ClientLogos/668fd361c6ae39ccd09de9d6_10.png" alt="Client" className="h-16 w-auto opacity-70 hover:opacity-90 transition-opacity flex-shrink-0 brightness-0 invert" />
                <img src="/assets/images/ClientLogos/668fd361fd70e42e1c1db0a9_4-p-500.png" alt="Client" className="h-16 w-auto opacity-70 hover:opacity-90 transition-opacity flex-shrink-0 brightness-0 invert" />
                <img src="/assets/images/ClientLogos/668fd361ff36d3ec709cb15e_3-p-500.png" alt="Client" className="h-16 w-auto opacity-70 hover:opacity-90 transition-opacity flex-shrink-0 brightness-0 invert" />
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center gap-16 flex-shrink-0 ml-16">
                <img src="/assets/images/ClientLogos/668fd36112697a494027a019_5.png" alt="Client" className="h-16 w-auto opacity-70 hover:opacity-90 transition-opacity flex-shrink-0 brightness-0 invert" />
                <img src="/assets/images/ClientLogos/668fd3613f99311183fe084f_1-p-500.png" alt="Client" className="h-16 w-auto opacity-70 hover:opacity-90 transition-opacity flex-shrink-0 brightness-0 invert" />
                <img src="/assets/images/ClientLogos/668fd3614791016018169276_2-p-500.png" alt="Client" className="h-16 w-auto opacity-70 hover:opacity-90 transition-opacity flex-shrink-0 brightness-0 invert" />
                <img src="/assets/images/ClientLogos/668fd3615f621d8571b090f0_8-p-500.png" alt="Client" className="h-16 w-auto opacity-70 hover:opacity-90 transition-opacity flex-shrink-0 brightness-0 invert" />
                <img src="/assets/images/ClientLogos/668fd36164dca1b9c365d5c3_6-p-500.png" alt="Client" className="h-16 w-auto opacity-70 hover:opacity-90 transition-opacity flex-shrink-0 brightness-0 invert" />
                <img src="/assets/images/ClientLogos/668fd3616ed4cd3d5a7e2e4f_7.png" alt="Client" className="h-16 w-auto opacity-70 hover:opacity-90 transition-opacity flex-shrink-0 brightness-0 invert" />
                <img src="/assets/images/ClientLogos/668fd361b4e0d8db10d03d54_9-p-500.png" alt="Client" className="h-16 w-auto opacity-70 hover:opacity-90 transition-opacity flex-shrink-0 brightness-0 invert" />
                <img src="/assets/images/ClientLogos/668fd361c6ae39ccd09de9d6_10.png" alt="Client" className="h-16 w-auto opacity-70 hover:opacity-90 transition-opacity flex-shrink-0 brightness-0 invert" />
                <img src="/assets/images/ClientLogos/668fd361fd70e42e1c1db0a9_4-p-500.png" alt="Client" className="h-16 w-auto opacity-70 hover:opacity-90 transition-opacity flex-shrink-0 brightness-0 invert" />
                <img src="/assets/images/ClientLogos/668fd361ff36d3ec709cb15e_3-p-500.png" alt="Client" className="h-16 w-auto opacity-70 hover:opacity-90 transition-opacity flex-shrink-0 brightness-0 invert" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Stack */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12">
              An Adaptive Operating Stack
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-12">
              <div className="text-lg md:text-xl font-semibold text-foreground">
                <span className="text-primary">Flowency</span> <span className="text-muted-foreground">→ Capability</span>
              </div>
              <div className="text-lg md:text-xl font-semibold text-foreground">
                <Link to="/actuate" className="text-emerald-600 hover:underline">Actuate</Link> <span className="text-muted-foreground">→ Activation</span>
              </div>
              <div className="text-lg md:text-xl font-semibold text-foreground">
                <Link to="/intentops" className="text-amber-600 hover:underline">IntentOps</Link> <span className="text-muted-foreground">→ Alignment</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Together, they form an integrated system built to govern, deliver, and evolve in the AI era.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer
        ctaText="Ready to remove friction and improve delivery?"
        ctaDescription="Get in touch."
        ctaButtonText="Contact Us"
      />
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
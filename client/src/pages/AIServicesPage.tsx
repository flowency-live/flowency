import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, ArrowRight, Target, Shield } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { ThemeToggle } from "@/components/ThemeToggle";
import Footer from "@/components/Footer";

// Flowing Energy Streams - AI-focused visual with circuit-like paths
function FlowingStreams() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background atmospheric glow */}
      <div
        className="absolute right-0 top-1/3 w-[70vw] h-[70vh]"
        style={{
          background: 'radial-gradient(ellipse at 60% 50%, rgba(200,120,80,0.12) 0%, rgba(200,100,60,0.06) 35%, transparent 65%)',
          filter: 'blur(50px)',
        }}
      />

      {/* SVG Flowing Streams */}
      <svg
        className="absolute right-0 top-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="aiStreamGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(200,120,80,0)" />
            <stop offset="25%" stopColor="rgba(200,120,80,0.5)" />
            <stop offset="50%" stopColor="rgba(220,140,90,0.7)" />
            <stop offset="75%" stopColor="rgba(200,120,80,0.5)" />
            <stop offset="100%" stopColor="rgba(200,120,80,0)" />
          </linearGradient>

          <linearGradient id="aiStreamGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(180,100,70,0)" />
            <stop offset="35%" stopColor="rgba(180,100,70,0.35)" />
            <stop offset="65%" stopColor="rgba(200,110,75,0.4)" />
            <stop offset="100%" stopColor="rgba(180,100,70,0)" />
          </linearGradient>

          <filter id="aiStreamGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Primary flowing stream */}
        <motion.path
          d="M -100,320 C 200,280 400,380 600,340 S 900,260 1100,320 S 1400,380 1600,320"
          fill="none"
          stroke="url(#aiStreamGradient1)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#aiStreamGlow)"
          style={{ y: y1 }}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Secondary stream */}
        <motion.path
          d="M -50,420 C 250,450 450,370 700,410 S 950,480 1150,420"
          fill="none"
          stroke="url(#aiStreamGradient2)"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#aiStreamGlow)"
          style={{ y: y2 }}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
        />

        {/* Thin accent stream */}
        <motion.path
          d="M 100,360 C 350,330 550,400 800,360 S 1050,290 1300,360"
          fill="none"
          stroke="rgba(220,150,100,0.2)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeOut", delay: 0.6 }}
        />
      </svg>

      {/* Subtle bokeh particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 3 + (i % 4) * 2,
            height: 3 + (i % 4) * 2,
            background: `radial-gradient(circle, rgba(${220 + (i % 3) * 10}, ${130 + (i % 4) * 10}, ${90 + (i % 3) * 10}, ${0.5 + (i % 3) * 0.15}) 0%, transparent 70%)`,
            right: `${15 + (i * 5) % 45}%`,
            top: `${20 + (i * 4) % 60}%`,
            filter: 'blur(1px)',
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.15, 1],
            y: [0, -12, 0],
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            delay: i * 0.25,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

export default function AIServicesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[60]">
        <div
          className="h-full bg-gradient-to-r from-[hsl(18,55%,50%)] to-[hsl(18,65%,60%)]"
          style={{ width: `${scrollProgress}%`, transition: 'width 0.1s ease-out' }}
        />
      </div>

      {/* Navigation - Full-width style with centered links */}
      <nav className="fixed top-1 w-full bg-background z-50 border-b border-border">
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
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-foreground after:transition-all after:duration-300">
              About
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
              <Link to="/about" className="block text-foreground hover:text-accent transition-colors">
                About
              </Link>
              <Link to="/contact" className="block text-foreground hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Dark with flowing energy streams */}
      <section className="section-gradient-hero pt-40 pb-20 md:pt-48 min-h-[85vh] flex items-center relative overflow-hidden">
        {/* Flowing energy streams visual */}
        <FlowingStreams />

        <div className="max-content relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="micro-label text-accent mb-6 block">
              AI Delivery Life Cycle
            </span>
            <h1 className="headline text-white mb-8" style={{ fontSize: 'clamp(3.5rem, 9vw, 5.5rem)', lineHeight: 0.9 }}>
              <span className="block">EXECUTION ISN'T</span>
              <span className="block">THE CONSTRAINT</span>
              <span className="block text-white/50">ANYMORE.</span>
            </h1>
            <p className="text-2xl md:text-4xl text-accent font-bold mb-8">
              Alignment is.
            </p>
            <p className="text-lg text-white/70 max-w-xl mb-10">
              AI-DLC is how you keep delivery systems aligned when AI builds faster than you can decide. The bottleneck isn't capacity - it's knowing what to activate, why, and how to keep it aligned once it's live.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 text-lg font-semibold text-white border-b-2 border-white/30 pb-1 hover:border-white transition-colors"
            >
              Start a conversation
              <span className="text-xl">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pause Section - The Challenge (Dark) */}
      <section className="section-dark section-pause">
        <div className="max-content">
          <motion.div {...fadeIn} className="max-w-3xl mx-auto">
            <p className="headline-secondary text-white mb-8">
              If your clarity is off by 5%, AI will amplify it by 500%.
            </p>
            <p className="body-narrow text-white/60 mx-auto mb-10">
              Speed without intent isn't innovation - it's waste, accelerated. The new failure mode isn't late delivery. It's instant delivery of the wrong things. When every exec's "great idea" can hit production overnight, economic discipline becomes survival.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-semibold text-[hsl(18,55%,55%)] hover:gap-3 transition-all"
            >
              Sound familiar? Let's talk about your alignment gaps.
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* The Shift - Dark with Visual Narrative */}
      <section className="section-dark-deep py-16">
        <div className="max-content">
          {/* Headline */}
          <motion.h2
            {...fadeIn}
            className="headline-secondary text-white text-center mb-10"
          >
            THE CRAFT DIDN'T DISAPPEAR. IT MOVED.
          </motion.h2>

          {/* Three-column visual - Frontiers prominent, Middle collapsed */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-4 items-stretch mb-10">

            {/* UPSTREAM FRONTIER - Prominent Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border-2 border-[hsl(18,55%,48%)] bg-[hsl(215,45%,10%)] p-8 relative"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full border border-[hsl(18,55%,48%)] flex items-center justify-center">
                  <Target className="w-5 h-5 text-[hsl(18,55%,55%)]" />
                </div>
                <div>
                  <span className="text-[hsl(18,55%,55%)] font-semibold uppercase tracking-wider text-xs block">Upstream</span>
                  <span className="text-white font-bold text-lg">Frontier</span>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(18,55%,55%)]" />
                  Intent & clarity
                </li>
                <li className="flex items-center gap-2 text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(18,55%,55%)]" />
                  Prioritisation
                </li>
                <li className="flex items-center gap-2 text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(18,55%,55%)]" />
                  Economics
                </li>
                <li className="flex items-center gap-2 text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(18,55%,55%)]" />
                  Alignment
                </li>
              </ul>
            </motion.div>

            {/* MIDDLE - Collapsed/Compressed Visual */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0.8 }}
              whileInView={{ opacity: 0.4, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:flex flex-col items-center justify-center px-6 py-8 relative"
            >
              {/* Compression arrows pointing inward */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 text-white/20 text-2xl">›</div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 text-white/20 text-2xl">‹</div>

              <div className="text-center">
                <span className="text-white/30 font-semibold uppercase tracking-wider text-xs block mb-2">Middle</span>
                <span className="text-white/40 font-medium text-sm block mb-3">Now ambient</span>
                <p className="text-white/25 text-xs max-w-[120px]">
                  Build & test — accelerated, spec-driven, AI-native
                </p>
              </div>
            </motion.div>

            {/* Mobile: Middle section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:hidden text-center py-4 border-y border-white/10"
            >
              <span className="text-white/30 font-semibold uppercase tracking-wider text-xs block">Middle → Now Ambient</span>
              <p className="text-white/25 text-xs mt-1">Build & test — AI-native</p>
            </motion.div>

            {/* DOWNSTREAM FRONTIER - Prominent Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border-2 border-[hsl(18,55%,48%)] bg-[hsl(215,45%,10%)] p-8 relative"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full border border-[hsl(18,55%,48%)] flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[hsl(18,55%,55%)]" />
                </div>
                <div>
                  <span className="text-[hsl(18,55%,55%)] font-semibold uppercase tracking-wider text-xs block">Downstream</span>
                  <span className="text-white font-bold text-lg">Frontier</span>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(18,55%,55%)]" />
                  Assurance
                </li>
                <li className="flex items-center gap-2 text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(18,55%,55%)]" />
                  Governance
                </li>
                <li className="flex items-center gap-2 text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(18,55%,55%)]" />
                  Observability
                </li>
                <li className="flex items-center gap-2 text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(18,55%,55%)]" />
                  Learning loops
                </li>
              </ul>
            </motion.div>
          </div>

          {/* "Where you need us" - CTA Band */}
          <motion.div
            {...fadeIn}
            className="bg-[hsl(215,35%,25%)] py-8 px-6 text-center"
          >
            <p className="text-xl text-white font-bold mb-3">This is where you need us.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white border-b border-white/30 hover:border-white pb-1 transition-colors"
            >
              Book a discovery call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our AI-DLC Approach (Dark) */}
      <section className="section-dark section-spacing-lg">
        <div className="max-content">
          <motion.div {...fadeIn} className="mb-12">
            <span className="micro-label block mb-4 text-white/50">Our Framework</span>
            <h2 className="headline-secondary text-white mb-4">
              OUR AI-DLC APPROACH
            </h2>
            <p className="body-text text-lg text-white/60 max-w-xl">
              Two capabilities. One control layer across both frontiers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10">
            {/* IntentOps Card */}
            <motion.div
              {...fadeIn}
              className="p-10 md:p-12 border-b md:border-b-0 md:border-r border-white/10 relative"
            >
              <span className="number-accent text-white/20">01</span>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="inline-block bg-white/10 text-white px-4 py-1.5 text-sm font-medium">
                    IntentOps
                  </div>
                  <div className="flex gap-1">
                    <span className="px-2 py-0.5 bg-[hsl(18,55%,48%)]/20 text-[hsl(18,55%,60%)] text-xs border border-[hsl(18,55%,48%)]/30">Upstream</span>
                    <span className="px-2 py-0.5 bg-[hsl(18,55%,48%)]/20 text-[hsl(18,55%,60%)] text-xs border border-[hsl(18,55%,48%)]/30">Downstream</span>
                  </div>
                </div>
                <h3 className="headline-tertiary text-white mb-3">
                  Cognitive sovereignty for the AI era.
                </h3>
                <p className="text-lg text-[hsl(18,55%,60%)] font-medium mb-6">
                  Retain the ability to steer. Scale without it, and you don't own the outcome.
                </p>
                <p className="body-text text-white/60 mb-8">
                  IntentOps spans both frontiers: upstream for clarifying intent, prioritisation and economics; downstream for governance, observability and learning loops. Your real-time control layer for connecting AI initiatives to measurable value.
                </p>
                <div className="space-y-3 mb-10">
                  <p className="body-text text-white/80">Why did the system do this? Who set the rules? Who intervenes when it drifts?</p>
                  <p className="body-text text-white/80">Compliance as architecture, not documentation</p>
                  <p className="body-text text-white/80">Detect drift before it becomes cognitive debt</p>
                </div>
                <Link to="/contact" className="inline-flex items-center gap-2 font-semibold text-[hsl(18,55%,55%)] hover:gap-3 transition-all">
                  Talk to us about IntentOps
                  <span>→</span>
                </Link>
              </div>
            </motion.div>

            {/* Actuate Card */}
            <motion.div
              {...fadeIn}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-10 md:p-12 relative"
            >
              <span className="number-accent text-white/20">02</span>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="inline-block bg-[hsl(18,55%,48%)] text-white px-4 py-1.5 text-sm font-medium">
                    Actuate
                  </div>
                  <span className="px-2 py-0.5 bg-white/10 text-white/60 text-xs border border-white/20">The Middle</span>
                </div>
                <h3 className="headline-tertiary text-white mb-3">
                  From spec to production. No slideshows.
                </h3>
                <p className="text-lg text-[hsl(18,55%,60%)] font-medium mb-6">
                  Don't like it? Rip it up and start again. In minutes.
                </p>
                <p className="body-text text-white/60 mb-8">
                  Actuate handles the ambient middle - AI-native delivery at scale. Software becomes disposable like infrastructure did with IaC. Write the spec. Generate. Deploy. Iterate. Your differentiators become your data, your clarity of intent, and your ability to steer.
                </p>
                <div className="space-y-3 mb-10">
                  <p className="body-text text-white/80">Prototype to production while you're still in sprint planning</p>
                  <p className="body-text text-white/80">AI-native process automation - not faster automation of broken processes</p>
                  <p className="body-text text-white/80">Behaviour-first, spec-driven development</p>
                </div>
                <Link to="/contact" className="inline-flex items-center gap-2 font-semibold text-[hsl(18,55%,55%)] hover:gap-3 transition-all">
                  See how Actuate delivers
                  <span>→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cognitive Debt Warning - Deep Dark */}
      <section className="section-dark-deep py-20">
        <div className="max-content">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center">
            <h2 className="headline-secondary text-white mb-10">
              COGNITIVE DEBT IS THE NEW TECHNICAL DEBT.
            </h2>
            <div className="text-left bg-white/5 border-l-4 border-[hsl(18,55%,48%)] p-8 mb-12">
              <p className="text-lg text-white/80">
                While AI use is democratised across the enterprise, its risks aren't. Code that works but nobody can explain why. Automations running critical systems with zero docs. AI models making decisions we can't trace. Critical business logic buried in tools nobody owns.
              </p>
            </div>
            <p className="body-narrow text-white/60 mx-auto mb-12">
              Yes, AI helps you do things faster. But velocity without discipline is just faster chaos. The $2 trillion in global tech debt isn't a backlog of code - it's a backlog of bad decisions. AI will accelerate both outcomes and debt. You choose which.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 text-lg font-semibold text-white border-b-2 border-white/30 pb-1 hover:border-white transition-colors"
            >
              Request a cognitive debt audit
              <span className="text-xl">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How They Connect - Visual Flow (Dark) */}
      <section className="section-dark section-spacing">
        <div className="max-content">
          <motion.div {...fadeIn} className="text-center max-w-4xl mx-auto">
            <h2 className="headline-secondary text-white mb-10">
              ONE LOOP. INTENT TO OUTCOME.
            </h2>

            {/* Simple visual flow */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-10">
              <div className="px-8 py-4 bg-white/10 text-white font-semibold text-lg border border-white/20">
                IntentOps
              </div>
              <ArrowRight className="w-8 h-8 text-[hsl(18,55%,55%)] rotate-90 md:rotate-0" />
              <div className="px-8 py-4 bg-[hsl(18,55%,48%)] text-white font-semibold text-lg">
                Actuate
              </div>
              <ArrowRight className="w-8 h-8 text-[hsl(18,55%,55%)] rotate-90 md:rotate-0" />
              <div className="px-8 py-4 bg-white text-[hsl(215,40%,12%)] font-semibold text-lg">
                Value
              </div>
            </div>

            <p className="body-narrow text-white/60 mx-auto">
              The next era of advantage belongs to organisations that connect strategic intent, intelligent execution, and real-time value assurance into one loop. Don't just modernise your systems. Modernise your intent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DOMINANT CTA Section - Accent Band with Aurora */}
      <section className="section-band-accent py-20 relative overflow-hidden">
        {/* Aurora-style animated background */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at 30% 0%, rgba(255,180,120,0.25) 0%, transparent 50%)',
            }}
            animate={{
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at 70% 100%, rgba(220,140,80,0.2) 0%, transparent 60%)',
            }}
            animate={{
              opacity: [0.4, 0.7, 0.4],
              scale: [1.1, 1, 1.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="max-content relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="headline text-white mb-8" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
              FORGET YOUR<br />AI STRATEGY.
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
              Where's your Intent Alignment strategy? The question isn't how fast you can build. It's why you're building, and how quickly you can prove it worked.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-semibold bg-white text-[hsl(18,55%,40%)] hover:bg-white/90 transition-all duration-300"
            >
              Start a conversation
              <span className="text-xl">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

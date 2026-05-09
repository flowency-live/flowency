import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { ThemeToggle } from "@/components/ThemeToggle";
// Section components available but using custom layouts for better rhythm

// Flowing Energy Streams - Luminous ribbons representing flow
function FlowingStreams() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background atmospheric glow */}
      <div
        className="absolute right-0 top-1/4 w-[80vw] h-[80vh]"
        style={{
          background: 'radial-gradient(ellipse at 70% 40%, rgba(200,120,80,0.15) 0%, rgba(200,100,60,0.08) 30%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />

      {/* SVG Flowing Streams */}
      <svg
        className="absolute right-0 top-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gradient for primary stream */}
          <linearGradient id="streamGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(200,120,80,0)" />
            <stop offset="20%" stopColor="rgba(200,120,80,0.6)" />
            <stop offset="50%" stopColor="rgba(220,140,90,0.8)" />
            <stop offset="80%" stopColor="rgba(200,120,80,0.6)" />
            <stop offset="100%" stopColor="rgba(200,120,80,0)" />
          </linearGradient>

          {/* Gradient for secondary stream */}
          <linearGradient id="streamGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(180,100,70,0)" />
            <stop offset="30%" stopColor="rgba(180,100,70,0.4)" />
            <stop offset="70%" stopColor="rgba(200,110,75,0.5)" />
            <stop offset="100%" stopColor="rgba(180,100,70,0)" />
          </linearGradient>

          {/* Gradient for tertiary stream */}
          <linearGradient id="streamGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(160,90,60,0)" />
            <stop offset="40%" stopColor="rgba(160,90,60,0.3)" />
            <stop offset="60%" stopColor="rgba(180,100,70,0.35)" />
            <stop offset="100%" stopColor="rgba(160,90,60,0)" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="streamGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Primary flowing stream - bold, front */}
        <motion.path
          d="M -100,350 C 200,320 400,420 600,380 S 900,300 1100,350 S 1400,400 1600,350"
          fill="none"
          stroke="url(#streamGradient1)"
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#streamGlow)"
          style={{ y: y1 }}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Secondary stream - softer, behind */}
        <motion.path
          d="M -50,280 C 250,250 450,350 700,300 S 950,220 1150,280 S 1350,340 1550,290"
          fill="none"
          stroke="url(#streamGradient2)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#streamGlow)"
          style={{ y: y2 }}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
        />

        {/* Tertiary stream - subtle, far back */}
        <motion.path
          d="M 0,450 C 300,480 500,380 750,430 S 1000,500 1200,440 S 1400,380 1600,430"
          fill="none"
          stroke="url(#streamGradient3)"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#streamGlow)"
          style={{ y: y3 }}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut", delay: 0.6 }}
        />

        {/* Additional thin accent streams */}
        <motion.path
          d="M 100,380 C 350,350 550,430 800,390 S 1050,320 1300,380"
          fill="none"
          stroke="rgba(220,150,100,0.25)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3.5, ease: "easeOut", delay: 0.8 }}
        />
      </svg>

      {/* Bokeh particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 3 + (i % 5) * 2,
            height: 3 + (i % 5) * 2,
            background: `radial-gradient(circle, rgba(${220 + (i % 3) * 10}, ${130 + (i % 4) * 10}, ${90 + (i % 3) * 10}, ${0.6 + (i % 3) * 0.15}) 0%, transparent 70%)`,
            right: `${10 + (i * 4.2) % 50}%`,
            top: `${15 + (i * 3.7) % 70}%`,
            filter: 'blur(1px)',
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.2, 1],
            y: [0, -15, 0],
            x: [0, (i % 2 === 0 ? 8 : -8), 0],
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

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

          {/* Nav Links - Center */}
          <div className="hidden md:flex items-center gap-12">
            <a href="#approach" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-foreground after:transition-all after:duration-300">Approach</a>
            <a href="#services" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-foreground after:transition-all after:duration-300">Services</a>
            <Link to="/ai-services" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-foreground after:transition-all after:duration-300">AI-DLC</Link>
            <Link to="/about" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-foreground after:transition-all after:duration-300">About</Link>
          </div>

          {/* Theme Toggle & CTA - Right */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link
              to="/contact"
              className="px-5 py-2.5 text-base font-medium text-accent-foreground bg-accent hover:bg-accent/90 transition-colors rounded-md"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-accent transition-colors p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-6 py-4 space-y-4">
              <a href="#approach" className="block text-base font-medium text-muted-foreground hover:text-foreground">Approach</a>
              <a href="#services" className="block text-base font-medium text-muted-foreground hover:text-foreground">Services</a>
              <Link to="/ai-services" className="block text-base font-medium text-muted-foreground hover:text-foreground">AI-DLC</Link>
              <Link to="/about" className="block text-base font-medium text-muted-foreground hover:text-foreground">About</Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block text-base text-accent font-semibold"
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

      {/* Hero Section - Dark with flowing energy streams */}
      <section className="section-gradient-hero pt-40 pb-24 md:pt-48 min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Flowing energy streams visual */}
        <FlowingStreams />

        <div className="max-content relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 max-w-3xl"
          >
            <h1 className="headline text-white" style={{ fontSize: 'clamp(2.5rem, 12vw, 8rem)', lineHeight: 0.9 }}>
              <span className="block">BUILDING</span>
              <span className="block">ORGANISATIONS</span>
              <span className="block text-white/50">THAT FLOW</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-lg">
              Delivery optimisation. Capability uplift. Real results.
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

      {/* Definition + Statement Section - Side by Side */}
      <section className="section-dark py-16">
        <div className="max-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <DictionaryCard />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="headline-secondary text-white text-center lg:text-left"
            >
              Digital transformation without the theatre.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Numbered Band - Core Values (Accent Band) */}
      <section className="section-band-accent py-0">
        <div className="max-content">
          <div className="band-numbered">
            {[
              { num: "01", label: "Framework Agnostic" },
              { num: "02", label: "Method Diverse" },
              { num: "03", label: "AI-Aware" },
              { num: "04", label: "Value Focused" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="band-numbered-item"
              >
                <div className="band-number text-white">{item.num}</div>
                <div className="band-label text-white/80">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section (Dark) */}
      <section id="approach" className="section-dark section-spacing-lg">
        {/* Editorial two-column layout */}
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeIn} className="mb-12">
            {/* Header row */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-start">
              {/* Left column - Title block */}
              <div>
                {/* Two-tone pill badge */}
                <div className="inline-flex items-center rounded-full border border-white/20 px-4 py-1.5 mb-8">
                  <span className="text-sm font-medium text-white/70">Adaptive</span>
                  <span className="text-sm font-medium text-accent ml-1">Delivery</span>
                </div>

                <h2 className="headline-secondary text-white mb-6">
                  Our Approach
                </h2>
                <p className="text-lg text-white/50">
                  Framework agnostic, method diverse, AI-aware, value focused.
                </p>
              </div>

              {/* Right column - Body text split into two paragraphs */}
              <div className="lg:pt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <p className="text-base text-white/60 leading-relaxed">
                    Our adaptive delivery approach is framework agnostic and method diverse, drawing from the best bits of agile, lean, waterfall and JFDI - combined with years of experience and hard earned insights.
                  </p>
                  <p className="text-base text-white/60 leading-relaxed">
                    What makes us different? We apply the most contextually relevant solutions for your specific organisational context and maturity. As AI reshapes how work flows through organisations, this contextual adaptation expertise becomes your competitive advantage.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quote Block - Charcoal band, editorial feel */}
        <motion.div
          {...fadeIn}
          className="relative py-12 mb-12 overflow-hidden"
          style={{
            background: 'hsl(215, 35%, 18%)',
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
            width: '100vw'
          }}
        >
          {/* Subtle top edge */}
          <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />

          {/* Diverging pathways background - representing "finding YOUR way" */}
          <svg
            className="absolute inset-0 w-full h-full opacity-20"
            viewBox="0 0 1200 200"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(200,120,80,0)" />
                <stop offset="50%" stopColor="rgba(200,120,80,0.8)" />
                <stop offset="100%" stopColor="rgba(200,120,80,0)" />
              </linearGradient>
            </defs>
            {/* Central origin point, paths diverging */}
            <path d="M 600,100 C 400,100 300,60 100,50" stroke="url(#pathGradient)" strokeWidth="2" fill="none" />
            <path d="M 600,100 C 400,100 300,140 100,150" stroke="url(#pathGradient)" strokeWidth="2" fill="none" />
            <path d="M 600,100 C 800,100 900,40 1100,30" stroke="url(#pathGradient)" strokeWidth="2" fill="none" />
            <path d="M 600,100 C 800,100 900,160 1100,170" stroke="url(#pathGradient)" strokeWidth="2" fill="none" />
            {/* Subtle middle paths */}
            <path d="M 600,100 C 450,95 350,80 150,85" stroke="rgba(200,120,80,0.3)" strokeWidth="1" fill="none" />
            <path d="M 600,100 C 450,105 350,120 150,115" stroke="rgba(200,120,80,0.3)" strokeWidth="1" fill="none" />
            <path d="M 600,100 C 750,95 850,70 1050,60" stroke="rgba(200,120,80,0.3)" strokeWidth="1" fill="none" />
            <path d="M 600,100 C 750,105 850,130 1050,140" stroke="rgba(200,120,80,0.3)" strokeWidth="1" fill="none" />
          </svg>

          <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
            <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              We won't tell you the way - we help you find <span className="text-[hsl(18,55%,60%)] drop-shadow-[0_0_10px_rgba(200,120,80,0.5)]">YOUR</span> way.
            </p>
          </div>
        </motion.div>

        {/* Approach Points - Wider than text block, uniform lattice */}
        <div className="max-w-[76rem] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.15]">
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
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="p-9 bg-[hsl(215,40%,12%)]"
              >
                <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-white/55">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pause Section - Light Reset */}
      <section className="section-light section-statement">
        <div className="max-content">
          <div className="divider-line mb-12" />
          <motion.p
            {...fadeIn}
            className="text-xl md:text-2xl text-gray-600 text-center max-w-3xl mx-auto"
          >
            We start with friction. Then apply method, intelligence, and capability to turn flow into value.
          </motion.p>
        </div>
      </section>

      {/* Services Section (Dark) */}
      <section id="services" className="section-dark section-spacing-lg">
        <div className="max-content">
          <motion.div {...fadeIn} className="mb-12">
            <span className="micro-label block mb-4 text-white/50">Our Services</span>
            <h2 className="headline-secondary text-white mb-8">
              HOW WE HELP YOU ACHIEVE <span className="text-[hsl(18,55%,55%)]">FLOW</span>
            </h2>
            <p className="body-narrow text-white/70 max-w-2xl">
              Four core service areas designed to transform your delivery capabilities and drive lasting organisational change across all departments.
            </p>
          </motion.div>

          <div className="cards-numbered grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-10 border-b md:border-b-0 md:border-r border-white/10 relative"
            >
              <span className="number-accent text-white/20">01</span>
              <h3 className="headline-tertiary text-white mb-4 relative z-10">Work System Optimisation</h3>
              <p className="body-text text-white/60 relative z-10">
                Streamline delivery systems, operational workflows, and cross-departmental processes. Includes our IntentOps framework for managing cognitive debt as AI adoption accelerates. Draws on Actuate to embed automation where it delivers measurable results - whether in product delivery, HR, finance, or customer operations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-10 border-b border-white/10 relative"
            >
              <span className="number-accent text-white/20">02</span>
              <h3 className="headline-tertiary text-white mb-4 relative z-10">Value Outcome Leadership</h3>
              <p className="body-text text-white/60 relative z-10">
                Focus on measurable business outcomes across all departments, not just product delivery. Drive strategic alignment and demonstrate tangible ROI whether optimising development pipelines or automating customer support workflows.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-10 md:border-r border-white/10 relative"
            >
              <span className="number-accent text-white/20">03</span>
              <h3 className="headline-tertiary text-white mb-4 relative z-10">AI-Enabled Process Design</h3>
              <p className="body-text text-white/60 relative z-10">
                Apply proven delivery optimisation principles to any workflow being transformed by AI. From customer service automation to financial reporting, we help you redesign processes that combine human judgement with intelligent automation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-10 relative"
            >
              <span className="number-accent text-white/20">04</span>
              <h3 className="headline-tertiary text-white mb-4 relative z-10">Organisational Flow Intelligence</h3>
              <p className="body-text text-white/60 relative z-10">
                Implement systems that provide visibility into work flow across your entire organisation. As AI creates new bottlenecks and opportunities, make the invisible visible across every department and workflow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Deliver Results - Deep Dark Section */}
      <section className="section-dark-deep py-0 relative overflow-hidden">
        {/* Flowing process line in background */}
        <svg
          className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 pointer-events-none hidden md:block"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="processGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(200,120,80,0.1)" />
              <stop offset="20%" stopColor="rgba(200,120,80,0.4)" />
              <stop offset="50%" stopColor="rgba(220,140,90,0.5)" />
              <stop offset="80%" stopColor="rgba(200,120,80,0.4)" />
              <stop offset="100%" stopColor="rgba(200,120,80,0.1)" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 0,50 C 150,30 250,70 400,50 S 550,30 600,50 S 750,70 800,50 S 950,30 1050,50 S 1150,70 1200,50"
            fill="none"
            stroke="url(#processGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </svg>

        <div className="py-20 text-center relative z-10">
          <motion.h2 {...fadeIn} className="headline-secondary text-white mb-4">
            HOW WE DELIVER RESULTS
          </motion.h2>
          <motion.p {...fadeIn} className="text-white/50">Our proven three-step methodology</motion.p>
        </div>

        <div className="max-content relative z-10">
          <div className="band-numbered border-t border-white/10">
            {[
              { num: "01", label: "Visualise", desc: "Make your delivery system visible" },
              { num: "02", label: "Optimise", desc: "Eliminate waste, create smooth value flow" },
              { num: "03", label: "Sustain", desc: "Build lasting internal capability" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="band-numbered-item py-12"
              >
                <div className="band-number text-white">{item.num}</div>
                <div className="band-label text-white mb-2">{item.label}</div>
                <p className="text-sm text-white/50 max-w-[200px] mx-auto">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="py-16 text-center">
          <motion.p {...fadeIn} className="body-narrow text-white/60 mx-auto max-w-3xl px-6">
            We start where you are, bring clarity and stability, and optimise from there. When you're ready, we activate the tools, automation, and intelligence to take you further.
          </motion.p>
        </div>
      </section>

      {/* Flow Domains - Dark Section */}
      <section className="section-dark section-spacing-lg">
        <div className="max-content">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="headline-secondary text-white">
              FLUENT IN FLOW.<br />APPLIED WHERE IT MATTERS.
            </h2>
          </motion.div>

          {/* Three columns with visual weight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 mb-12">
            {[
              { title: "Delivery Flow", desc: "Focused execution, faster throughput, reduced WIP", num: "01" },
              { title: "Flow Economics", desc: "Value-centred prioritisation and cost-of-delay insight", num: "02" },
              { title: "Team Flow", desc: "Adaptive collaboration across complex systems", num: "03" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`p-10 text-center ${i < 2 ? 'border-b md:border-b-0 md:border-r border-white/10' : ''}`}
              >
                {/* Large number with glowing circle */}
                <div className="relative w-28 h-28 md:w-36 md:h-36 mb-6 mx-auto">
                  {/* Outer glow layer */}
                  <div className="absolute inset-0 rounded-full"
                       style={{
                         border: '2px solid hsl(18, 55%, 55%)',
                         boxShadow: '0 0 25px 5px rgba(200,120,80,0.5), 0 0 50px 10px rgba(200,120,80,0.3), inset 0 0 20px rgba(200,120,80,0.2)'
                       }}
                  />
                  {/* Single large digit */}
                  <span className="absolute inset-0 flex items-center justify-center text-white font-black text-5xl md:text-6xl lg:text-7xl leading-none">
                    {i + 1}
                  </span>
                </div>
                <h3 className="headline-tertiary text-white mb-3">{item.title}</h3>
                <p className="body-text text-sm text-white/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Impact statement */}
          <motion.div {...fadeIn} className="text-center">
            <p className="headline-tertiary text-white mb-4">Immediate impact and sticky change.</p>
            <p className="body-narrow text-white/60 mx-auto max-w-2xl">
              We deliver sustainable improvements that reduce lead times, increase value throughput, and align delivery to what matters.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DOMINANT CTA Section - Accent Band with Aurora */}
      <section className="section-band-accent py-20 relative overflow-hidden">
        {/* Aurora-style animated background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Primary aurora wave */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at 30% 0%, rgba(255,180,120,0.3) 0%, transparent 50%)',
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
          {/* Secondary aurora wave */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at 70% 100%, rgba(220,140,80,0.25) 0%, transparent 60%)',
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
          {/* Flowing energy streams */}
          <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
            <motion.path
              d="M -100,200 C 200,150 400,250 600,200 S 900,100 1100,180 S 1400,250 1600,200"
              fill="none"
              stroke="rgba(255,200,150,0.5)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              viewport={{ once: true }}
            />
            <motion.path
              d="M -50,280 C 250,320 450,220 700,270 S 950,350 1150,290"
              fill="none"
              stroke="rgba(255,180,130,0.4)"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            />
          </svg>
          {/* Floating particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: 4 + (i % 4) * 2,
                height: 4 + (i % 4) * 2,
                background: `rgba(255, ${200 + (i % 3) * 20}, ${150 + (i % 4) * 20}, ${0.4 + (i % 3) * 0.2})`,
                left: `${5 + (i * 8) % 90}%`,
                top: `${10 + (i * 7) % 80}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
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
              READY TO IMPROVE<br />HOW WORK FLOWS?
            </h2>
            <p className="text-xl text-white/80 mb-12">
              Let's talk.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-semibold bg-white text-[hsl(18,55%,40%)] hover:bg-white/90 transition-all duration-300"
            >
              Get in touch
              <span className="text-xl">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Client Logos - Two rows, opposite directions, colour */}
      {/* Always light background for coloured logos visibility */}
      <section className="py-16 bg-gray-100 dark:bg-gray-100 border-y border-gray-200">
        <div className="max-content text-center">
          <p className="micro-label text-gray-600 mb-8">Organisations we've helped move faster</p>

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

      <Footer />
    </div>
  );
}

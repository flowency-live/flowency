import { motion } from "framer-motion";
import { Link } from "wouter";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import ContactModal from "@/components/ContactModal";
import PBIImage from "@assets/PBI.png";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ScrollProgress from "@/components/ScrollProgress";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Flowency",
    "url": "https://flowency.co.uk",
    "description": "We help build intent-driven enterprises that sense, align, and deliver in real-time",
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
    "serviceType": ["AI Strategy Consulting", "AI Implementation", "Enterprise Training", "Cognitive Debt Management"]
  };

  const carouselImages = [
    { src: "/assets/images/Card_on_desk.jpg", alt: "Flowency Card on Desk" },
    { src: "/assets/images/IntentOps.png", alt: "IntentOps" },
    { src: "/assets/images/Actuate.png", alt: "Actuate" },
    { src: "/assets/images/ContactCard.png", alt: "Contact Card" }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Pill graphic */}
            <div className="inline-block bg-slate-700 text-white px-6 md:px-7 py-3 md:py-3.5 rounded-full text-base md:text-base font-medium mb-6 md:mb-8">
              <span className="text-accent">Adaptive</span> <span className="text-slate-200">Delivery</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-light mb-4 md:mb-6 text-foreground leading-tight">
              <span className="block md:inline">We help your</span>
              <span className="hidden md:inline"> </span>
              <span className="text-electric">Delivery Systems Flow</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-4xl mx-auto text-muted-foreground">
              Flowency is a Delivery Improvement and Business Change consultancy. We specialise in
              optimising value flow, embedding intelligence into operations, and driving transformational change that lasts.{" "}
              <strong className="text-accent font-bold">Enhancing efficiency, maximising value</strong>.
            </p>
            <a 
              href="#more" 
              className="inline-block bg-accent hover:bg-[hsl(16,100%,45%)] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-medium transition-colors shadow-lg"
            >
              LEARN MORE
            </a>
          </motion.div>
        </div>
      </section>

      {/* Image Carousel */}
      <section id="more" className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Desktop: Full width continuous carousel */}
          <div className="hidden md:block relative overflow-hidden h-80 lg:h-96 bg-muted">
            {/* Continuous scrolling carousel */}
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
            >
              {/* Duplicate images for continuous effect */}
              {[...carouselImages, ...carouselImages, ...carouselImages].map((image, index) => (
                <div
                  key={index}
                  className="w-1/3 flex-shrink-0 h-full px-2"
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              ))}
            </div>
              
            {/* Navigation Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Mobile: Full width carousel */}
          <div className="md:hidden px-0 relative overflow-hidden h-48 sm:h-56">
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 h-full"
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
              
            {/* Mobile Navigation Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            
            {/* Mobile Dots Indicator */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Our Approach Section - Clean Design */}
      <section id="approach" className="py-12 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Header */}
            <div className="mb-8 md:mb-12">
              <div className="inline-block bg-primary text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
                Our Approach
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
                <span className="text-electric">Adaptive Delivery</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-medium mb-4 md:mb-6">
                Framework agnostic, method diverse, <span className="whitespace-nowrap">AI-aware,</span> value focused.
              </p>
              <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6">
                Our adaptive delivery approach is framework agnostic and method diverse, drawing from the best bits of agile, lean, waterfall and JFDI - combined with years of experience and hard earned insights. What makes us different? We apply the most contextually relevant solutions for your specific organisational context and maturity, whether that's optimising product delivery or transforming workflows across HR, customer service, and financial processes. As AI reshapes how work flows through organisations, this contextual adaptation expertise becomes your competitive advantage.
              </p>
              <div className="bg-slate-700 p-6 md:p-8 rounded-lg max-w-4xl mx-auto mb-8">
                <p className="text-lg md:text-xl font-bold text-white text-center">
                  We won't tell you the way <span className="block md:inline">- we help you find <span className="text-orange-500">YOUR</span> way.</span>
                </p>
              </div>
            </div>

            {/* Key Points Grid - Mobile Optimized */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-8 md:mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-card p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl shadow-sm border border-border"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent flex items-center justify-center mb-2 sm:mb-4 mx-auto">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white sm:w-5 sm:h-5">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-bold text-base sm:text-lg text-card-foreground mb-1 sm:mb-3 text-center">Framework agnostic solutions</h4>
                <p className="text-muted-foreground text-sm sm:text-base text-center">Adapt to your existing methodologies</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl shadow-sm border border-border"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent flex items-center justify-center mb-2 sm:mb-4 mx-auto">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white sm:w-5 sm:h-5">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-bold text-base sm:text-lg text-card-foreground mb-1 sm:mb-3 text-center">Method diverse expertise</h4>
                <p className="text-muted-foreground text-sm sm:text-base text-center">Drawing from agile, lean, and beyond</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-card p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl shadow-sm border border-border"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent flex items-center justify-center mb-2 sm:mb-4 mx-auto">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white sm:w-5 sm:h-5">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-bold text-base sm:text-lg text-card-foreground mb-1 sm:mb-3 text-center">Value-focused outcomes</h4>
                <p className="text-muted-foreground text-sm sm:text-base text-center">Measurable business impact</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-card p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl shadow-sm border border-border"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent flex items-center justify-center mb-2 sm:mb-4 mx-auto">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white sm:w-5 sm:h-5">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-bold text-base sm:text-lg text-card-foreground mb-1 sm:mb-3 text-center">Contextually relevant approaches</h4>
                <p className="text-muted-foreground text-sm sm:text-base text-center">Tailored to your organizational maturity</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-card p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl shadow-sm border border-border"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent flex items-center justify-center mb-2 sm:mb-4 mx-auto">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white sm:w-5 sm:h-5">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-bold text-base sm:text-lg text-card-foreground mb-1 sm:mb-3 text-center">Years of proven experience</h4>
                <p className="text-muted-foreground text-sm sm:text-base text-center">Battle-tested insights and solutions</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-card p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl shadow-sm border border-border"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent flex items-center justify-center mb-2 sm:mb-4 mx-auto">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white sm:w-5 sm:h-5">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-bold text-base sm:text-lg text-card-foreground mb-1 sm:mb-3 text-center">Lasting <span className="whitespace-nowrap">transformational change</span></h4>
                <p className="text-muted-foreground text-sm sm:text-base text-center">Sustainable improvements that stick</p>
              </motion.div>
            </div>

            {/* Service Mapping Pills */}

          </motion.div>
        </div>
      </section>

      {/* Actuate Teaser Ribbon */}
      <div className="relative h-12 bg-gradient-to-r from-emerald-600 via-teal-700 to-green-800 overflow-hidden border-t-2 border-b-2 border-yellow-400">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 via-teal-600/30 to-green-700/30"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="relative flex items-center justify-center h-full">
          <motion.a 
            href="#actuate-section"
            className="text-white font-semibold text-center px-4 hover:text-yellow-200 transition-colors duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onClick={(e) => {
              e.preventDefault();
              const actuateSection = document.getElementById('actuate-section');
              if (actuateSection) {
                actuateSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            <span className="font-bold">Actuate</span> - Delivery Meets Intelligence - AI enablement, Intelligent Automation
          </motion.a>
        </div>
      </div>

      {/* Our Services Section */}
      <section className="py-12 bg-gradient-to-br from-muted/30 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              How We Help You Achieve <span className="text-electric">Flow</span>
            </h2>
            <p className="text-xl text-foreground font-medium mb-6 max-w-3xl mx-auto">
              We start with friction. Then apply method, intelligence, and capability to turn flow into value.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Four core service areas designed to transform your delivery capabilities and drive lasting organisational change across all departments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Work System Optimisation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">Work System Optimisation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Streamline delivery systems, operational workflows, and cross-departmental processes. Includes our IntentOps framework for managing cognitive debt as AI adoption accelerates. Draws on Actuate to embed automation where it delivers measurable results - whether in product delivery, HR, finance, or customer operations.
              </p>
            </motion.div>

            {/* Value Outcome Leadership */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">Value Outcome Leadership</h3>
              <p className="text-muted-foreground leading-relaxed">
                Focus on measurable business outcomes across all departments, not just product delivery. Drive strategic alignment and demonstrate tangible ROI whether optimising development pipelines or automating customer support workflows.
              </p>
            </motion.div>

            {/* Tooling & Transparency */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">AI-Enabled Process Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Apply proven delivery optimisation principles to any workflow being transformed by AI. From customer service automation to financial reporting, we help you redesign processes that combine human judgement with intelligent automation.
              </p>
            </motion.div>

            {/* Team Coaching & Dynamics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">Organisational Flow Intelligence</h3>
              <p className="text-muted-foreground leading-relaxed">
                Implement systems that provide visibility into work flow across your entire organisation. As AI creates new bottlenecks and opportunities, make the invisible visible across every department and workflow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Diagnostic Carousel */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Problem Diagnostic: Can you relate?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Recognise these friction patterns in your delivery systems?
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-card p-6 rounded-xl shadow-sm border border-red-900/50 hover:shadow-lg hover:border-red-800/70 transition-all duration-300 cursor-pointer"
              >
                <div className="text-center mb-4">
                  <div className="w-8 h-8 bg-red-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-card-foreground">Initiative Overload</h3>
                </div>
                <p className="text-muted-foreground text-sm">Too many competing priorities, unclear strategic focus, decision paralysis</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-card p-6 rounded-xl shadow-sm border border-yellow-900/50 hover:shadow-lg hover:border-yellow-800/70 transition-all duration-300 cursor-pointer"
              >
                <div className="text-center mb-4">
                  <div className="w-8 h-8 bg-yellow-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-card-foreground">Context Switching</h3>
                </div>
                <p className="text-muted-foreground text-sm">Teams constantly switching between tasks, losing momentum and focus</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-card p-6 rounded-xl shadow-sm border border-orange-900/50 hover:shadow-lg hover:border-orange-800/70 transition-all duration-300 cursor-pointer"
              >
                <div className="text-center mb-4">
                  <div className="w-8 h-8 bg-orange-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-card-foreground">Visibility & Alignment Gaps</h3>
                </div>
                <p className="text-muted-foreground text-sm">No clear view of progress, blockers surface late, strategy and execution disconnect</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-card p-6 rounded-xl shadow-sm border border-purple-900/50 hover:shadow-lg hover:border-purple-800/70 transition-all duration-300 cursor-pointer"
              >
                <div className="text-center mb-4">
                  <div className="w-8 h-8 bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-card-foreground">Delivery Delays</h3>
                </div>
                <p className="text-muted-foreground text-sm">Projects consistently late, scope creep, quality compromises</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-card p-6 rounded-xl shadow-sm border border-green-900/50 hover:shadow-lg hover:border-green-800/70 transition-all duration-300 cursor-pointer"
              >
                <div className="text-center mb-4">
                  <div className="w-8 h-8 bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <div className="w-4 h-4 text-green-400 font-bold flex items-center justify-center text-xs">
                      £
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-card-foreground">Value Confusion</h3>
                </div>
                <p className="text-muted-foreground text-sm">Unclear what delivers real business value, effort goes to wrong places</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-card p-6 rounded-xl shadow-sm border border-indigo-900/50 hover:shadow-lg hover:border-indigo-800/70 transition-all duration-300 cursor-pointer"
              >
                <div className="text-center mb-4">
                  <div className="w-8 h-8 bg-indigo-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-card-foreground">AI Adoption Without Flow Thinking</h3>
                </div>
                <p className="text-muted-foreground text-sm">You're implementing AI tools across departments without understanding how they impact organisational flow, creating new friction points and coordination challenges.</p>
              </motion.div>
            </div>

            <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Sound familiar?</h3>
              <p className="text-lg">
                These patterns signal systemic flow problems. We help you diagnose the root causes and implement sustainable solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Visualise, Optimise, Sustain */}
      <section className="py-12 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">How We Deliver Results</h2>
            <p className="text-xl text-muted-foreground">Our proven three-step methodology</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg border border-border hover:shadow-lg transition-shadow bg-card"
            >
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg border border-border hover:shadow-lg transition-shadow bg-card"
            >
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg border border-border hover:shadow-lg transition-shadow bg-card"
            >
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
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              We start where you are, bring clarity and stability, and optimise from there. When you're ready, we activate the tools, automation, and intelligence to take you further.
            </p>
          </motion.div>
        </div>
      </section>





      {/* Flow Domains */}
      <section className="py-12 bg-gradient-to-b from-muted/30 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Fluent in FLOW. Applied where it matters.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Link to="/actuate">
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="relative group cursor-pointer block"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-card rounded-2xl p-6 border border-blue-900/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-blue-700 overflow-hidden h-40 md:h-48">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full -mr-12 -mt-12 opacity-50"></div>
                    <div className="relative h-full flex flex-col">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-card-foreground mb-2">Delivery Flow</h3>
                          <div className="w-10 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                        Focused execution, faster throughput, reduced WIP
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Link>

              <Link to="/actuate">
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="relative group cursor-pointer block"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-card rounded-2xl p-6 border border-amber-900/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-amber-700 overflow-hidden h-40 md:h-48">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-50 to-amber-100 rounded-full -mr-12 -mt-12 opacity-50"></div>
                    <div className="relative h-full flex flex-col">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-xl">£</span>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-card-foreground mb-2">Flow Economics</h3>
                          <div className="w-10 h-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"></div>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                        Value-centred prioritisation and cost-of-delay insight
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Link>

              <Link to="/actuate">
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="relative group cursor-pointer block"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-card rounded-2xl p-6 border border-emerald-900/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-emerald-700 overflow-hidden h-40 md:h-48">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-full -mr-12 -mt-12 opacity-50"></div>
                    <div className="relative h-full flex flex-col">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-card-foreground mb-2">Team Flow</h3>
                          <div className="w-10 h-1 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full"></div>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                        Adaptive collaboration across complex systems
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>

            <div className="mt-10 max-w-4xl mx-auto">
              <p className="text-xl font-semibold text-foreground mb-4">Immediate impact and sticky change.</p>
              <p className="text-lg text-muted-foreground mb-6">
                We deliver sustainable improvements that reduce lead times, increase value throughput, and align delivery to what matters.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We start where you are, bring clarity and stability, and optimise from there.
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

      {/* Animated Section Divider */}
      <div className="relative h-8 bg-gradient-to-r from-transparent via-border to-transparent">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-emerald-500/20"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>

      {/* What's New with Actuate Section */}
      <section id="actuate-section" className="py-12 bg-gradient-to-br from-emerald-600 via-teal-700 to-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-yellow-400/20 text-yellow-200 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-yellow-400/30">
              What's New with Actuate
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Delivery Meets Intelligence
            </h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Our Actuate capability brings together everything we know about improving delivery. Combined with intelligent automation, AI enablement, and scalable execution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Applied AI Use Cases */}
            <Link to="/actuate">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-card rounded-xl p-6 md:p-8 shadow-lg border border-border hover:shadow-2xl hover:border-emerald-500 transition-all duration-300 cursor-pointer block h-48 md:h-64"
              >
                <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4 md:mb-6 shadow-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3 md:mb-4">Applied AI Across Workflows</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  Real outcomes from LLMs, agents, and copilots - embedded in product delivery, HR, finance, and customer operations
                </p>
              </motion.div>
            </Link>

            {/* Automation & Augmentation */}
            <Link to="/actuate">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-card rounded-xl p-6 md:p-8 shadow-lg border border-border hover:shadow-2xl hover:border-teal-500 transition-all duration-300 cursor-pointer block h-48 md:h-64"
              >
                <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4 md:mb-6 shadow-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3 md:mb-4">Intelligent Automation & Augmentation</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  Human-in-the-loop workflows that streamline operations across every department while keeping you in control
                </p>
              </motion.div>
            </Link>

            {/* AI-Ready Processes */}
            <Link to="/actuate">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-card rounded-xl p-6 md:p-8 shadow-lg border border-border hover:shadow-2xl hover:border-yellow-500 transition-all duration-300 cursor-pointer block h-48 md:h-64"
              >
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4 md:mb-6 shadow-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3 md:mb-4">AI-Ready Process Design</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  From delivery pipelines to customer onboarding - we prepare any workflow for intelligent automation
                </p>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Bridge to Actuate & IntentOps */}
      <section className="py-12 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Capability. Alignment. Activation.
            </h2>
            <p className="text-xl mb-12 max-w-4xl mx-auto opacity-90">
              Flowency builds capability for FLOW - the foundational layer of delivery performance. 
              Now, two integrated offerings extend that system for the AI era:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link to="/actuate">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-gradient-to-br from-emerald-600/90 via-teal-700/90 to-green-800/90 backdrop-blur-sm p-8 rounded-xl border border-yellow-400/30 hover:border-yellow-300/50 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                >
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4 group-hover:text-yellow-300 transition-colors">Actuate</h3>
                  <p className="text-lg font-semibold mb-4 text-yellow-300">
                    From problem to product. From process to intelligence.
                  </p>
                  <p className="text-white/90 mb-4">
                    From raw intent to production-ready prototypes. Actuate is our AI-native delivery engine.
                  </p>
                  <p className="text-white/80">
                    It transforms ideas into testable tools, streamlines operations with intelligent automation, and delivers applied AI without the fluff.
                  </p>
                </motion.div>
              </Link>

              <Link to="/intentops">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gradient-to-br from-blue-900/90 via-slate-800/90 to-blue-950/90 backdrop-blur-sm p-8 rounded-xl border border-amber-500/30 hover:border-amber-400/50 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                >
                  <h3 className="text-2xl font-bold text-amber-400 mb-4 group-hover:text-amber-300 transition-colors">IntentOps</h3>
                  <p className="text-lg font-semibold mb-4 text-amber-200">
                    AI adoption is consensus. Aligned execution is competitive advantage.
                  </p>
                  <p className="text-white/90 mb-4">
                    IntentOps is your strategic telemetry layer - aligning portfolio intent to operational delivery in real time.
                  </p>
                  <p className="text-white/80">
                    It helps you contain cognitive debt, reduce drift, and steer AI-era transformation with confidence.
                  </p>
                </motion.div>
              </Link>
            </div>

            {/* Service Pills */}
            <div className="flex flex-wrap justify-center gap-4 mt-8 mb-8">
              <div className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full text-sm font-medium">
                Flowency → Capability
              </div>
              <Link to="/actuate">
                <div className="bg-gradient-to-r from-emerald-600 via-teal-700 to-green-800 text-yellow-300 px-6 py-3 rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer">
                  Actuate → Activation
                </div>
              </Link>
              <Link to="/intentops">
                <div className="bg-gradient-to-r from-blue-900 via-slate-800 to-blue-950 text-yellow-300 px-6 py-3 rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer">
                  IntentOps → Alignment
                </div>
              </Link>
            </div>

            <div className="mt-8">
              <div className="relative bg-gradient-to-br from-card/80 to-card p-10 rounded-3xl border-2 border-border shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-emerald-500/5 rounded-3xl"></div>
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-primary via-purple-500 to-emerald-500 rounded-full"></div>
                <div className="relative">
                  <div className="text-center">
                    <p className="text-2xl font-semibold text-card-foreground leading-relaxed max-w-4xl mx-auto">
                      Together, <span className="text-primary font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Flowency</span> + <Link to="/intentops" className="text-purple-600 hover:text-purple-700 transition-all duration-300 font-bold relative group">IntentOps<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span></Link> + <Link to="/actuate" className="text-emerald-600 hover:text-emerald-700 transition-all duration-300 font-bold relative group">Actuate<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span></Link> form an adaptive operating stack - built to govern, deliver and evolve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer 
        ctaText="Ready to optimise your delivery systems?"
        ctaDescription="Get in touch to discuss how we can help your delivery systems flow."
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
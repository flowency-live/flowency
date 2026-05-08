import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Flowency",
    "url": "https://flowency.co.uk",
    "description": "Delivery optimisation and capability uplift consultancy helping organisations achieve flow",
    "founder": {
      "@type": "Person",
      "name": "Jason Jones",
      "url": "https://jasonjones.uk"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="About - Flowency"
        description="Flowency brings together a curated network of experienced delivery, AI, and transformation specialists. Founded by Jason Jones."
        keywords="delivery consultancy, flow, agile, AI transformation, Jason Jones"
        ogTitle="About Flowency"
        ogDescription="A curated network of experienced delivery and transformation specialists."
        canonicalUrl="https://flowency.co.uk/about"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="section-gradient-hero pt-32 pb-20 min-h-[50vh] flex items-center relative overflow-hidden">
        {/* Subtle background glow */}
        <div
          className="absolute right-0 top-1/4 w-[60vw] h-[60vh]"
          style={{
            background: 'radial-gradient(ellipse at 70% 40%, rgba(200,120,80,0.12) 0%, rgba(200,100,60,0.06) 30%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="micro-label block mb-4 text-white/50">Who We Are</span>
            <h1 className="headline text-white mb-8" style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', lineHeight: 0.95 }}>
              ABOUT<br />
              <span className="text-white/50">FLOWENCY</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl">
              A curated network of experienced specialists, assembled for each engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Network Section */}
      <section className="section-dark py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div {...fadeIn}>
              <h2 className="headline-secondary text-white mb-6">
                The Network Model
              </h2>
              <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                <p>
                  Flowency brings together a curated network of experienced delivery, AI, and transformation specialists. We assemble the right expertise for each engagement - senior practitioners who've built real systems, not frameworks.
                </p>
                <p>
                  No bench. No juniors learning on your budget. Every engagement draws from a network of people who've done this before, in contexts that matter.
                </p>
                <p className="text-white font-medium">
                  The right people, for the right problem, at the right time.
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <div className="p-8 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Collective Expertise</h3>
                <ul className="space-y-3 text-white/60">
                  <li className="flex items-start gap-3">
                    <span className="text-[hsl(18,55%,55%)] mt-1">→</span>
                    <span>Delivery and flow optimisation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[hsl(18,55%,55%)] mt-1">→</span>
                    <span>AI strategy and implementation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[hsl(18,55%,55%)] mt-1">→</span>
                    <span>Organisational transformation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[hsl(18,55%,55%)] mt-1">→</span>
                    <span>Capability development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[hsl(18,55%,55%)] mt-1">→</span>
                    <span>Product and portfolio management</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-band-accent py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Founded by Jason Jones
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              With over 25 years of experience across delivery, operations, and AI, Jason founded Flowency to bring enterprise-grade capability to organisations of all sizes - without the enterprise theatre.
            </p>
            <a
              href="https://jasonjones.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-semibold border-b-2 border-white/30 pb-1 hover:border-white transition-colors"
            >
              More about Jason
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* What We Believe Section */}
      <section className="section-dark py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeIn} className="mb-12">
            <span className="micro-label block mb-4 text-white/50">Our Principles</span>
            <h2 className="headline-secondary text-white">
              What We Believe
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.1]">
            {[
              { title: "Context always wins", desc: "No framework survives contact with reality unchanged" },
              { title: "Simplicity over complexity", desc: "The best solution is usually the simplest one that works" },
              { title: "Outcomes over activity", desc: "We measure success by what changes, not what we do" },
              { title: "Capability over dependency", desc: "We leave you stronger, not reliant on us" },
              { title: "Practitioners over theorists", desc: "Everyone in our network has built real things" },
              { title: "Delivery over theatre", desc: "Results matter more than impressive slide decks" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="p-8 bg-[hsl(215,40%,12%)]"
              >
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-white/55">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-band-accent py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to talk?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Whether you're looking to optimise delivery, navigate AI adoption, or build lasting capability - let's start with a conversation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[hsl(18,55%,40%)] font-semibold rounded-lg hover:bg-white/90 transition-colors"
            >
              Get in touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer showCta={false} />
    </div>
  );
}

import { useState, useRef } from "react";
import { Link } from "wouter";
import { Menu, X, Play, Maximize, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function VideoPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Optimize Delivery Systems",
    "description": "Learn how Flowency helps organisations optimise their delivery systems for better flow and outcomes.",
    "thumbnailUrl": "https://flowency.co.uk/assets/og-image.png",
    "uploadDate": new Date().toISOString(),
    "contentUrl": "https://flowency.co.uk/assets/videos/optimize-delivery-systems.mp4",
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="min-h-screen" style={{ background: 'hsl(215, 40%, 12%)' }}>
      <SEOHead
        title="Optimize Delivery Systems | Flowency"
        description="Watch how Flowency helps organisations optimise their delivery systems for better flow, reduced waste, and improved outcomes."
        keywords="delivery optimisation, flow efficiency, Flowency video, delivery systems"
        canonicalUrl="https://flowency.co.uk/resources/optimize-delivery"
        structuredData={structuredData}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10" style={{ background: 'hsla(215, 40%, 10%, 0.98)', backdropFilter: 'blur(8px)' }}>
        <div className="max-content">
          <div className="flex justify-between items-center h-16">
            <Link to="/">
              <img
                src="/assets/flowency-logo-dark.svg"
                alt="Flowency"
                className="h-9 w-auto cursor-pointer hover:opacity-70 transition-opacity"
              />
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/#approach" className="text-sm text-white/60 hover:text-white transition-colors">
                Approach
              </Link>
              <Link to="/#services" className="text-sm text-white/60 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/ai-services" className="text-sm text-white/60 hover:text-white transition-colors">
                AI Services
              </Link>
              <ThemeToggle />
              <Link
                to="/contact"
                className="px-5 py-2 text-sm font-medium text-white bg-[hsl(18,55%,48%)] hover:bg-[hsl(18,55%,45%)] transition-colors rounded"
              >
                Contact
              </Link>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10" style={{ background: 'hsl(215, 40%, 10%)' }}>
            <div className="px-6 py-4 space-y-3">
              <Link to="/" className="block text-white hover:text-[hsl(18,55%,55%)] transition-colors">
                Home
              </Link>
              <Link to="/ai-services" className="block text-white hover:text-[hsl(18,55%,55%)] transition-colors">
                AI Services
              </Link>
              <Link to="/contact" className="block text-white hover:text-[hsl(18,55%,55%)] transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-section">
        <div className="max-content max-w-5xl">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="micro-label block mb-6 text-white/50">Resources</span>
            <h1 className="headline text-white mb-8" style={{ fontSize: 'clamp(2.5rem, 7vw, 4rem)' }}>
              OPTIMIZE DELIVERY SYSTEMS
            </h1>
            <p className="body-narrow text-white/60 mx-auto">
              See how Flowency helps organisations achieve better flow, reduce waste, and deliver more value.
            </p>
          </motion.div>

          {/* Video Player Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-black rounded-lg overflow-hidden shadow-2xl"
          >
            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full aspect-video"
              controls
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            >
              <source src="/assets/videos/optimize-delivery-systems.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Custom Controls Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Play/Pause Button */}
                  <button
                    onClick={handlePlayClick}
                    className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? (
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <rect x="6" y="4" width="4" height="16" />
                        <rect x="14" y="4" width="4" height="16" />
                      </svg>
                    ) : (
                      <Play className="w-5 h-5 text-white ml-0.5" fill="currentColor" />
                    )}
                  </button>

                  {/* Mute/Unmute Button */}
                  <button
                    onClick={toggleMute}
                    className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5 text-white" />
                    ) : (
                      <Volume2 className="w-5 h-5 text-white" />
                    )}
                  </button>
                </div>

                {/* Fullscreen Button */}
                <button
                  onClick={handleFullscreen}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                  aria-label="Enter fullscreen"
                >
                  <Maximize className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Play Button Overlay (shown when paused) */}
            {!isPlaying && (
              <button
                onClick={handlePlayClick}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
                aria-label="Play video"
              >
                <div className="w-20 h-20 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transition-colors shadow-lg">
                  <Play className="w-10 h-10 text-gray-900 ml-1" fill="currentColor" />
                </div>
              </button>
            )}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-20"
          >
            <div className="divider-line mb-12" />
            <p className="headline-tertiary text-white mb-6">
              Ready to optimise your delivery systems?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-semibold text-[hsl(18,55%,55%)] text-lg hover:gap-3 transition-all"
            >
              Get in Touch
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-content">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} Flowency. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="text-sm text-white/50 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link to="/terms-of-use" className="text-sm text-white/50 hover:text-white transition-colors">
                Terms
              </Link>
              <Link to="/cookie-policy" className="text-sm text-white/50 hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

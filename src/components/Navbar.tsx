import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  sections: { id: string; label: string }[];
}

export default function Navbar({ sections }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track active section and navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 200; // Offset for nav height
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "glass-navbar py-3 shadow-lg" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
            className="flex items-center gap-2 text-xl font-display font-bold text-white group"
          >
            <div className="p-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 group-hover:bg-purple-500/20 group-hover:border-purple-500/50 transition-all">
              <Code2 className="w-5 h-5 text-purple-400" />
            </div>
            <span className="tracking-wider">C R RENUKA</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(section.id);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                  activeSection === section.id
                    ? "text-purple-400"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {section.label}
                {activeSection === section.id && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-purple-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[60px] z-40 bg-[#080710]/95 backdrop-blur-xl md:hidden px-6 py-8 flex flex-col gap-4 border-t border-white/5"
          >
            {sections.map((section) => (
              <motion.a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(section.id);
                }}
                className={`py-3 px-4 rounded-xl text-lg font-medium border transition-all ${
                  activeSection === section.id
                    ? "text-white bg-purple-600/20 border-purple-500/30 font-semibold"
                    : "text-slate-300 border-transparent hover:text-white hover:bg-white/5"
                }`}
                whileTap={{ scale: 0.98 }}
              >
                {section.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

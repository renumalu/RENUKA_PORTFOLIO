import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  const navSections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <div className="relative min-h-screen bg-[#05010d] text-gray-100 antialiased selection:bg-purple-500/30 selection:text-white">
      {/* Dynamic tech grain-mesh style overlay */}
      <div className="fixed inset-0 bg-[#05010d] pointer-events-none -z-50" />
      
      {/* Sticky navigation rail */}
      <Navbar sections={navSections} />

      {/* Main Single-Page Stack */}
      <main className="relative z-10">
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      {/* Footer attribution & copyright info */}
      <Footer />

      {/* Back to top floating indicator */}
      <BackToTop />
    </div>
  );
}

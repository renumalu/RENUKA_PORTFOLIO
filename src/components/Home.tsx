import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, MessageSquare, Briefcase } from "lucide-react";
import { motion } from "motion/react";
import { personalInfo } from "../data";

export default function Home() {
  const roles = [
    "Computer Science Student",
    "AI Developer",
    "Full Stack Developer",
    "Problem Solver"
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Typing speed configuration
  const TYPING_SPEED = 100;
  const DELETING_SPEED = 50;
  const PAUSE_DURATION = 2000;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = roles[currentRoleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(prev => prev.slice(0, -1));
      }, DELETING_SPEED);
    } else {
      timer = setTimeout(() => {
        setCurrentText(prev => fullText.slice(0, prev.length + 1));
      }, TYPING_SPEED);
    }

    // Switch to deleting state once word is fully typed
    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
    } 
    // Switch to next word once deletion is complete
    else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex(prev => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Dynamic tech grid background */}
      <div className="absolute inset-0 z-0 opacity-25">
        <div className="absolute inset-0 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      </div>

      {/* Floating abstract tech glow spheres */}
      <div className="glow-spot-indigo w-[400px] h-[400px] top-1/4 left-10 md:left-20 animate-pulse duration-[8s]" />
      <div className="glow-spot-purple w-[400px] h-[400px] bottom-1/4 right-10 md:right-20 animate-pulse duration-[6s]" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col items-center text-center">
        {/* Modern high-contrast label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-purple-500/30 text-purple-300 text-xs md:text-sm font-semibold tracking-wide uppercase mb-6"
        >
          <Sparkles className="w-4 h-4 text-purple-400 animate-spin duration-[4s]" />
          <span>Available for Internships & Projects</span>
        </motion.div>

        {/* Display name prominently with letter-spacing */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl md:text-8xl font-display font-extrabold tracking-tight text-white mb-4"
        >
          <span className="text-gradient">
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Typing animation subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-2xl font-medium text-slate-300 min-h-[40px] mb-8"
        >
          <span>{personalInfo.title.split("|")[0]}</span>
          <span className="text-purple-400 mx-2">|</span>
          <span className="text-slate-100 font-mono inline-block">
            <span className="typing-cursor pr-1 font-semibold">{currentText}</span>
          </span>
        </motion.div>

        {/* Professional introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="max-w-3xl text-sm md:text-lg text-gray-400 leading-relaxed font-sans mb-12"
        >
          {personalInfo.introduction}
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto"
        >
          {/* Contact Me Button */}
          <button
            onClick={() => handleScrollTo("contact")}
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-500 font-semibold text-white tracking-wide shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer"
          >
            <span>Contact Me</span>
            <MessageSquare className="w-5 h-5 text-purple-200 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* View Skills Button */}
          <button
            onClick={() => handleScrollTo("skills")}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass-card hover:bg-white/10 border border-white/10 font-semibold text-white tracking-wide transition-all duration-300 cursor-pointer"
          >
            <span>View Skills</span>
            <Briefcase className="w-5 h-5 text-purple-400" />
          </button>
        </motion.div>

        {/* Animated Tech Visual Mockup Background illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[90%] max-w-[1000px] h-[300px] border border-purple-500/20 rounded-t-3xl bg-gradient-to-b from-purple-600/10 to-transparent pointer-events-none"
        >
          {/* Decorative code layout elements within illustration */}
          <div className="absolute top-4 left-6 flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <div className="absolute top-12 left-6 right-6 font-mono text-[10px] text-purple-300/40 text-left space-y-2 select-none leading-normal">
            <div><span className="text-purple-400">const</span> portfolio = <span className="text-blue-400">new</span> <span className="text-yellow-400">Developer</span>(<span className="text-green-300">"C R Renuka"</span>);</div>
            <div>portfolio.<span className="text-indigo-300">buildInnovativeProjects</span>();</div>
            <div>portfolio.<span className="text-indigo-300">solveRealWorldProblems</span>(<span className="text-green-300">"Artificial Intelligence"</span>);</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { Terminal, Shield, Cpu, Layout, Server, Database, Settings } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { skillCategories } from "../data";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Get matching category icon
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case "Programming Languages":
        return Cpu;
      case "Frontend":
        return Layout;
      case "Backend":
        return Server;
      case "Database":
        return Database;
      case "Tools":
        return Settings;
      default:
        return Terminal;
    }
  };

  // Categories list including 'All'
  const categories = ["All", ...skillCategories.map(c => c.title)];

  const filteredCategories = selectedCategory === "All"
    ? skillCategories
    : skillCategories.filter(c => c.title === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#05010d]">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] glow-spot-purple opacity-10" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] glow-spot-indigo opacity-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Tech Stack</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-extrabold text-white"
          >
            Skills & Expertise
          </motion.h2>
          <div className="mt-4 w-12 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 relative cursor-pointer ${
                selectedCategory === cat
                  ? "text-white bg-purple-600 border border-purple-500 shadow-md"
                  : "text-gray-400 border border-white/5 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => {
              const IconComp = getCategoryIcon(category.title);
              return (
                <motion.div
                  key={category.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card p-6 rounded-2xl flex flex-col h-full relative overflow-hidden group"
                >
                  {/* Category Card Header */}
                  <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                    <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20 transition-all shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List in Category */}
                  <div className="flex flex-wrap gap-2.5 mt-auto">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.div
                        key={skillIdx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: skillIdx * 0.05 }}
                        className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-950/60 border border-white/5 text-gray-300 text-xs md:text-sm font-medium hover:text-white hover:border-purple-500/30 hover:bg-purple-500/5 transition-all cursor-default"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover:bg-purple-300 animate-pulse" />
                        <span>{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

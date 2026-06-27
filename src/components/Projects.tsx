import { Briefcase, ArrowUpRight, Github, ExternalLink, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { projectsInfo } from "../data";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#05010d]">
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] glow-spot-indigo opacity-10 animate-pulse duration-[8s]" />

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
            <Briefcase className="w-3.5 h-3.5" />
            <span>Showcase Portfolio</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-extrabold text-white"
          >
            Featured Projects
          </motion.h2>
          <div className="mt-4 w-12 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Projects Cards Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projectsInfo.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="relative glass-card rounded-3xl p-6 md:p-8 flex flex-col justify-between overflow-hidden group h-full"
            >
              {/* Highlight background on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div>
                {/* Project index marker & Category */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest">
                    Project 0{idx + 1}
                  </span>
                  <div className="flex gap-2 relative z-10">
                    <a
                      href={project.githubLink || "https://github.com/renumalu"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-950/40 hover:bg-purple-500/20 text-slate-400 hover:text-white border border-white/5 hover:border-purple-500/25 transition-all cursor-pointer"
                      aria-label="View Github"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.githubLink || "https://github.com/renumalu"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-950/40 hover:bg-purple-500/20 text-purple-400 hover:text-white border border-white/5 hover:border-purple-500/25 transition-all cursor-pointer"
                      aria-label="View Project Link"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors mb-4">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Features list */}
                {project.features && (
                  <div className="space-y-2.5 mb-6">
                    {project.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex gap-2.5 items-start">
                        <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-xs md:text-sm leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Tags / Technologies footer */}
              <div className="border-t border-white/5 pt-6 mt-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1.5 rounded-lg bg-slate-950/60 border border-white/5 text-gray-300 text-xs font-mono hover:border-purple-500/30 hover:text-white transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

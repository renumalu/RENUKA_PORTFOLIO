import { Trophy, Award, Medal, Star } from "lucide-react";
import { motion } from "motion/react";
import { achievementsInfo } from "../data";

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Get matching badge icon
  const getBadgeIcon = (id: string) => {
    switch (id) {
      case "acad-excel":
        return Medal;
      case "eclearnix":
        return Trophy;
      case "elite":
        return Trophy;
      case "tancam":
        return Award;
      default:
        return Star;
    }
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[#05010d]">
      {/* Decorative glows */}
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] glow-spot-purple opacity-10 animate-pulse" />

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
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Milestones</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-extrabold text-white"
          >
            Achievements
          </motion.h2>
          <div className="mt-4 w-12 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Achievements Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievementsInfo.map((achievement) => {
            const IconComp = getBadgeIcon(achievement.id);
            return (
              <motion.div
                key={achievement.id}
                variants={cardVariants}
                className="relative glass-card rounded-2xl p-6 flex flex-col items-center text-center justify-between group overflow-hidden h-full"
                whileHover={{ y: -4 }}
              >
                {/* Custom inner lighting */}
                <div className="absolute -inset-x-20 -top-20 h-40 bg-purple-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex flex-col items-center relative z-10 w-full">
                  {/* Achievement Badge Sphere */}
                  <div className="w-14 h-14 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-all duration-300 mb-6">
                    <IconComp className="w-6 h-6" />
                  </div>

                  {/* Title / Rank */}
                  <h3 className="text-lg font-display font-bold text-white tracking-tight leading-snug mb-2 group-hover:text-purple-300 transition-colors">
                    {achievement.title}
                  </h3>

                  {/* Subtitle / Context */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {achievement.subtitle}
                  </p>
                </div>

                {/* Bottom decorative anchor accent line */}
                <div className="w-6 h-0.5 bg-purple-500/40 rounded-full group-hover:w-16 group-hover:bg-purple-400 transition-all duration-300 mt-2" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

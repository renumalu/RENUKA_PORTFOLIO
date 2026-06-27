import { User, Target, GraduationCap, Heart } from "lucide-react";
import { motion } from "motion/react";
import { aboutMeInfo } from "../data";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Additional stats indicators
  const techCards = [
    {
      icon: Target,
      title: "Core Values",
      desc: "Problem-solving, scalable logic & direct industry impact."
    },
    {
      icon: GraduationCap,
      title: "Education Focus",
      desc: "Engineering fundamentals, AI pipelines & Modern web development."
    },
    {
      icon: Heart,
      title: "Interests",
      desc: "Hackathons, team learning & designing user experiences."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#090812]">
      {/* Decorative background gradients */}
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] glow-spot-purple opacity-10" />

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
            <User className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-extrabold text-white"
          >
            {aboutMeInfo.heading}
          </motion.h2>
          <div className="mt-4 w-12 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Text and Bio block */}
          <div className="lg:col-span-7 space-y-6">
            {aboutMeInfo.paragraphs.map((para, idx) => (
              <motion.p
                key={idx}
                variants={itemVariants}
                className="text-gray-300 text-base md:text-lg leading-relaxed font-sans first:text-white first:font-medium"
              >
                {para}
              </motion.p>
            ))}

            {/* Quick tag checklist */}
            <motion.div variants={itemVariants} className="pt-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
                Core Domains & Interests:
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {aboutMeInfo.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium hover:bg-purple-500/20 hover:border-purple-500/40 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Interactive features cards layout */}
          <div className="lg:col-span-5 space-y-4">
            {techCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="glass-card p-5 rounded-2xl flex gap-4 items-start relative group overflow-hidden"
                  whileHover={{ x: 6 }}
                >
                  {/* Subtle hover background accent highlight */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20 transition-all shrink-0">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-white mb-1">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

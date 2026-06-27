import { GraduationCap, Award, Calendar, BookOpen, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { educationInfo } from "../data";

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#05010d]">
      {/* Decorative glows */}
      <div className="absolute top-1/3 left-0 w-[250px] h-[250px] glow-spot-indigo opacity-10" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-extrabold text-white"
          >
            Education
          </motion.h2>
          <div className="mt-4 w-12 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Education Timeline Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative glass-card p-8 md:p-12 rounded-3xl overflow-hidden group"
        >
          {/* Subtle top indicator border gradient */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-purple-600 to-blue-500" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Institution and Major */}
            <div className="md:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/25 text-xs font-semibold uppercase tracking-wider">
                  Active BE Degree
                </span>
                <span className="flex items-center gap-1 text-gray-400 text-sm">
                  <Calendar className="w-4 h-4 text-purple-500" />
                  {educationInfo.duration}
                </span>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-display font-extrabold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                  {educationInfo.degree}
                </h3>
                <p className="text-lg font-medium text-gray-300 mt-1">
                  {educationInfo.major}
                </p>
              </div>

              <div className="space-y-2 pt-2 text-gray-400">
                <p className="flex items-center gap-2 text-base font-semibold text-gray-200">
                  <BookOpen className="w-5 h-5 text-purple-400" />
                  {educationInfo.institution}
                </p>
                <p className="flex items-center gap-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  Chennai, Tamil Nadu, India
                </p>
              </div>
            </div>

            {/* Academic stats display */}
            <div className="md:col-span-4 flex flex-col items-center justify-center h-full">
              <div className="relative p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-center w-full max-w-[200px] overflow-hidden group/gpa">
                {/* Background glow in stats card */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-0 group-hover/gpa:opacity-20 transition duration-500" />
                
                <div className="relative z-10">
                  <Award className="w-8 h-8 text-purple-400 mx-auto mb-2 animate-bounce" />
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1">
                    Cumulative GPA
                  </span>
                  <span className="text-4xl font-display font-extrabold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent block">
                    {educationInfo.cgpa}
                  </span>
                  <span className="text-xs text-purple-400 font-medium block mt-1">
                    Scale: 10.0
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Academic features list inside card */}
          <div className="border-t border-white/5 mt-8 pt-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Key Academic Foundations:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                <span>Data Structures & Algorithms</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                <span>Object-Oriented Programming (OOPs)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                <span>Database Management Systems (DBMS)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                <span>Artificial Intelligence & Neural Networks</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

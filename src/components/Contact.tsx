import { useState, FormEvent, ChangeEvent } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { contactInfo } from "../data";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSubmitting(true);
    // Simulate API pipeline sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Store in local storage for session reference
      const existingMsgs = JSON.parse(localStorage.getItem("messages") || "[]");
      existingMsgs.push({ ...formState, date: new Date().toISOString() });
      localStorage.setItem("messages", JSON.stringify(existingMsgs));
      
      // Reset form
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#05010d]">
      {/* Background radial glows */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] glow-spot-indigo opacity-10" />
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] glow-spot-purple opacity-5" />

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
            <Mail className="w-3.5 h-3.5" />
            <span>Connect channels</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-extrabold text-white"
          >
            Contact Me
          </motion.h2>
          <div className="mt-4 w-12 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct channels cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-display font-extrabold text-white mb-2">
              Let's create something great!
            </h3>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8">
              Feel free to reach out for internship opportunities, project collaborations, or just a technical discussion. I'm always open to connecting!
            </p>

            {/* Direct communication nodes */}
            <div className="space-y-4">
              {/* Email card */}
              <a
                href={`mailto:${contactInfo.email}`}
                className="glass-card p-5 rounded-2xl flex gap-4 items-center group overflow-hidden"
              >
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block mb-0.5">
                    Email Address
                  </span>
                  <span className="text-sm md:text-base font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {contactInfo.email}
                  </span>
                </div>
              </a>

              {/* Phone card */}
              <a
                href={`tel:${contactInfo.phone}`}
                className="glass-card p-5 rounded-2xl flex gap-4 items-center group overflow-hidden"
              >
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block mb-0.5">
                    Phone Number
                  </span>
                  <span className="text-sm md:text-base font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {contactInfo.phone}
                  </span>
                </div>
              </a>

              {/* Location card */}
              <div className="glass-card p-5 rounded-2xl flex gap-4 items-center group overflow-hidden">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20 transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block mb-0.5">
                    Location
                  </span>
                  <span className="text-sm md:text-base font-semibold text-white">
                    {contactInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social handles block */}
            <div className="pt-6">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-4">
                Social Networks & Handles
              </span>
              <div className="flex gap-3">
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl glass-card hover:bg-purple-500/20 hover:border-purple-500/30 text-slate-300 hover:text-white transition-all flex items-center gap-2 font-medium text-sm"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl glass-card hover:bg-purple-500/20 hover:border-purple-500/30 text-slate-300 hover:text-white transition-all flex items-center gap-2 font-medium text-sm"
                >
                  <Linkedin className="w-5 h-5 animate-pulse" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interaction email form card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-6 md:p-10 rounded-3xl relative"
            >
              {/* Form success banner overlay */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                    animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#080710]/90 z-20 rounded-3xl flex flex-col items-center justify-center p-6 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-400 flex items-center justify-center mb-6"
                    >
                      <CheckCircle className="w-8 h-8" />
                    </motion.div>
                    <h4 className="text-2xl font-display font-extrabold text-white mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-slate-400 text-sm max-w-md leading-relaxed mb-8">
                      Thank you for reaching out, Renuka will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold tracking-wide transition-all"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Contact form inputs */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950/60 border border-white/5 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="johndoe@example.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950/60 border border-white/5 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Internship / Collaboration opportunities"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950/60 border border-white/5 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950/60 border border-white/5 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 text-purple-200" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

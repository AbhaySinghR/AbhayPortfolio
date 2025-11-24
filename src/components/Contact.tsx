import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Github, Linkedin, Twitter, Target, Award } from "lucide-react";

const socials = [
  { name: "Email", icon: Mail, href: "mailto:abhaysaikap@gmail.com", label: "abhaysaikap@gmail.com", color: "from-red-500 to-pink-500" },
  { name: "GitHub", icon: Github, href: "https://github.com/AbhaySinghR", label: "AbhaySingh", color: "from-gray-500 to-gray-700" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/abhay", label: "/in/abhay", color: "from-blue-500 to-blue-700" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/abhay", label: "@abhay", color: "from-sky-500 to-blue-500" },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-6 relative" ref={ref}>
      {/* Glowing line separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Final level header */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/50">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-yellow-400 text-sm">Level 6 - Final Boss</div>
              <h2 className="text-white">Connect & Collaborate</h2>
            </div>
          </div>

          {/* Achievement unlocked banner */}
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -10 }}
            transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-8 shadow-lg shadow-yellow-500/50"
          >
            <Award className="w-5 h-5 text-white" />
            <span className="text-white">Achievement Unlocked: Portfolio Explorer!</span>
          </motion.div>

          <p className="text-neutral-400 mb-12 max-w-2xl mx-auto">
            Congratulations on completing the journey! Ready for the next quest? 
            Let's team up and build something amazing together.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  
                  <div className="relative flex items-center gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${social.color} transition-all">
                        {social.name}
                      </div>
                      <div className="text-neutral-400 text-sm">{social.label}</div>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Stats summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 max-w-2xl mx-auto"
          >
            <h3 className="text-white mb-6">Journey Statistics</h3>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">6/6</div>
                <div className="text-neutral-500 text-sm">Levels</div>
              </div>
              <div>
                <div className="text-3xl bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">100%</div>
                <div className="text-neutral-500 text-sm">Complete</div>
              </div>
              <div>
                <div className="text-3xl bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">∞</div>
                <div className="text-neutral-500 text-sm">Possibilities</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 pt-8 border-t border-neutral-800 text-center text-neutral-600"
        >
          <p>© 2025 Abhay. Built with React & Motion. Game on! 🎮</p>
        </motion.div>
      </div>
    </section>
  );
}
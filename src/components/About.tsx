import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { BookOpen, Sparkles } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: "Curiosity", value: 98, color: "from-blue-500 to-cyan-500" },
    { label: "Problem Solving", value: 95, color: "from-purple-500 to-pink-500" },
    { label: "Collaboration", value: 92, color: "from-orange-500 to-red-500" },
    { label: "Innovation", value: 96, color: "from-green-500 to-emerald-500" },
  ];

  return (
    <section className="py-24 px-6 relative" ref={ref}>
      {/* Glowing line separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          {/* Level header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-cyan-400 text-sm">Level 2</div>
              <h2 className="text-white">Origin Story</h2>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="ml-auto"
            >
              <Sparkles className="w-6 h-6 text-yellow-500" />
            </motion.div>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 backdrop-blur-sm">
            <div className="space-y-4 text-neutral-400 mb-8">
              <p>
                I'm currently pursuing my Master's degree in Computer Science, where I'm diving deep 
                into advanced topics like distributed systems, machine learning, and software architecture.
              </p>
              <p>
                My journey in tech started with curiosity and has evolved into a passion for creating 
                elegant solutions to complex problems. I believe in writing clean, maintainable code 
                and staying updated with the latest industry trends.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source projects, reading 
                technical blogs, or experimenting with new frameworks and tools.
              </p>
            </div>

            {/* Character stats */}
            <div className="space-y-4">
              <div className="text-neutral-500 text-sm flex items-center gap-2 mb-4">
                <span>Character Attributes</span>
                <div className="flex-1 h-px bg-neutral-800" />
              </div>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-neutral-300 text-sm">{stat.label}</span>
                    <span className="text-neutral-500 text-sm">{stat.value}%</span>
                  </div>
                  <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${stat.color}`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${stat.value}%` } : { width: 0 }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
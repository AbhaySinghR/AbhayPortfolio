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
                With over 5+ years of hands-on experience in full-stack data development, I have built a career on solving complex problems through scalable solutions. 
                My professional journey is highlighted by my tenure as a Machine Learning Engineer at Maersk, a global shipping leader. There, I operated at the intersection of logistics and AI, deploying intelligent systems pivotal to modernizing global supply chain infrastructures
              </p>
              <p>
                Prior to this I worked as Data Engineer 2 for Microsoft as a contractor via MAQ Software, where I spearheaded projects that delivered enterprise-grade solutions essential to critical business operations.
              </p>
              <p>
                This technical trajectory is supported by my Masters in Applied Data Science from Indiana University Bloomington,
                where I specialized in Machine Learning Algorithms, Computer Vision and Deep Learning systems and solidified my expertise in Applied AI.
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
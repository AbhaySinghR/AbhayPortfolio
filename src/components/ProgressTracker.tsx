import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { Trophy, Zap } from "lucide-react";

const levels = [
  { id: "hero", name: "Start", icon: "🎮" },
  { id: "about", name: "Story", icon: "📖" },
  { id: "projects", name: "Quests", icon: "⚔️" },
  { id: "experience", name: "Journey", icon: "🗺️" },
  { id: "tech", name: "Skills", icon: "✨" },
  { id: "contact", name: "Connect", icon: "🎯" },
];

export function ProgressTracker() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [activeLevel, setActiveLevel] = useState(0);
  const [showTracker, setShowTracker] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sections = document.querySelectorAll("section");
      
      sections.forEach((section, index) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        
        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveLevel(index);
        }
      });

      setShowTracker(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Level tracker */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ 
          x: showTracker ? 0 : 100, 
          opacity: showTracker ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-40 bg-neutral-900/80 backdrop-blur-lg border border-neutral-800 rounded-2xl p-4 shadow-2xl"
      >
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neutral-800">
          <Trophy className="w-4 h-4 text-yellow-500" />
          <span className="text-white text-sm">Level {activeLevel + 1}/6</span>
        </div>
        
        <div className="space-y-3">
          {levels.map((level, index) => (
            <motion.div
              key={level.id}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <motion.div
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                  index <= activeLevel
                    ? "bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50"
                    : "bg-neutral-800"
                }`}
                animate={index === activeLevel ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <span className="text-sm">{level.icon}</span>
              </motion.div>
              <span
                className={`text-xs ${
                  index <= activeLevel ? "text-white" : "text-neutral-600"
                }`}
              >
                {level.name}
              </span>
              {index === activeLevel && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="ml-auto"
                >
                  <Zap className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* XP Bar */}
        <div className="mt-4 pt-3 border-t border-neutral-800">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-neutral-400">XP</span>
            <span className="text-xs text-neutral-400">{Math.round((activeLevel / 5) * 100)}%</span>
          </div>
          <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
              initial={{ width: 0 }}
              animate={{ width: `${(activeLevel / 5) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}

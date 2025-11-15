import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Gamepad2, ArrowDown } from "lucide-react";

const greetings = [
  { text: "Hello, I'm Abhay", lang: "English" },
  { text: "Hola, soy Abhay", lang: "Spanish" },
  { text: "Bonjour, je suis Abhay", lang: "French" },
  { text: "नमस्ते, मैं अभय हूं", lang: "Hindi" },
  { text: "こんにちは、アバイです", lang: "Japanese" },
  { text: "Hallo, ich bin Abhay", lang: "German" },
  { text: "Ciao, sono Abhay", lang: "Italian" },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % greetings.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      <div className="max-w-4xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Level badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full"
          >
            <Gamepad2 className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm">Level 1: Start Your Journey</span>
          </motion.div>

          <div className="h-24 flex items-center">
            <motion.h1
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              {greetings[currentIndex].text}
            </motion.h1>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-neutral-400 max-w-2xl"
          >
            Master's student on a quest to build innovative solutions through code.
            Join me as I navigate through the realms of full-stack development and explore new technologies.
          </motion.p>

          {/* Stats display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex gap-6"
          >
            <div className="px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-lg">
              <div className="text-2xl text-white">20+</div>
              <div className="text-neutral-500 text-sm">Projects</div>
            </div>
            <div className="px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-lg">
              <div className="text-2xl text-white">3+</div>
              <div className="text-neutral-500 text-sm">Years XP</div>
            </div>
            <div className="px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-lg">
              <div className="text-2xl text-white">15+</div>
              <div className="text-neutral-500 text-sm">Technologies</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              Start Quest
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-neutral-700 text-white rounded-lg hover:bg-neutral-900 transition-colors"
            >
              Connect
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-neutral-500 text-sm">Scroll to continue</span>
          <ArrowDown className="w-5 h-5 text-neutral-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
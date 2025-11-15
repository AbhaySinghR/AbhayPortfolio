import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Code2, Database, Cloud, Wrench, Zap } from "lucide-react";

const techStack = [
  {
    category: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    level: 85,
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Backend",
    icon: Database,
    skills: ["Node.js", "Python", "Express", "Django", "PostgreSQL", "MongoDB"],
    level: 90,
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "DevOps & Cloud",
    icon: Cloud,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Git"],
    level: 78,
    color: "from-orange-500 to-red-500",
  },
  {
    category: "Tools & Others",
    icon: Wrench,
    skills: ["Linux", "REST APIs", "GraphQL", "Redis", "WebSocket"],
    level: 82,
    color: "from-green-500 to-emerald-500",
  },
];

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 relative" ref={ref}>
      {/* Glowing line separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/50">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-green-400 text-sm">Level 5</div>
            <h2 className="text-white">Skill Tree</h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {techStack.map((stack, index) => {
            const Icon = stack.icon;
            const isSelected = selectedCategory === stack.category;
            
            return (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setSelectedCategory(stack.category)}
                onHoverEnd={() => setSelectedCategory(null)}
                className={`bg-neutral-900/50 border rounded-2xl p-6 transition-all cursor-pointer ${
                  isSelected ? "border-purple-500" : "border-neutral-800"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-br ${stack.color} rounded-xl flex items-center justify-center shadow-lg`}
                    animate={isSelected ? { rotate: [0, -10, 10, -10, 0] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-white">{stack.category}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex-1 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${stack.color}`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${stack.level}%` } : { width: 0 }}
                          transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                        />
                      </div>
                      <span className="text-neutral-400 text-xs">Lv. {stack.level}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {stack.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                        isSelected 
                          ? `bg-gradient-to-r ${stack.color} text-white` 
                          : "bg-neutral-800 text-neutral-300"
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Github, ExternalLink, Sword, Star, Trophy } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    demo: "#",
    difficulty: "Epic",
    xp: 1500,
    status: "Completed",
  },
  {
    id: 2,
    title: "AI-Powered Chatbot",
    description: "Intelligent conversational agent using NLP and machine learning for customer support automation.",
    tech: ["Python", "TensorFlow", "Flask", "React"],
    github: "#",
    demo: "#",
    difficulty: "Legendary",
    xp: 2000,
    status: "Completed",
  },
  {
    id: 3,
    title: "Task Management System",
    description: "Collaborative project management tool with real-time updates, notifications, and team analytics.",
    tech: ["Next.js", "PostgreSQL", "Prisma", "WebSocket"],
    github: "#",
    demo: "#",
    difficulty: "Epic",
    xp: 1800,
    status: "Completed",
  },
  {
    id: 4,
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for analyzing large datasets with custom charts and real-time data streaming.",
    tech: ["React", "D3.js", "Express", "Redis"],
    github: "#",
    demo: "#",
    difficulty: "Epic",
    xp: 1600,
    status: "In Progress",
  },
];

const difficultyColors: Record<string, string> = {
  Epic: "from-purple-500 to-pink-500",
  Legendary: "from-yellow-500 to-orange-500",
};

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-6 relative" ref={ref}>
      {/* Glowing line separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/50">
            <Sword className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-purple-400 text-sm">Level 3</div>
            <h2 className="text-white">Epic Quests</h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="relative bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all overflow-hidden group"
            >
              {/* Glow effect on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${difficultyColors[project.difficulty]} opacity-0 group-hover:opacity-10 transition-opacity`}
                initial={false}
                animate={{ opacity: hoveredId === project.id ? 0.1 : 0 }}
              />

              {/* Quest badge */}
              <div className="flex items-center justify-between mb-4">
                <div className={`inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r ${difficultyColors[project.difficulty]} rounded-full text-xs text-white`}>
                  <Star className="w-3 h-3 fill-white" />
                  {project.difficulty}
                </div>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Trophy className="w-4 h-4" />
                  <span className="text-sm">+{project.xp} XP</span>
                </div>
              </div>

              <h3 className="text-white mb-3">{project.title}</h3>
              <p className="text-neutral-400 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-neutral-800 text-neutral-300 rounded-full text-sm border border-neutral-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Demo</span>
                  </a>
                </div>
                <div className={`text-xs px-2 py-1 rounded ${
                  project.status === "Completed" 
                    ? "bg-green-500/20 text-green-400" 
                    : "bg-yellow-500/20 text-yellow-400"
                }`}>
                  {project.status}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
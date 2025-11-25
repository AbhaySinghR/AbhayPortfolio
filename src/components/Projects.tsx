import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Github, ExternalLink, Sword, Star, Trophy } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "PoseNet: Pose Estimation for Primates using Vision Transformers",
    description: "Primate Pose Estimation with Vision Transformers To address the challenges of occlusion and species variability in primate behavioral analysis, I engineered a robust pose estimation pipeline using the OpenApePose dataset. Moving beyond traditional CNN baselines (ResNet/ResNeXt), I implemented and fine-tuned a Vision Transformer (ViTPose+) architecture using PyTorch and Hugging Face. This approach optimized keypoint detection through heatmap supervision and transfer learning, ultimately achieving >93% accuracy (PCK@0.2) and significantly outperforming standard convolutional models in complex, non-invasive tracking scenarios.",
    tech: ["Computer Vision", "PyTorch", "Hugging Face", "OpenApePose","MMPose","Python","Scikit-Learn"],
    github: "https://github.com/AbhaySinghR/PoseNet-Ape-Pose-Detection",
    demo: "https://github.com/AbhaySinghR/PoseNet-Ape-Pose-Detection",
    difficulty: "Epic",
    xp: 1500,
    status: "Completed",
  },
  {
    id: 2,
    title: "ServiceNow: Idea Portal Evaluation AI Agent",
    description: "InnovAIte is an advanced platform designed to streamline the process of innovation by empowering users to submit ideas and have them prioritized using artificial intelligence. The platform utilizes an AI agent powered by the ReAct (ReInnovAItection) framework to evaluate ideas based on Business Impact, Return on Investment (ROI), and Strategic Alignment. With a user-friendly frontend and a powerful backend, InnovAIte helps businesses maximize the value of customer-driven innovation while offering clear insights and tracking the development process through a PowerBI Analytics Dashboard.",
    tech: ["Python", "Flask", "React","PandasAI","PowerBI","Streamlit","LangChain","OpenAI API","Random Forest"],
    github: "https://github.com/suhaasbadada/4tokens",
    difficulty: "Legendary",
    xp: 2000,
    status: "Completed",
  },
  {
    id: 3,
    title: "Advanced RAG Architecture: Naive vs. Graph Implementation",
    description: "To optimize Large Language Model performance in document-based QA, I engineered a comparative analysis between a Naive RAG baseline and an advanced Graph RAG architecture. This project moved beyond simple vector retrieval by integrating knowledge graph structures to capture higher-order data relationships. I rigorously evaluated both implementations across four key metrics—Diversity, Comprehensiveness, Directness, and Global Context—demonstrating the distinct trade-offs between standard embedding-based search and structured, context-aware retrieval for complex information synthesis.",
    tech: ["Python", "LangChain", "VectorDB", "Embeddings","Hugging Face","Groq","OpenAI API","Knowledge Graphs"],
    github: "https://github.com/AbhaySinghR/AskDocsAI",
    difficulty: "Epic",
    xp: 1800,
    status: "Completed",
  },
  {
    id: 4,
    title: "Indiana Toxicity Watch Platform",
    description: "The Indiana Toxicity Watch platform is designed to empower citizens, policymakers, and researchers by providing a comprehensive, accessible, and interactive tool to monitor toxic chemicals, their geolocation, and the associated health risks in Indiana. This project integrates multiple data sources, offering visualizations, health risk analysis, and a web-based search tool to track environmental risks and enable informed decisions.",
    tech: ["Flask", "PowerBI", "SQL", "Python","Machine Learning Algorithms","Data Visualization","Arc GIS", "LLMs","LangChain"],
    github: "https://github.com/AbhaySinghR/Indiana-Toxicity-Watch",
    demo: "#",
    difficulty: "Epic",
    xp: 1600,
    status: "Completed",
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
                className={`absolute inset-0 pointer-events-none bg-gradient-to-br ${difficultyColors[project.difficulty]} opacity-0 group-hover:opacity-10 transition-opacity`}
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
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
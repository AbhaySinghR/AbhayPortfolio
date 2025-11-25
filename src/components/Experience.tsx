import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase, GraduationCap, Map, Milestone } from "lucide-react";

const experiences = [
  {
    id: 1,
    type: "work",
    title: "Machine Learning Engineer",
    company: "ONeill School of Public and Environmental Affairs",
    period: "Jun 2025 - Present",
    description: "Building the Indiana Toxicity Watch: A critical public resource that translates complex pollution data into clear, visual risk maps, empowering communities and officials to identify and mitigate environmental health hazards statewide.",
    skills: ["Python","SQL","Pandas", "AWS", "LLMs", "AI Agent", "Retrieval","LangChain","VectorDBs"],
    achievement: "Hackathon Win turned into a Full-Scale Project for the state of Indiana.",
  },
  {
    id: 2,
    type: "work",
    title: "Data Science Intern",
    company: "REN-ISAC",
    period: "Sep 2024 - Jan 2025",
    description: "Developed advanced machine learning defenses to improve network security across higher education, resulting in significantly faster and more accurate identification of early-stage threats like DDoS attacks.",
    skills: ["Machine Learning", "EDA", "Python", "Scikit-Learn", "Pandas", "NumPy", "Data Visualization"],
    achievement: "Engineered an AI-enhanced security platform for over 700 universities, cutting threat response time by 70% and boosting early network attack detection to 87%.",
  },
  {
    id: 3,
    type: "work",
    title: "Data Scientist",
    company: "AP Moller Maersk",
    period: "Apr 2022 - Aug 2024",
    description: "eveloped and implemented specialized AI algorithms to optimize global container routing and equipment forecasting, directly contributing to millions in cost reduction and significantly enhancing the efficiency of key supply chain operations.",
    skills: ["Python","SQL","Machine Learning Algorithms", "Azure", "CI/CD", "Team Collaboration", "Customer-First Mindset"],
    achievement: "Champion of the Quarter - Twice"
  },
  {
    id: 4,
    type: "work",
    title: "Data Engineer II",
    company: "Microsoft (via MAQ Software)",
    period: "Apr 2019 - Apr 2022",
    description: "Significantly optimized Microsoft's data infrastructure, slashing reporting times from minutes to seconds for critical business metrics and cutting operational costs by over 40% through advanced performance engineering.",
    skills: ["Azure", "ETL", "PowerBI","SQL","Data Warehousing","Performance Optimization","DAX","OLAP/OTLP","Data Modeling"],
    achievement: "Spot Award Winner - Thrice",
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6 relative" ref={ref}>
      {/* Glowing line separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/50">
            <Map className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-orange-400 text-sm">Level 4</div>
            <h2 className="text-white">Journey Timeline</h2>
          </div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-12 pb-8 last:pb-0"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-[9px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-transparent" />
              )}

              {/* Timeline dot */}
              <motion.div
                className="absolute left-0 top-0 w-5 h-5 rounded-full flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
              >
                <div className={`w-5 h-5 rounded-full ${
                  exp.type === "work" 
                    ? "bg-gradient-to-br from-purple-500 to-pink-500" 
                    : "bg-gradient-to-br from-cyan-500 to-blue-500"
                } flex items-center justify-center shadow-lg`}>
                  {exp.type === "work" ? (
                    <Briefcase className="w-3 h-3 text-white" />
                  ) : (
                    <GraduationCap className="w-3 h-3 text-white" />
                  )}
                </div>
              </motion.div>

              <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all">
                {/* Achievement badge */}
                <div className="flex items-center gap-2 mb-3">
                  <Milestone className="w-4 h-4 text-yellow-500" />
                  <span className="text-yellow-500 text-xs">Achievement: {exp.achievement}</span>
                </div>

                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <h3 className="text-white">{exp.title}</h3>
                  <span className="text-neutral-500 text-sm">{exp.period}</span>
                </div>
                <p className="text-purple-400 mb-3">{exp.company}</p>
                <p className="text-neutral-400 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-neutral-800 text-neutral-300 rounded-full text-sm border border-neutral-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase, GraduationCap, Map, Milestone } from "lucide-react";

const experiences = [
  {
    id: 1,
    type: "work",
    title: "Full Stack Developer Intern",
    company: "Tech Innovations Inc.",
    period: "Jun 2024 - Present",
    description: "Developing scalable web applications using React and Node.js. Implemented CI/CD pipelines and improved application performance by 40%.",
    skills: ["React", "Node.js", "AWS", "Docker"],
    achievement: "Performance Champion",
  },
  {
    id: 2,
    type: "education",
    title: "Master of Science in Computer Science",
    company: "University Name",
    period: "2023 - 2025",
    description: "Focusing on distributed systems, machine learning, and advanced algorithms. GPA: 3.9/4.0",
    skills: ["Machine Learning", "Distributed Systems", "Algorithms"],
    achievement: "Scholar",
  },
  {
    id: 3,
    type: "work",
    title: "Software Engineering Intern",
    company: "StartupXYZ",
    period: "Jan 2023 - May 2023",
    description: "Built RESTful APIs and integrated third-party services. Collaborated with cross-functional teams to deliver features on tight deadlines.",
    skills: ["Python", "FastAPI", "PostgreSQL", "Redis"],
    achievement: "Team Player",
  },
  {
    id: 4,
    type: "education",
    title: "Bachelor of Technology in Computer Science",
    company: "College Name",
    period: "2019 - 2023",
    description: "Graduated with honors. Led the college coding club and participated in multiple hackathons.",
    skills: ["Data Structures", "Algorithms", "Web Development"],
    achievement: "Leader",
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
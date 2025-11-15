import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { TechStack } from "./components/TechStack";
import { Contact } from "./components/Contact";
import { ProgressTracker } from "./components/ProgressTracker";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <ProgressTracker />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <TechStack />
      <Contact />
    </div>
  );
}
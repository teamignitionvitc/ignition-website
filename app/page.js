import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Departments from "./components/Departments";
import Sponsors from "./components/Sponsors";
import Background from "./components/Background";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Background />
      <Hero />
      <About />
      <Projects />
      <Departments />
      <Sponsors />
    </div>
  );
}

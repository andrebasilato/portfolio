import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

const About = dynamic(() => import("@/components/About"));
const Projects = dynamic(() => import("@/components/Projects"));
const Experience = dynamic(() => import("@/components/Experience"));
const Skills = dynamic(() => import("@/components/Skills"));
const Contact = dynamic(() => import("@/components/Contact"));
const Header = dynamic(() => import("@/components/Header"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home(): React.JSX.Element {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

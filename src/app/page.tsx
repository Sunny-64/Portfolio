import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Image from "next/image";

export default function Home() {
  return (
    <div>
        <header className="">
          <Navbar />
          <Hero />
        </header>
        <About />
        <Timeline />
        <Projects />
        <Contact />
    </div>
  );
}

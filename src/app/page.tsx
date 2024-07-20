import { Navbar, Hero, About, Timeline, Projects, Contact, Skills } from "@/components";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Timeline />
            <Projects />
            <Contact />
        </div>
    );
}

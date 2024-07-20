import { Navbar, Hero, About, Timeline, Projects, Contact } from "@/components";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Timeline />
            <Projects />
            <Contact />
        </div>
    );
}

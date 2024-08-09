import { Navbar, Hero, About, Timeline, Projects, Contact, Skills } from "@/components";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Timeline />
            <Projects />
            <Contact />
            <ScrollToTop />
        </>
    );
}

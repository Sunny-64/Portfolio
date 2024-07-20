import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Timeline from '@/components/Timeline';

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

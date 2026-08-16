import Nav from './components/Nav';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Milestones from './sections/Milestones';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Focus from './sections/Focus';
import Contact from './sections/Contact';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Milestones />
        <Education />
        <Projects />
        <Focus />
        <Contact />
      </main>
    </>
  );
}

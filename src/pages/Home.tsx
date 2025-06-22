import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import SectionWrapper from '../components/SectionWrapper';

/** Home page assembling all sections */
export default function Home() {
  return (
    <main>
      <SectionWrapper><Hero /></SectionWrapper>
      <SectionWrapper><About /></SectionWrapper>
      <SectionWrapper><Skills /></SectionWrapper>
      <SectionWrapper><Projects /></SectionWrapper>
      <SectionWrapper><Contact /></SectionWrapper>
    </main>
  );
}

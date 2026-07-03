import portfolioData from './data/portfolioData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const { profile, skills, projects, timeline, certifications, achievements } = portfolioData;

  return (
    <>
      <Preloader />
      <CustomCursor />
      <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
        <Navbar name={profile.name} />
        <Hero profile={profile} />
        <About profile={profile} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Experience timeline={timeline} />
        <Achievements achievements={achievements} />
        <Certifications certifications={certifications} />
        <Contact profile={profile} />
        <Footer profile={profile} />
        <BackToTop />
      </div>
    </>
  );
}

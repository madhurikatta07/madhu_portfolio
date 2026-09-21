import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import Certificates from './components/Certificates/Certificates'
import Footer from './components/Footer/Footer'
import AchievementsLeadership from "./components/AchievementsLeadership/AchievementsLeadership";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certificates />
        <AchievementsLeadership />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
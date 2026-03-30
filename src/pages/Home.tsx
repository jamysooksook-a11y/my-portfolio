import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Career from "../components/Career"
import About from "../components/About"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Hero />
      <Projects />
      <Skills />
      <Career />
      <About />
      <Contact />
    </main>
  )
}
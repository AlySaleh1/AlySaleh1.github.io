import AboutMe from "./components/AboutMe"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <AboutMe />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} Aly Saleh. All rights reserved.</p>
      </footer>
    </div>
  )
}


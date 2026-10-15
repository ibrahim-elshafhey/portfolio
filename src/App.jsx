import './App.css'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/content/About/About'
import Skills from './Components/content/Skills/Skills'
import Certificates from './Components/content/Certificates/Certificates'
import Projects from './Components/content/Projects/Projects'
import Footer from './Components/content/Contact/Footer'

function App() {
  return (
    <main className="app-container">
      <Navbar />
      <About />
      <Skills />
      <Certificates />
      <Projects />
      <Footer />
    </main>
  )
}

export default App

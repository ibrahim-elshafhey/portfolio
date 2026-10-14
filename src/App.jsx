import './App.css'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/content/About/About'
import Skills from './Components/content/Skills/Skills'
import Certificates from './Components/content/Certificates/Certificates'

function App() {
  return (
    <main className="app-container">
      <Navbar />
      <About />
      <Skills />
      <Certificates />
    </main>
  )
}

export default App

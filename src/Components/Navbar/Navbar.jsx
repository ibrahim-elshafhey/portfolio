import React, { useEffect, useState } from 'react'
import './Navbar.css'
import Ancors from './ancors/Ancors'
import logo from './assets/Futuristic Ibrahim Web Developer Logo.png'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar-container${scrolled ? ' scrolled' : ''}`} >
      <a className="navbar-brand" href="#home" aria-label="Ibrahim Elshafhey home">
        <img src={logo} alt="" />
        <h1>ibrahim <span>elshafhey</span></h1>
      </a>

      <div className="ancors">
        <Ancors />
      </div>

      <a className="navbar-cta" href="https://wa.me/201554140954?text=Hello%20I%20want%20to%20contact%20you">
        <span className="cta-label">Let's Talk</span>
        <span className="cta-arrow" aria-hidden="true">↗</span>
      </a>
    </nav>
  )
}

export default Navbar

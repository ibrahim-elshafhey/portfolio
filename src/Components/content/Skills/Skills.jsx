import React, { useEffect, useRef, useState } from 'react'
import Cards from './Cards/Cards'
import './Skills.css'

const Skills = () => {
  const sectionRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const distance = window.innerHeight + rect.height
      const progress = (window.innerHeight - rect.top) / distance

      setScrollProgress(Math.max(0, Math.min(1, progress)))
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const movement = scrollProgress * 18

  return (
    <section className="skills-section" id="skills" ref={sectionRef}>
      <div className="skills-heading">
        <span className="skills-eyebrow">MY TOOLKIT</span>
        <h2>
          Skills <span>& Technologies</span>
        </h2>
        <p>
          The technologies I use to build modern web experiences.
        </p>
      </div>

      <div className="skills-marquee">
        <div
          className="skills-marquee-track"
          style={{ transform: `translateX(${-movement}%)` }}
        >
          {Array.from({ length: 4 }, (_, i) => (
            <span key={i}>
              BUILD <i>✳</i> CREATE <i>✳</i> EXPLORE <i>✳</i>
            </span>
          ))}
        </div>

        <div
          className="skills-marquee-track outline"
          style={{ transform: `translateX(${movement}%)` }}
        >
          {Array.from({ length: 4 }, (_, i) => (
            <span key={i}>
              CODE <i>✳</i> DESIGN <i>✳</i> INNOVATE <i>✳</i>
            </span>
          ))}
        </div>
      </div>

      <Cards />
    </section>
  )
}

export default Skills
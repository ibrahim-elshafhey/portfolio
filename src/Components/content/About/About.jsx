import { useEffect, useState } from 'react'
import './About.css'
import heroImage from '../../../assets/hero.jpeg'

const roles = [
  'Software Developer',
  'Web Developer',
  'Mobile Developer',
  'Full-Stack Developer',
]

const About = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let delay = isDeleting ? 45 : 90

    if (!isDeleting && displayText === currentRole) {
      delay = 1500
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
      return
    }

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setIsDeleting(true)
      } else if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, -1))
      } else {
        setDisplayText(currentRole.slice(0, displayText.length + 1))
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, roleIndex])

  return (
    <div className="About-container">
      <div className="About-content">
        <h1>Ibrahim elshafhey</h1>
        <h2 aria-live="polite">
          {displayText}
          <span className="typing-cursor" aria-hidden="true" />
        </h2>
        <p>I am a passionate developer with experience in creating dynamic web applications.</p>
        <span className="About-social">
          <a href="https://github.com/ibrahim-elshafhey" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" aria-label="GitHub" title="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/ibrahem-elshafhey-6b89b1372?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin" aria-label="LinkedIn" title="LinkedIn" />
          </a>
          <a href="https://www.facebook.com/share/1C63AmiJoT/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook" aria-label="Facebook" title="Facebook" />
          </a>
          <a href="https://instagram.com/ebrahim0517elshafhey?dlrf=NzNldXZ6MnlzN2Vp" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram" aria-label="Instagram" title="Instagram" />
          </a>
        </span>
      </div>
      <div className="About-image">
        <img src={heroImage} alt="Ibrahim elshafhey" />
      </div>
    </div>
  )
}

export default About

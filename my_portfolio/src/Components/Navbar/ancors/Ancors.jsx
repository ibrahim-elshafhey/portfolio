import React from 'react'
import './Ancors.css'

const Ancors = () => {
  const links = [
    { id: 1, name: 'Home', href: '#home' },
    { id: 2, name: 'About', href: '#about' },
    { id: 3, name: 'Skills', href: '#skills' },
    { id: 4, name: 'Projects', href: '#projects' },
    { id: 5, name: 'Contact', href: '#contact' },
  ]

  return (
    <div className="nav-links">
      {links.map((link) => (
        <a key={link.id} href={link.href} data-text={link.name}>
          <span className="link-label">{link.name}</span>
        </a>
      ))}
    </div>
  )
}

export default Ancors

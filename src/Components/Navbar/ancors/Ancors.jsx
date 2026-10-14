import React from 'react'
import './Ancors.css'

const links = [
  { id: 1, name: 'Home', href: '#home' },
  { id: 2, name: 'About', href: '#about' },
  { id: 3, name: 'Skills', href: '#skills' },
  { id: 4, name: 'Certificates', href: '#certificates' },
  { id: 5, name: 'Projects', href: 'https://github.com/ibrahim-elshafshey', external: true },
  { id: 6, name: 'Contact', href: 'https://wa.me/201554140954?text=Hello%20I%20want%20to%20contact%20you', external: true },
]

const Ancors = () => {
  return (
    <div className="nav-links">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.href}
          data-text={link.name}
          target={link.external ? '_blank' : undefined}
          rel={link.external ? 'noopener noreferrer' : undefined}
        >
          <span className="link-label">{link.name}</span>
        </a>
      ))}
    </div>
  )
}

export default Ancors

import './Ancors.css'

const links = [
  { id: 1, name: 'Home', href: '#home' },
  { id: 2, name: 'About', href: '#about' },
  { id: 3, name: 'Skills', href: '#skills' },
  { id: 4, name: 'Certificates', href: '#certificates' },
  { id: 5, name: 'Projects', href: '#projects' },
  { id: 6, name: 'Contact', href: '#contact' },
]

const Ancors = () => {
  return (
    <div className="nav-links">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.href}
          data-text={link.name}
        >
          <span className="link-label">{link.name}</span>
        </a>
      ))}
    </div>
  )
}

export default Ancors

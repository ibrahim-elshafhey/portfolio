import React from 'react'
import './Cards.css'

const cards = [
  {
    title: 'JavaScript',
    level: 80,
    description: 'Interactive interfaces and application logic',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    category: 'LANGUAGE',
  },
  {
    title: 'React',
    level: 75,
    description: 'Reusable components and dynamic interfaces',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    category: 'LIBRARY',
  },
  {
    title: 'Node.js',
    level: 70,
    description: 'Server-side JavaScript and REST APIs',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    category: 'RUNTIME',
  },
  {
    title: 'HTML / CSS',
    level: 90,
    description: 'Web structure, responsive layouts and animations',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    secondImage: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    category: 'WEB',
  },
  {
    title: 'Python',
    level: 65,
    description: 'Programming fundamentals and scripting',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    category: 'LANGUAGE',
  },
  {
    title: 'SQL',
    level: 60,
    description: 'Database queries and data management',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    category: 'DATABASE',
  },
]

const Cards = () => {
  return (
    <div className="skills-container">
      {cards.map((card, index) => (
        <article key={card.title} className="skill-card">
          <div className="skill-card-top">
            <span className="skill-category">{card.category}</span>
            <span className="skill-number">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          <div className="skill-icon">
            <img src={card.image} alt={`${card.title} logo`} loading="lazy" />

            {card.secondImage && (
              <img
                src={card.secondImage}
                alt="CSS3 logo"
                loading="lazy"
              />
            )}
          </div>

          <h3>{card.title}</h3>
          <p className="skill-description">{card.description}</p>

          <div className="skill-progress-info">
            <span>Familiarity</span>
            <span className="skill-percentage">{card.level}%</span>
          </div>

          <div
            className="skill-level"
            role="progressbar"
            aria-label={`${card.title} familiarity`}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={card.level}
          >
            <span style={{ width: `${card.level}%` }} />
          </div>
        </article>
      ))}
    </div>
  )
}

export default Cards
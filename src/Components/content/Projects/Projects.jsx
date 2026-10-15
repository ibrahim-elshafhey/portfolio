import './Projects.css'
import portfolioImage from './projects images/Screenshot From 2026-10-15 23-54-51.png'

const projects = [
  {
    id: 1,
    title: 'My Portfolio',
    description:
      'A personal developer portfolio built with React and CSS, featuring interactive sections, scroll-based motion, skills, and certificates.',
    image: portfolioImage,
    technologies: ['React', 'JavaScript', 'CSS'],
    sourceUrl: 'https://github.com/ibrahim-elshafhey/portfolio',
    liveUrl: '',
  },

  // Add each new project as another object in this array.
  // Include a liveUrl when the project has a public live demo.
]

const Projects = () => {
  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="projects-heading">
        <span className="projects-eyebrow">SELECTED WORK</span>
        <h2 id="projects-title">
          Things I've <span>Built</span>
        </h2>
        <p>A collection of projects, experiments, and things I'm learning by building.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.id}>
            <div className="project-preview">
              <img src={project.image} alt={`${project.title} project preview`} loading="lazy" />
              <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
              <span className="project-preview-glow" aria-hidden="true" />
            </div>

            <div className="project-card-content">
              <div className="project-tech-list">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-actions">
                {project.sourceUrl && (
                  <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                    Source code <span aria-hidden="true">↗</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-live-link">
                    Live preview <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="projects-note">
        More projects will appear here as I build and publish them.
      </p>
    </section>
  )
}

export default Projects

import React from 'react'
import './Projects.css'
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "my portfolio website, built with React and  CSS. It showcases my skills and projects in a visually appealing way.",
        image: "./assets/Screenshot From 2026-10-15 23-54-51.png"
    },

  ];
 projects.map((project) => {
    return (
      <div key={project.id} className="project-card">
        <img src={project.image} alt={project.title} />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    );
  });
  return (
  
    <div className="projects-section" id="projects">
        <>{projects}</>
      
    </div>
  )
}

export default Projects

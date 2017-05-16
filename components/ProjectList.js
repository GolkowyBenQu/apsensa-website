import React from 'react'

import Content from './Content'
import Project from './Project'

class ProjectList extends React.Component {
  render() {
    return (
      <section id="projects" className="tiles">
        {
          Content.projects.map(
            (project, i) => <Project
              key = {i}
              image = {project.image}
              name = {project.name}
              title = {project.title}
              description = {project.description}
            />
          )
        }
      </section>
    )
  }
}

export default ProjectList
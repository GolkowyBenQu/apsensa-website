import React from 'react'
import { connect } from 'react-redux'

import Content from './Content'
import Project from './Project'

import { getData as getProjects } from '../actions/projectActions'

class ProjectList extends React.Component {
  componentDidMount() {
    const {getProjects} = this.props
    const promise = getProjects()

    promise.then(() => {
      loadTiles()
    })
  }

  render() {
    const { projectReducers } = this.props

    return (
      <section id="projects" className="tiles">
          {projectReducers.projects.map((project, i) =>
            <Project
              key={i}
              image={project.image}
              name={project.name}
              title={project.title}
              description={project.description}
            />
          )}
        {/*{*/}
          {/*Content.projects.map(*/}
            {/*(project, i) => <Project*/}
              {/*key={i}*/}
              {/*image={project.image}*/}
              {/*name={project.name}*/}
              {/*title={project.title}*/}
              {/*description={project.description}*/}
            {/*/>*/}
          {/*)*/}
        {/*}*/}
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return state
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProjects: () => dispatch(getProjects())
  }
}

ProjectList = connect(mapStateToProps, mapDispatchToProps)(ProjectList);

export default ProjectList
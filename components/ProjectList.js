import React from 'react'
import { connect } from 'react-redux'

import Content from './Content'
import Project from './Project'

import { getData } from '../actions/projectActions'

class ProjectList extends React.Component {
  componentDidMount() {
    const {getData} = this.props;
    getData();
  }

  render() {
    const { isLoading, isError, projectReducers } = this.props;

    return (
      <section id="projects" className="tiles">
        <div>
          {projectReducers.projects.map((item, index) => {
            console.log(item)
            return (<div key={index}>
              {item.name}
            </div>);
          })}
        </div>
        {
          Content.projects.map(
            (project, i) => <Project
              key={i}
              image={project.image}
              name={project.name}
              title={project.title}
              description={project.description}
            />
          )
        }
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getData())
  }
};

ProjectList = connect(mapStateToProps, mapDispatchToProps)(ProjectList);

export default ProjectList
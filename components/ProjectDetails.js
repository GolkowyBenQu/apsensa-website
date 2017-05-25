import React from 'react'
import { connect } from 'react-redux'

import Layout from './Layout'

import { getData as getDetails } from '../actions/projectDetailsActions'

class ProjectDetails extends React.Component {
  componentDidMount() {
    const {getDetails} = this.props
    getDetails(this.props.params.name)
  }

  render() {
    const { projectDetailsReducers } = this.props
    console.log(projectDetailsReducers)

    return(
      <Layout>
        <div id="main" className="alt">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h1>{ projectDetailsReducers.details.title }</h1>
              </header>
              <span className="image main"><img src={ projectDetailsReducers.details.image } alt="" /></span>
              <p>{ projectDetailsReducers.details.description }</p>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => {
  return state
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDetails: (name) => dispatch(getDetails(name))
  }
}

ProjectDetails = connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);

export default ProjectDetails
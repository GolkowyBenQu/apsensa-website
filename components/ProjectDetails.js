import React from 'react'

import Layout from './Layout'

class ProjectDetails extends React.Component {
  render() {
    return(
      <Layout>
        <div id="main" className="alt">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h1>Project title</h1>
              </header>
              <span className="image main"><img src="Project image" alt="" /></span>
              <p>Project details</p>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default ProjectDetails
import React from 'react'

import Layout from './Layout'
import Banner from './Banner'
import AboutServicesSection from './AboutServicesSection'
import ProjectList from './ProjectList'

import Content from './Content'

class App extends React.Component {

  constructor(props) {
    super(props)

    console.log(Content.title)
  }

  render() {
    return (
      <Layout>
        <Banner/>
        <AboutServicesSection/>
        <ProjectList/>
      </Layout>
    )
  }
}

export default App
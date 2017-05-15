import React from 'react'

import Header from './Header'
import Navbar from './Navbar'
import Banner from './Banner'
import AboutServicesSection from './AboutServicesSection'
import ProjectList from './ProjectList'
import Contact from './Contact'
import Footer from './Footer'

import Content from './Content'

class App extends React.Component {

  constructor(props) {
    super(props)

    console.log(Content.title)
  }

  render() {
    return (
      <div id="wrapper">
        <Header/>
        <Navbar/>
        <Banner/>
        <AboutServicesSection/>
        <ProjectList/>
        <Contact/>
        <Footer/>
      </div>
    )
  }
}

export default App
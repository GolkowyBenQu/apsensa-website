import React from 'react'

import About from './About'
import Services from './Services'

class AboutServicesSection extends React.Component {
  render() {
    return(
      <section id="one">
        <About/>
        <Services/>
      </section>
    )
  }
}

export default AboutServicesSection
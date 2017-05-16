import React from 'react'

import Header from './Header'
import Navbar from './Navbar'
import Contact from './Contact'
import Footer from './Footer'

class Layout extends React.Component {
  render() {
    return(
      <div id="wrapper">
        <Header/>
        <Navbar/>
        {this.props.children}
        <Contact/>
        <Footer/>
      </div>
    )
  }
}

export default Layout
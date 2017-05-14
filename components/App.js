import React from 'react'

import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import Banner from './Banner'

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
                <Footer/>
            </div>
        )
    }
}

export default App
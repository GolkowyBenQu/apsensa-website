import React from 'react'

class Header extends React.Component {
    render() {
        return(
            <header id="header">
                <a href="/" className="logo"><strong>Apsensa</strong> <span></span></a>
                <nav>
                    <a href="#menu">Menu</a>
                </nav>
            </header>
        )
    }
}

export default Header
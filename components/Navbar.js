import React from 'react'

class Navbar extends React.Component {
    render() {
        return (
            <nav id="menu">
                <ul className="links">
                    <li><a href="/#banner">Home</a></li>
                    <li><a href="/#about">Kim jesteśmy</a></li>
                    <li><a href="/#services">Usługi</a></li>
                    <li><a href="/#projects">Projekty</a></li>
                    <li><a href="/#contact">Kontakt</a></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar
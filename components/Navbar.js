import React from 'react'

import NavItem from './NavItem'

class Navbar extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      links: [
        {
          url: "/#banner",
          title: "Home"
        },
        {
          url: "/#about",
          title: "Kim jesteśmy"
        },
        {
          url: "/#services",
          title: "Usługi"
        },
        {
          url: "/#projects",
          title: "Projekty"
        },
        {
          url: "/#contact",
          title: "Kontakt"
        },
      ]
    }
  }

  render() {
    return (
      <nav id="menu">
        <ul className="links">
          {
            this.state.links.map(
              (link, i) => <NavItem key={i} url={link.url} title={link.title} />
            )
          }
        </ul>
      </nav>
    )
  }
}

export default Navbar
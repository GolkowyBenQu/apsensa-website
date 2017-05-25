import React from 'react'
import { Link } from 'react-router'

class Project extends React.Component {
  render() {
    return(
      <article>
          <span className="image">
            <img src={this.props.image} alt=""/>
          </span>
        <header className="major">
          <h3><Link to={"/projekt/" + this.props.name} className="link">{this.props.title}</Link></h3>
          <p>{this.props.description}</p>
        </header>
      </article>
    )
  }
}

export default Project
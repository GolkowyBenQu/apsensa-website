import React from 'react'

class Project extends React.Component {
  render() {
    return(
      <article>
          <span className="image">
            <img src={this.props.image} alt=""/>
          </span>
        <header className="major">
          <h3><a href={this.props.pageUrl} className="link">{this.props.title}</a></h3>
          <p>{this.props.description}</p>
        </header>
      </article>
    )
  }
}

export default Project
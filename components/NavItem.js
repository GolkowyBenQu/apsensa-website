import React from 'react'

class NavItem extends React.Component {
  render() {
    return (
      <li><a href={this.props.url}>{this.props.title}</a></li>
    )
  }
}

export default NavItem
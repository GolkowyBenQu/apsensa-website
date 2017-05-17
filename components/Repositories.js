import React from 'react'
import { connect } from 'react-redux'

import { getData } from '../actions/repositoryActions'

class Repositories extends React.Component {
  componentDidMount() {
    const { getData } = this.props;
    getData();
  }

  render() {
    const { isLoading, isError, repositoryReducers } = this.props;

    // TODO: add isLoading and isError handling
    return (
      <div>
        {repositoryReducers.repositories.map((item, index) => {
          return (<div key={index}>
            {item.name}
          </div>);
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getData())
  }
};

Repositories = connect(mapStateToProps, mapDispatchToProps)(Repositories);

export default Repositories
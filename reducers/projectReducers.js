import * as projectActions from '../actions/projectActions'

const initialState = {
  isLoading: false,
  isError: false,
  projects: []
}

const projectReducers = (state = initialState, action) => {
  switch (action.type) {
    case projectActions.GET_DATA_PENDING:
      return {
        ...state,
        isLoading: true
      }
    case projectActions.GET_DATA_FULFILLED:
      return {
        ...state,
        isLoading: false,
        projects: action.payload
      }
    case projectActions.GET_DATA_REJECTED:
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    default:
      return state
  }
}

export default projectReducers
import * as projectActions from '../actions/projectActions'

const initialState = {
  isLoading: false,
  isError: false,
  projects: []
}

const projectReducers = (state = initialState, action) => {
  switch (action.type) {
    case projectActions.GET_DATA_PENDING:
      console.log('reducer pending')
      return {
        ...state,
        isLoading: true
      }
    case projectActions.GET_DATA_FULFILLED:
      console.log('reducer fulfilled')
      return {
        ...state,
        isLoading: false,
        projects: action.payload
      }
    case projectActions.GET_DATA_REJECTED:
      console.log('reducer rejected')
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
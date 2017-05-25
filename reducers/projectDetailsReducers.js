import * as projectDetailsActions from '../actions/projectDetailsActions'

const initialState = {
  isLoading: false,
  isError: false,
  details: {}
}

const projectDetailsReducers = (state = initialState, action) => {
  switch (action.type) {
    case projectDetailsActions.GET_DATA_PENDING:
      console.log('reducer pending')
      return {
        ...state,
        isLoading: true
      }
    case projectDetailsActions.GET_DATA_FULFILLED:
      console.log('reducer fulfilled')
      return {
        ...state,
        isLoading: false,
        details: action.payload
      }
    case projectDetailsActions.GET_DATA_REJECTED:
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

export default projectDetailsReducers
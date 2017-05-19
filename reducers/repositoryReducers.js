import * as repositoryActions from '../actions/repositoryActions'

const initialState = {
  isLoading: false,
  isError: false,
  repositories: []
}

const repositoryReducers = (state = initialState, action) => {
  switch (action.type) {
    case repositoryActions.GET_DATA_PENDING:
      return {
        ...state,
        isLoading: true
      }
    case repositoryActions.GET_DATA_FULFILLED:
      return {
        ...state,
        isLoading: false,
        repositories: action.payload
      }
    case repositoryActions.GET_DATA_REJECTED:
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    default:
      return state
  }
}

export default repositoryReducers
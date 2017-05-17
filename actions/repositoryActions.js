import fetch from 'isomorphic-fetch'

export const GET_DATA_PENDING = 'GET_DATA_PENDING'
export const GET_DATA_FULFILLED = 'GET_DATA_FULFILLED'
export const GET_DATA_REJECTED = 'GET_DATA_REJECTED'

export function getDataPending() {
  return {
    type: GET_DATA_PENDING
  }
}

export function getDataFulfilled(data) {
  return {
    type: GET_DATA_FULFILLED,
    payload: data
  }
}

export function getDataRejected(error) {
  return {
    type: GET_DATA_REJECTED,
    payload: error
  }
}

export function getData() {
  return {
    type: 'GET_DATA',
    payload: {
      promise: fetch('https://api.github.com/users/burczu/repos')
        .then(response => response.json())
    }
  }
}
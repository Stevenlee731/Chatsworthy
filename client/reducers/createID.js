const CREATE_ID = require('../actions')

const uniqueId = () => {
  return 'id-' + Math.random().toString(36).substr(2, 16)
}

const createID = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ID:
      return localStorage.setItem('userID', uniqueId())
    default:
      return state
  }
}

module.exports = createID

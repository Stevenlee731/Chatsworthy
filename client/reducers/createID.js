const CREATE_ID = require('../actions')

const createID = (state = [], action) => {
  switch (action.type) {
    case CREATE_ID:
      return state.concat('steve')
    default:
      return state
  }
}

module.exports = createID

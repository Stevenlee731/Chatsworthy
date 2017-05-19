const { STAFF_LOGIN, RESET_LOGIN } = require('../actions')

const initialState = {
  logged: false
}
const staffLogin = (state = initialState, action) => {
  switch (action.type) {
    case STAFF_LOGIN:
      return {
        name: action.name,
        staffID: action.staffID,
        profileImg: action.profileImg,
        logged: true
      }
    case RESET_LOGIN:
      return {
        logged: false
      }
    default:
      return state
  }
}

module.exports = staffLogin

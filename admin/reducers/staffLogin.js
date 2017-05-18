const { STAFF_LOGIN } = require('../actions')

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
    default:
      return state
  }
}

module.exports = staffLogin

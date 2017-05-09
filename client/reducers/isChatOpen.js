const isChatOpen = (state = false, action) => {
  switch (action.type) {
    case 'CHAT_OPENED':
      return true
    case 'CHAT_CLOSED':
      return false
    default:
      return state
  }
}

module.exports = isChatOpen

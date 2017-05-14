const React = require('react')
const MessageList = require('./MessageList')
const MessageView = require('./MessageView')

const ChatBox = props => {
  const { userMessages } = props

  return (
    <div>
      <MessageList userMessages={userMessages}></MessageList>
      <MessageView/>
    </div>
  )
}

module.exports = ChatBox

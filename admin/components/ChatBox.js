const React = require('react')
const MessageList = require('./MessageList')
const MessageView = require('./MessageView')

const ChatBox = props => {
  return (
    <div>
      <MessageList chatRooms={props.chatRooms} userMessages={props.userMessages}></MessageList>
      <MessageView/>
    </div>
  )
}

module.exports = ChatBox

const React = require('react')
const Avatar = require('material-ui/Avatar').default
const ListItem = require('material-ui/List/ListItem.js').default
const CommunicationChatBubble = require('material-ui/svg-icons/communication/chat-bubble').default
const store = require('../store')
const MessageView = require('./MessageView')
const { joinRoom, messageReceived } = require('../actions')
const io = require('socket.io-client')
const socket = io('/')

const avatarStyle = {
  paddingLeft: '5px',
  paddingRight: '5px'
}

const Customer = props => {
  const handleClick = () => {
    const currentRoom = props.room
    store.dispatch(joinRoom(currentRoom))
    socket.emit('fetch chat', currentRoom)
    socket.on('parsed chat', payload => {
      console.log('parsed from leveldb', payload)
      store.dispatch(messageReceived(payload))
    })
    return (
      <MessageView chatRoom={ props.room }/>
    )
  }
  return (
    <ListItem
      onClick={ handleClick }
      style={avatarStyle}
      primaryText= { props.room }
      leftAvatar={<Avatar src="https://twibbon.com/content/images/system/default-image.jpg" />}
      rightIcon={<CommunicationChatBubble />}
      />
  )
}

const CustomerList = props => {
  const {chatRooms} = props
  if (chatRooms.length === 0) return null
  return (
    <div>
      {
        chatRooms.map((room, i) => {
          return <Customer key={ i } room={ room } />
        })
      }
    </div>
  )
}

module.exports = CustomerList

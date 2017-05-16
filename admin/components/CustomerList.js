const React = require('react')
const Avatar = require('material-ui/Avatar').default
const ListItem = require('material-ui/List/ListItem.js').default
const CommunicationChatBubble = require('material-ui/svg-icons/communication/chat-bubble').default

const avatarStyle = {
  paddingLeft: '5px',
  paddingRight: '5px'
}

const Customer = props => {
  return (
    <ListItem
      style={avatarStyle}
      primaryText= { props.room }
      leftAvatar={<Avatar src="https://twibbon.com/content/images/system/default-image.jpg" />}
      rightIcon={<CommunicationChatBubble />}
      />
  )
}

const CustomerList = props => {
  const {userMessages, chatRooms} = props
  console.log('CustomerList', userMessages)
  console.log(userMessages.text)
  if (chatRooms.length === 0) return null

  return (
    <div>
    { chatRooms.map((room, i) => {
      return <Customer key={ i } room={ room } />
    }) }
  </div>
  )

  // return (
  //   <div>
  //   { userMessages.map((message, i) => {
  //     return <Customer key={ i } date={ message.date } text={ message.text } />
  //   }) }
  // </div>
  // )
}

module.exports = CustomerList

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
      primaryText="Customer"
      secondaryText={
            <p>
              <span style={{color: 'black'}}></span>
              {props.text}
            </p>
          }
          secondaryTextLines={2}
      leftAvatar={<Avatar src="https://twibbon.com/content/images/system/default-image.jpg" />}
      rightIcon={<CommunicationChatBubble />}
      />
  )
}

const CustomerList = props => {
  const {userMessages} = props
  if (userMessages.length === 0) return null

  return (
    <div>
    { userMessages.map((message, i) => {
      return <Customer key={ i } date={ message.date } text={ message.text } />
    }) }
  </div>
  )
}

module.exports = CustomerList

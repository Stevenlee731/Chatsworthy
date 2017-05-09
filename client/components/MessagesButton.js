const React = require('react')
const store = require('../store')
const { chatClosed, chatOpened } = require('../actions')
const { Icon } = require('semantic-ui-react')

const MessagesButton = props => {
  const handleClick = () => {
    if (props.isChatOpen) {
      store.dispatch(chatClosed())
    }
    else {
      store.dispatch(chatOpened())
    }
  }
  return (
    <div className='chatsworthy' onClick={handleClick}>
      <Icon bordered inverted color='teal' name='discussions' size='big' className='chatsworthy'/>
    </div>
  )
}
module.exports = MessagesButton

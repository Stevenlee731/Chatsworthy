const dotenv = require('dotenv')
dotenv.load()

const express = require('express')
const session = require('express-session')
const http = require('http')
const socketIO = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = socketIO(server)
const path = require('path')
const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(session(
  {
    secret: 'janieyoo',
    resave: true,
    saveUninitialized: true
  }
))

io.on('connection', function(socket) {
  console.log('a user connected')
  socket.emit('hello', 'steve')

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })

  socket.on('message', data => {
    console.log(data)
    socket.broadcast.emit('message', {
      username: data.userID,
      message: data
    })
  })
})

// app.post('/sms', function(req, res) {
//   var smsCount = req.session.counter || 0
//
//   var message = 'Hello, thanks for the new message.'
//   if (smsCount > 0) {
//     message = 'Hello, thanks for message number ' + (smsCount + 1)
//   }
//
//   req.session.counter = smsCount + 1
//
//   var twiml = new twilio.TwimlResponse()
//   twiml.message(message)
//   res.writeHead(200, {'Content-Type': 'text/xml'})
//   res.end(twiml.toString())
// })

const port = process.env.PORT || 3000

server.listen(port, function() {
  console.log('listening on *:', port)
})

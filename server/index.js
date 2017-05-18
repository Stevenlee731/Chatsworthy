const dotenv = require('dotenv')
dotenv.load()

const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = socketIO(server)
const path = require('path')
const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())

const rooms = []

io.on('connection', socket => {
  socket.emit('join')
  socket.on('sign on', data => {
    if (data.customerID) {
      if (data.customerID && !rooms.includes(data.customerID)) {
        socket.join(data.customerID)
        rooms.push(data.customerID)
        console.log('rooms', rooms)
      }
      else if (data.customerID) {
        socket.join(data.customerID)
      }
    }
    else if (data.staffID) {
      socket.join('staff')
      socket.emit('rooms list', rooms)
    }
  })
  socket.on('join room', payload => {
    socket.join(payload.customerID, () => {
      console.log(socket.rooms)
    })
  })
  socket.on('message', payload => {
    socket.broadcast.emit('message', payload)
    console.log('message sent', payload.customerID)
  })
})

server.listen(4000, function() {
  console.log('listening on *:', 4000)
})

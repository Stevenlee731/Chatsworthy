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
    console.log('data', data)
    if (data.customerID) {
      if (data.customerID && !rooms.includes(data.customerID)) {
        socket.join(data.customerID)
        rooms.push(data.customerID)
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
  console.log('rooms', rooms)
  socket.on('join room', payload => {
    socket.join(payload.customerID)
    console.log('joined!', payload.customerID)
  })
  socket.on('message', payload => {
    io.to(payload.customerID).emit('message', payload)
    console.log('message sent', payload.customerID)
  })
})
//
// io.on('connection', function(socket) {
//   socket.emit('join')
//   console.log('user connected', socket.id)
//   socket.on('disconnect', () => {
//     console.log('user disconnected')
//   })
//
//   socket.on('message', data => {
//     socket.join('steve', () => {
//       console.log(socket.rooms)
//       io.to('steve', 'hello')
//     })
//     console.log('socketID', data.userID)
//     io.sockets.in(data).emit('from client', data)
//     socket.id = data.userID
//     let newID = socket.id
//     if (!clients.find(users =>
//       users === newID
//     )) {
//       clients.push(newID)
//     }
//     console.log('clients', clients)
//   })
//
//   socket.on('from admin', data => {
//     console.log('reply', data)
//     const newID = 'id-th429nk1kj'
//     socket.to(newID).emit('reply', 'I just met you')
//   })
// })

//
// const port = process.env.PORT || 4000

server.listen(4000, function() {
  console.log('listening on *:', 4000)
})

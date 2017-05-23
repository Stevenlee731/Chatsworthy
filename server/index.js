const dotenv = require('dotenv')
dotenv.load()

const level = require('level')
const db = level('./mydb')
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
      socket.join(data.customerID)
      console.log('before filter room', rooms)
      if (!rooms.includes(data.customerID)) {
        rooms.push(data.customerID)
      }
      console.log('after filter', rooms)
      socket.emit('rooms list', rooms)
    }
    else if (data.staffID) {
      socket.emit('rooms list', rooms)
      console.log('room', rooms)
    }
  })
  socket.on('fetch chat', customerID => {
    db.get(customerID, function (err, value) {
      if (err) return console.log('Ooops!', err)
      const parsedValue = JSON.parse(value)
      socket.emit('parsed chat', parsedValue)
    })
  })
  socket.on('join room', payload => {
    socket.join(payload.customerID, () => {
    })
  })
  socket.on('support message', payload => {
    db.get(payload.customerID, function (err, value) {
      if (err) {
        db.put(payload.customerID, JSON.stringify(payload), function (err) {
          if (err) return console.log('Ooops!', err)
        })
      }
      else {
        const parsedValue = JSON.parse(value)
        const oldMessages = []
        const messages = oldMessages.concat(parsedValue)
        const newMessages = messages.concat(payload)
        db.put(payload.customerID, JSON.stringify(newMessages), function (err) {
          if (err) return console.log('Ooops!', err)
        })
      }
    })
    socket.to(payload.customerID).emit('support message', payload)
  })
  socket.on('client message', payload => {
    db.get(payload.customerID, function (err, value) {
      if (err) {
        db.put(payload.customerID, JSON.stringify(payload), function (err) {
          if (err) return console.log('Ooops!', err)
        })
      }
      else {
        const parsedValue = JSON.parse(value)
        const oldMessages = []
        const messages = oldMessages.concat(parsedValue)
        const newMessages = messages.concat(payload)
        db.put(payload.customerID, JSON.stringify(newMessages), function (err) {
          if (err) return console.log('Ooops!', err)
        })
      }
    })
    socket.broadcast.emit('client message', payload)
  })
})

const port = process.env.PORT || 3000

server.listen(port, function() {
  console.log('listening on *:', port)
})

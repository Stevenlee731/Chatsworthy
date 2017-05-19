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
      if (data.customerID && !rooms.includes(data.customerID)) {
        rooms.push(data.customerID)
      }
    }
    else if (data.staffID) {
      socket.emit('rooms list', rooms)
      // fetch leveldb
    }
  })
  socket.on('join room', payload => {
    socket.join(payload.customerID, () => {
      console.log(socket.rooms)
    })
  })
  socket.on('support message', payload => {
    db.get(payload.customerID, function (err, value) {
      if (err) {
        console.log('new id')
        db.put(payload.customerID, JSON.stringify(payload), function (err) {
          if (err) return console.log('Ooops!', err)
        })
      }
      else {
        const parsedValue = JSON.parse(value)
        const oldMessages = []
        const messages = oldMessages.concat(parsedValue)
        const newMessages = messages.concat(payload)
        console.log('support', newMessages)
        db.put(payload.customerID, JSON.stringify(newMessages), function (err) {
          if (err) return console.log('Ooops!', err)
        })
      }
    })
    socket.to(payload.customerID).emit('support message', payload)
    console.log('message sent to support', payload.customerID)
  })
  socket.on('client message', payload => {
    db.get(payload.customerID, function (err, value) {
      if (err) {
        console.log('new id')
        db.put(payload.customerID, JSON.stringify(payload), function (err) {
          if (err) return console.log('Ooops!', err)
        })
      }
      else {
        const parsedValue = JSON.parse(value)
        const oldMessages = []
        const messages = oldMessages.concat(parsedValue)
        const newMessages = messages.concat(payload)
        console.log('customer', newMessages)
        db.put(payload.customerID, JSON.stringify(newMessages), function (err) {
          if (err) return console.log('Ooops!', err)
        })
      }
    })
    socket.broadcast.emit('client message', payload)
    console.log('message sent to client', payload.customerID)
  })
})

server.listen(4000, function() {
  console.log('listening on *:', 4000)
})

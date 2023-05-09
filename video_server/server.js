const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ["GET", "POST"]
  }
})
const { v4: uuidV4 } = require('uuid')

app.set('view engine', 'ejs')
app.use(express.static('public'))

// app.get('/', (req, res) => {
//   res.redirect(`/${uuidV4()}`)
// })

// app.get('/:room', (req, res) => {
//   res.render('room', { roomId: req.params.room })
// })

io.on('connection', socket => {
  console.log("klfdjskj")
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId)
    // console.log(userId,roomId)
    console.log(socket.broadcast.to(roomId))
    socket.broadcast.to(roomId).emit('user-connected', userId)

    socket.on('disconnect', () => {
      socket.broadcast.to(roomId).emit('user-disconnected', userId)
    })
  })
})
var server_port = process.env.YOUR_PORT || process.env.PORT || 4000;
server.listen(server_port, () =>{
  console.log("Started on : "+server_port)
})
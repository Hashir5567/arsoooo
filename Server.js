// import { createServer } from "http";
// import { Server } from "socket.io";

const app= require('express')()

const server = require('http').createServer(app)
const io=require('socket.io')(server)

// const httpServer = createServer();


io.on("connection", (socket) => {
  console.log("what is socket",socket)
  console.log('active to be connected')

  socket.on("warning ",(payload)=>{
    console.log("Ambiguity appeared",payload)
    io.emit('Atttention',payload)
  })
});

server.listen(5000,()=>{
  console.log("server is litening at port 5000...");
})

// httpServer.listen(3000);
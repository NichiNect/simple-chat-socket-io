const http = require('http');
const { Server } = require('socket.io');
const express = require('express');

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('socket connected!');

    // * listen/subscribe the socket event by `send-message` key
    socket.on('send-message', (data) => {
        // * do broadcast the data with different key
        console.log('Get message from FE');
        socket.broadcast.emit('new-message', data);
    });
});

httpServer.listen(3000);
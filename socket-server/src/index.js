const express = require('express')
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const port = 9001;

server.listen(port, function() {
    console.log('We are listening on port', port);
});

io.on('connection', function(socket){
    console.log('player connected')

    socket.on('disconnect', function () {
        console.log('player disconnected')
    });    
});
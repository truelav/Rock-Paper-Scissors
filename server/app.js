const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
const path = require('path');
const server = require('http').createServer(app)
const io = require('socket.io')(server)


const port = 9001;
server.listen(port, function() {
    console.log('We are listening on port', port);
});

io.on('connection', function(socket){
    console.log('player connected')
    socket.emit('waitingPlayer', {'player': 'name'})

    socket.on('disconnect', function () {
        console.log('player disconnected')
    });    
});


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', router);

app.use(express.static(path.join(__dirname, '../client/dist')))

app.get('/', function(req, res) {
    console.log('Serving up Index.html');
    res.sendFile(path.join(__dirname + '/../client/dist'));
});


    // console.log(game.deck.cards.length);
    // var id = nextUserID;
    // users[id] = {
    //   nickname: 'user' + id
    // };
    // socket.userId = id;
    // nextUserID++;
    // socket.broadcast.emit('user_connected', users[socket.userId.toString()]);
    // socket.emit('game_update', game);
  
    // socket.on('disconnect', function(){
    //   io.emit('user_disconnected');
    // });
  
    // socket.on('chat_message', function (msg) {
    //   var user = users[socket.userId.toString()];
    //   if (msg.indexOf('/nick ') === 0) {
    //     var newNick = msg.replace('/nick ', '');
    //     msg = user.nickname + ' changed nick to ' + newNick;
    //     user.nickname = newNick;
    //   }
    //   var data = {user: user, msg: msg};
    //   io.emit('chat_message', data);
    // });

  
//Routes handlers
// const authRoutes = require('./routes').auth;
// const apiRoutes = require('./routes').api;
// const addPageRoutes = require('./routes').pages;
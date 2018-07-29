
var app = require('./config/server');

var server = app.listen(80, function(){
    console.log('Servidor online');
});

var io = require('socket.io').listen(server);

/* websocket*/

io.on('connection', function(socket){
    console.log("Usuário conectou");
});


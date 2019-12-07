var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var connectCounter = 0;

io.on('connection', function(socket){
  connectCounter++;
  io.emit('session count', connectCounter);
  socket.on('disconnect', function(){
    connectCounter--;
    io.emit('session count', connectCounter);
  });
});

http.listen(8000, function(){
  console.log('listening on *:8000');
});
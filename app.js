const app = require('express')(),
  http = require('http').Server(app),
  port = process.env.PORT || 3030,
  config = require('./config/config'),
  Room=require('./socket/room'),
  io=require('socket.io')(http),
  mongoose = require('mongoose');



app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// sending to sepecific group 

http.listen(port, function () {
  console.log('listening on *:' + port);
});

const main=new Room('',io)
const group1=new Room('group1',io)
const group2=new Room('group2',io)
const group3=new Room('group3',io)

var promise = mongoose.connect(config.online, {
  useMongoClient: true,
});
promise.openUri(config.online, function (errr, db) {
  if (errr) {
    throw errr;
  } else {
   
    mydb = db;
  }
});

 
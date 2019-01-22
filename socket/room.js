class Room {
  constructor(name, io) {
    this.name = name;
    this.users = [];
    this.namespace = io.of('/' + name);
    this.listenOnRoom();
  }

  listenOnRoom() {
    this.namespace.on('connection', (socket) => {
      socket.on('userJoinQueue', this.handleuserGoinQueue);
      socket.on('userLeaveQueue', this.handleUserLeaveQueue);
      socket.on('userLeaveRoom', this.handleuserleaveRoom)
      socket.on('disconnect', this.handleDisconnect);
      socket.on('chatMessage', (msg)=>{this.handleChatMessage(msg)});
    });
  }


  handleDisconnect(msg) {
  }
  handleChatMessage(msg) {
    console.log(this.name,msg);
    this.namespace.emit('chatMessage',msg)
  }
  handleuserGoinQueue(msg) {
    console.log(`from group`,this.name,msg);
    this.users.push(new Group1(this.name, Group1Id, participants, this.io));
  }
  handleUserLeaveQueue() {
  }
  handleuserleaveRoom() {
  }
}
module.exports = Room;
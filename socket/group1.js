const {Room}=require('./room')
class Group1 extends Room {
    constructor(name, io) {
        super(name, io);
        this.io = io;
        this.queue = [];
        this.goup2List = [];
        this.listenOngroup1();
    }
    listenOngroup1() {
        this.namespace.on('connection', (socket) => {
            socket.on('userJoinQueue', () => {
                this.goup2List.push(new Group1(this.name, Group1Id, participants, this.io));
            });
            socket.on('userLeaveQueue', this.handleUserLeaveQueue);
            socket.on('userLeaveGroup1', this.handleUserLeaveQueue);
        });
    }

    handleUserJoinQueue() { }
    handleUserLeaveQueue() { }

}
module.exports = Group1
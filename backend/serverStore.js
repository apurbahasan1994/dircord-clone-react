const connectedUsers = new Map();
let io=null;
const setSocketServerInstance=(ioInstance)=>{
    io=ioInstance
}
const getSocketServerInstance=()=>{
    return io;
}
const addNewConnectedUser = ({ socketId, userId }) => {
    connectedUsers.set(socketId, { userId });
}
const removeConnectedUser = (socketId) => {

    if (connectedUsers.has(socketId)) {
        connectedUsers.delete(socketId);
    }

}

const getActiveUsers = (userId) => {
    const allActiveUsers = [];
    connectedUsers.forEach((value, key) => {
        if (value.userId === userId) {
            allActiveUsers.push(key);
        }
    });
   
    return allActiveUsers
}

const getOnlineUsers=()=>{
    const onlineUsers = [];
    connectedUsers.forEach((userId,key)=>{
        onlineUsers.push({
            socketId:key,userId:userId?.userId
        });
    });
    return onlineUsers;
}
module.exports = {
    connectedUsers, addNewConnectedUser,
    removeConnectedUser,
    getActiveUsers,
    getSocketServerInstance,
    setSocketServerInstance,
    getOnlineUsers
}
const authSocket=require('./middlewares/authSocket');
const newConnextionHandler=require('./socketHandlers/newConnectionHandler');
const disconnectHandler=require('./socketHandlers/disconnectHandler');
const serverStore=require('./serverStore');
const directMessageHandler=require('./socketHandlers/directMessageHandler');
const directChatHistoryHandler=require('./socketHandlers/directChatHistoryHandler');
const registerSocketServer=(server)=>{
    const io=require('socket.io')(server,{
        cors:{
            origin:'*',
            methods:["GET","POST"]
        }
    });
    serverStore.setSocketServerInstance(io);
    io.use((socket,next)=>{
        authSocket(socket,next);
    });
    const emitOnlineUsers=()=>{
        const onlineUsers=serverStore.getOnlineUsers();
        io.emit('online-users',{onlineUsers});
    }
    io.on('connection',(socket)=>{
        newConnextionHandler(socket,io);
        emitOnlineUsers();
        socket.on('disconnect',()=>{
            disconnectHandler(socket);
        });
        socket.on('direct-messages',(data)=>{
          
            directMessageHandler(socket,data);
        });
        socket.on('direct-chat-history',(data)=>{
            directChatHistoryHandler(socket,data);
        });
    });
    setInterval(()=>{
        emitOnlineUsers();
    },[80000]);
}
module.exports=registerSocketServer;
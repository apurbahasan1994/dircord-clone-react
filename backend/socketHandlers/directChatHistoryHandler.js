const Conversation = require("../models/conversation");
const updateChatHistory=require('./updates/chats');
const directChatHistoryHandler=async(socket,data)=>{
    try{
        const {userId}=socket.user;
        const {receiverId}=data;
        const conversation=await Conversation.findOne({
            participants:{$all:[userId,receiverId]},
            type:"DIRECT"
        });

        if(conversation){
            updateChatHistory(conversation._id.toString(),socket.id);
        }

    }
    catch(error){
        console.log(error);

    }

}

module.exports=directChatHistoryHandler;
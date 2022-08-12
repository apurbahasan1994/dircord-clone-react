const Conversation = require("../../models/conversation");
const serverStore = require('../../serverStore');


const updateChatHistory = async(conversationId, toSpecificSocketId = null) => {
    const conversation = await Conversation.findById(conversationId).populate(
        {
            path: 'messages',
            model: 'Message',
            populate: {
                path: 'author',
                model: 'User',
                select: 'username _id'
            }
        }
    );
    if (conversation) {
        const io = serverStore.getSocketServerInstance();
        if (toSpecificSocketId) {
            //initial update of chat history
            //if any user request for specific chat history-->switch friends then we will emit to this specific user that chat
            // from the database
            return io.to(toSpecificSocketId).emit('direct-chat-history', {
                messages: conversation.messages,
                participants: conversation.participants
            })
        }
        //check if users of this conversattion are online 
        // if yes emit to them update of messages.
        conversation.participants.forEach(userId => {
            const activeConnections = serverStore.getActiveUsers(userId.toString());
            activeConnections.forEach(socketId => {
                io.to(socketId).emit('direct-chat-history', {
                    messages: conversation.messages,
                    participants: conversation.participants
                })
            });

        });

    }

}
module.exports = updateChatHistory;
const Message = require('../models/message');
const Conversation = require('../models/conversation');
const updateChatHistory=require('./updates/chats');
const directMessageHandler = async (socket, data) => {
    try {
        const { userId } = socket.user;
        const { receiverId, content } = data;
        

        //create new message

        const message = await Message.create({
            content: content,
            author: userId,
            date: new Date(),
            type: 'DIRECT'
        });

        //find if conversation exists with this user - if not create new
        const conversation =await  Conversation.findOne({
            participants: { $all: [userId, receiverId] }
        });

        if (conversation) {
            conversation.messages.push(message._id);
            await conversation.save();

            //perform and update to sender and receiver if is online
            
            updateChatHistory(conversation._id.toString());
        }
        else {
            //create new conversation if not exits

            const newConversation = await Conversation.create({
                messages: [message._id],
                participants: [userId, receiverId]
            });

            //perform and update to sender and receiver if is online
            updateChatHistory(newConversation._id.toString());

        }



    }
    catch (exception) {
        console.log(exception);

    }

}

module.exports = directMessageHandler;
const User = require('../../models/user');
const FriendInvitation = require('../../models/FriendInvitation');
const serverStore = require('../../serverStore');

const updateFrindsPendingInvitations = async (userId) => {
    //one user can use multiple devices so he will have diffrenet socketIds, but single userId
    try {

        const pendingInvitations = await FriendInvitation.find({
            receiverId: userId
        }).populate('senderId', '_id username email');
        //find all active users of specified userId
        const receiverList = serverStore.getActiveUsers(userId);
        const io = serverStore.getSocketServerInstance();
        receiverList.forEach(receiverSocketId => {
            io.to(receiverSocketId).emit('friendInvitation', { pendingInvitations: pendingInvitations ? pendingInvitations : [] });
        });


    }
    catch (exception) {

    }

}

const upDateFriends = async (userId) => {

    try {
        //find active connetions of specific id (online users)
        const receiverList = serverStore.getActiveUsers(userId);
       
        if (receiverList.length == 0) {
            return;
        }
        const user = await User.findById(userId, {
            _id: 1, friends: 1
        }).populate('friends',
            '_id username email');

        if (user) {
            const friendsList = user.friends.map(friend => {
                return {
                    id: friend._id,
                    email: friend.email,
                    username: friend.username
                }
            });


            // get the io instance 
            const io = serverStore.getSocketServerInstance();

            receiverList.forEach(receiverId => io.to(receiverId).emit('friends-list', { friends: friendsList ? friendsList : [] }));


        }

    }
    catch (error) {
        console.log(error);

    }

}
module.exports = { updateFrindsPendingInvitations,upDateFriends }

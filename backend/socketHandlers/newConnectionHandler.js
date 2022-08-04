const serverStore=require('../serverStore');
const {updateFrindsPendingInvitations,upDateFriends}=require('./updates/friends');
const newConnextionHandler = async (socket, io) => {
    const userDetails = socket.user;
    serverStore.addNewConnectedUser({
        socketId: socket.id, userId: userDetails.userId
    });
    //update pending frinds invitationsList
    updateFrindsPendingInvitations(userDetails.userId);

    //update friends list
    upDateFriends(userDetails.userId);
    

};
module.exports=newConnextionHandler;
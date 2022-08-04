const FriendInvitation = require("../../models/FriendInvitation");
const User = require("../../models/user");
const {updateFrindsPendingInvitations}=require('../../socketHandlers/updates/friends')
const accetFrindInvitation=async(req,res)=>{
    try {
        const { id } = req.body;
        const { userId } = req.user;
        const invitation = await FriendInvitation.findById(id);
        if(!invitation){
            return res.status(401).json({
                message: "Error occured, Please try again"
            });
        }
       const {senderId,receiverId}=invitation;

       //add frinds to both users
       const sender=await User.findById(senderId);
       sender.friends=[...sender.friends,receiverId];
       const receiver=await User.findById(receiverId);
       receiver.friends=[...receiver.friends,senderId];
       await sender.save();
       await receiver.save();
       await FriendInvitation.findByIdAndDelete(id);
       updateFrindsPendingInvitations(receiverId.toString());
       return res.status(200).json({
        message: "Friend successfully added"
    });
    }
    catch (error) {
        return res.status(500).json({
            message: "Something went wrong !"
        });

    }
}

module.exports=accetFrindInvitation;
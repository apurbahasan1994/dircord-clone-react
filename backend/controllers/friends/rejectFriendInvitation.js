const FriendInvitation = require("../../models/FriendInvitation");
const {updateFrindsPendingInvitations}=require('../../socketHandlers/updates/friends')
const rejectFrindInvitation = async (req, res) => {
    try {
        const { id } = req.body;
        const { userId } = req.user;

        //remove that invitations from frindInvitation Collections
        const invitationExits = await FriendInvitation.exists({
            _id: id
        });
        if(invitationExits){
            await FriendInvitation.findByIdAndDelete(id);
        }
        //update pending invitations
        updateFrindsPendingInvitations(userId);
        return res.status(200).json({
            message: " Invitation rejected"
        });

    }
    catch (error) {
        return res.status(500).json({
            message: "Something went wrong !"
        });

    }
}
module.exports = rejectFrindInvitation;
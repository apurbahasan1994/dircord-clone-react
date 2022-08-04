const express = require("express");
const FriendInvitation = require("../../models/FriendInvitation");
const User = require("../../models/user");
const {updateFrindsPendingInvitations}=require('../../socketHandlers/updates/friends');
const postFriendInvitation = async (req, res, next) => {
    const targetMail = req.body?.email;
    const { userId, email } = req.user;
    //check if friend that we would like to invite is not user
    if (email.toLowerCase() === targetMail.toLowerCase()) {
        return res.status(409).json({
            'message': 'Sorry you can not become friend with yourself'
        });

    }
    const targetUser = await User.findOne({ email: targetMail });
    if (!targetUser) {
        return res.status(404).json({
            'message': `Friend of ${targetMail} has not found!.`
        });
    }
    // check invitation has already been sent
    const invitationAlreadyReceived = await FriendInvitation.findOne({
        senderId: userId,
        receiverId: targetUser.id
    });
    if (invitationAlreadyReceived) {
        return res.status(409).json({
            'message': `Already sent Invitation`
        });
    }
    // if user which we would like to invite is already our friend.
    const userAlreadyFriends =  targetUser.friends.find((friendId) => friendId.toString() === userId.toString());
    if (userAlreadyFriends) {
        return res.status(409).json({
            'message': `Already added to friends list`
        });
    }
    //create new invitation and save to database
    const newInvitation = await FriendInvitation.create({
        senderId: userId,
        receiverId: targetUser._id
    });
    // if invitation has been successfully created we sould like to update friends invitations if other user is online

    //send pending invite update to specific user

    updateFrindsPendingInvitations(targetUser._id.toString());

    return res.status(201).json({
        'message': `Invitation successfully sent`
    });

}
module.exports = postFriendInvitation;
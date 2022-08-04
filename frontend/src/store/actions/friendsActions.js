import * as api from '../../api';
import { openAlertMessage } from './alertActions';
export const friendActions = {
    SET_FRIENDS: "FRIENDS.SET_FRIENDS",
    SET_PENDING_FRIENDS_INVITATIONS: 'FRIENDS.SET_PENDING_FRIENDS_INVITATIONS',
    SET_ONLINE_USERS: 'FRIENDS.SET_ONLINE_USERS',
};
export const sendFrindInvitation = (data, closeDialogHandler) => {
    return async (dispatch) => {
        const response = await api.sendFrindInvitation(data);
        if (response.error) {
            dispatch(openAlertMessage(response.exception?.response?.data))
        }
        else {
            dispatch(openAlertMessage('Invitation has been sent'));
            closeDialogHandler();
        }

    }

}
export const setPendingFrindInvitations = (pendingFriendsInvitations) => {
    return {
        type: friendActions.SET_PENDING_FRIENDS_INVITATIONS,
        pendingFriendsInvitations

    }
}
export const setFriends = (friends) => {
    return {
        type: friendActions.SET_FRIENDS,
        friends

    }
}
export const setOnlineUsers = (onlineUsers) => {
    return {
        type: friendActions.SET_ONLINE_USERS,
        onlineUsers
    }
}

export const acceptFrindInvitation=(data)=>{

    return async(dispatch)=>{
        const response=await api.acceptFrindInvitation(data);
        if (response.error) {
            dispatch(openAlertMessage(response.exception?.response?.data))
        }
        else {
            dispatch(openAlertMessage('Invitation accepted'));
        }
    }
    
}
export const rejectFrindInvitation=(data)=>{
    return async(dispatch)=>{
        const response=await api.rejectFrindInvitation(data);
        if (response.error) {
            dispatch(openAlertMessage(response.exception?.response?.data))
        }
        else {
            dispatch(openAlertMessage('Invitation rejected'));
        }
    }

}


export const getActions = (dispatch) => {
    return {
        sendFrindInvitation: (data, closeDialogHandler) => dispatch(sendFrindInvitation(data, closeDialogHandler)),
        setPendingFrindInvitations:(pendingFriendsInvitations)=>dispatch(setPendingFrindInvitations(pendingFriendsInvitations)),
        acceptFrindInvitation:(data)=>dispatch(acceptFrindInvitation(data)),
        rejectFrindInvitation:(data)=>dispatch(rejectFrindInvitation(data))
    }

}


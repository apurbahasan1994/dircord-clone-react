import { friendActions } from "../actions/friendsActions";
const initialState = {
    friends: [],
    pendingFriendsInvitations: [],
    onlineUsers: []
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case friendActions.SET_PENDING_FRIENDS_INVITATIONS:
            return {
                ...state, pendingFriendsInvitations: action.pendingFriendsInvitations
            };
        case friendActions.SET_FRIENDS:
            return {
                ...state, friends: action.friends
            };
        case friendActions.SET_ONLINE_USERS:
            console.log(action);
            return {
                ...state, onlineUsers: action.onlineUsers
            };
        
        default:
            return state

    }
}

export default reducer;
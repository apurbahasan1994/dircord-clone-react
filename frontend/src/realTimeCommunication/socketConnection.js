import io from 'socket.io-client';
import { setPendingFrindInvitations,setFriends ,setOnlineUsers} from '../store/actions/friendsActions';
import store from '../store/store';
export const connectWithSocketServer = (userDetails) => {
    const jwtToken = userDetails.token;
    const socket = io('http://localhost:5002', {
        auth: {
            token: jwtToken
        }
    });
    socket.on('connect', () => {
        console.log('successfully connected with socket.io server');
    });
    socket.on('friendInvitation', (data) => {
        const {pendingInvitations}=data;
        store.dispatch(setPendingFrindInvitations(pendingInvitations));
    });
    socket.on('friends-list', (data) => {
        const {friends}=data;
        store.dispatch(setFriends(friends));
    });
    socket.on('online-users', (data) => {
        const {onlineUsers}=data;
        store.dispatch(setOnlineUsers(onlineUsers));
    });
};
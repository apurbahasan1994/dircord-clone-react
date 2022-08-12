import io from 'socket.io-client';
import { setPendingFrindInvitations, setFriends, setOnlineUsers } from '../store/actions/friendsActions';
import { updateChatHistoryIfActive } from '../shared/Utils/chat';
import store from '../store/store';
let socket = null;
export const connectWithSocketServer = (userDetails) => {
    const jwtToken = userDetails.token;
    socket = io('http://localhost:5002', {
        auth: {
            token: jwtToken
        }
    });
    socket.on('connect', () => {
        console.log('successfully connected with socket.io server');
    });
    socket.on('friendInvitation', (data) => {
        const { pendingInvitations } = data;
        store.dispatch(setPendingFrindInvitations(pendingInvitations));
    });
    socket.on('friends-list', (data) => {
        const { friends } = data;
        store.dispatch(setFriends(friends));
    });
    socket.on('online-users', (data) => {
        const { onlineUsers } = data;
        store.dispatch(setOnlineUsers(onlineUsers));
    });
    socket.on('direct-message', (data) => {
        console.log('direct-message',data);
        
    });
    socket.on('direct-chat-history', (data) => {
       updateChatHistoryIfActive(data);
    });
};

export const sendDirectMessage = (data) => {
    socket.emit('direct-messages', data);
}
export const getDirectChatHistory = (data) => {
    socket.emit('direct-chat-history', data);
}
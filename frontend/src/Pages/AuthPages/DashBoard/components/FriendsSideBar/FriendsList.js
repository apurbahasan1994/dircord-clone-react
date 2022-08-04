import React from 'react';
import styled from '@emotion/styled';
import FriendListItem from './FriendListItem';
import { connect } from 'react-redux';
const checkIsOnline = (friends = [], onlineUsers = []) => {
    const newfriends = friends.map((f) => {
        const isUserOnline = onlineUsers.find(user => user?.userId === f.id);
        console.log(onlineUsers)
        return {
            ...f, isOnline: isUserOnline ? true : false
        };
    });
    return newfriends;
}
const MainContainer = styled('div')({
    flexGrow: 1,
    width: '100%'

});

function FriendsList({ friends, onlineUsers }) {
    return (
        <MainContainer>
            {checkIsOnline(friends, onlineUsers).map((friend) =>
                <FriendListItem friend={friend} key={friend.id}></FriendListItem>
            )}
        </MainContainer>
    )
}
const mapStateToProps = ({ friend }) => {
    return {
        ...friend
    }
}

export default connect(mapStateToProps)(FriendsList);

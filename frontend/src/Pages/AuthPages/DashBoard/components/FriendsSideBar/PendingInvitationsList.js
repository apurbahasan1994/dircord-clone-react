import React from 'react';
import styled from '@emotion/styled';
import PendingInviatationListItem from './PendingInviatationListItem';
import { connect } from 'react-redux';

const MainContainer = styled('div')({
  width: '100%',
  height: '22%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'auto'

});
 function PendingFriendsList({pendingFriendsInvitations}) {
  return (
    <MainContainer>
      {pendingFriendsInvitations?.map((invitation) => <PendingInviatationListItem invitation={invitation} key={invitation._id} />)}
    </MainContainer>
  )
}
const mapStateToProps=({friend})=>{
  return {
    ...friend
  };
}

export default connect(mapStateToProps)(PendingFriendsList);
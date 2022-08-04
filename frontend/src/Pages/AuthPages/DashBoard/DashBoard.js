import React, {  useEffect } from 'react';
import { styled } from '@mui/system';
import SideBar from './components/Sidebar/SideBar';
import FriendsSideBar from './components/FriendsSideBar/FriendsSideBar';
import Messenger from './components/Messenger/Messenger';
import AppBar from './components/AppBar/AppBar';
import { logout } from '../../../shared/Utils/auth';
import { connect } from 'react-redux';
import { getActions } from '../../../store/actions/authActions';
import { connectWithSocketServer } from '../../../realTimeCommunication/socketConnection';

const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
});
function DashBoard({ setUserDetails }) {
  useEffect(() => {
    console.log('tims');
    const userDetails = localStorage.getItem('user');
    console.log(userDetails);
    if (!userDetails) {
      logout();
    }
    else {
      setUserDetails(userDetails);
      connectWithSocketServer(JSON.parse(userDetails));
    }
  }, [setUserDetails])
  return <Wrapper>
    <SideBar></SideBar>
    <FriendsSideBar></FriendsSideBar>
    <Messenger></Messenger>
    <AppBar></AppBar>
  </Wrapper>
}
const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch)
  }
}
export default connect(null, mapActionsToProps)(DashBoard)
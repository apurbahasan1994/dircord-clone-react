import React from 'react'
import { styled } from '@mui/system';
import { connect } from 'react-redux';
import WelcomeMessage from './WelcomeMessage';
import MessengerContent from './MessengerContent';
const MainContainer = styled('div')({
  flexGrow: 1,
  backgroundColor: '#36393f',
  marginTop: '48px',
  display: 'flex'
});
 function Messenger({ chosenChatDetails }) {
  return (
    <MainContainer>
      {!chosenChatDetails?<WelcomeMessage></WelcomeMessage>:<MessengerContent chosenChatDetails={chosenChatDetails}></MessengerContent>}
    </MainContainer>
  )
}

const mapStateToProps = ({ chat }) => {
  return {
    ...chat
  }

}
export default connect(mapStateToProps)(Messenger);
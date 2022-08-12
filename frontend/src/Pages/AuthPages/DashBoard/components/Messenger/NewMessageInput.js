import React, { useState } from 'react';
import { styled } from '@mui/system';
import { connect } from 'react-redux';
import { sendDirectMessage } from '../../../../../realTimeCommunication/socketConnection';
const MainContainer = styled('div')({
  height: '60px',
  width: '100%',
  display:'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Input = styled('input')({
  backgroundColor: '#2f3136',
  width: '98%',
  height: '44px',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  fontSize: '14px',
  padding: '0px 10px',
})
function NewMessageInput({ chosenChatDetails }) {
  const [message, setMessage] = useState('');
  const handleSentMessage = () => {
    if (message?.length > 0) {
      sendDirectMessage({ receiverId: chosenChatDetails.id, content: message });
    }
    setMessage('')
  }
  const handleMessageValueChange = (event) => {
    setMessage(event.target.value);
  }
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSentMessage();
    }
  }
  return (
    <MainContainer>
      <Input placeholder={`Write message to ${chosenChatDetails?.name}`} value={message} onChange={handleMessageValueChange} onKeyDown={handleKeyPress}></Input>
    </MainContainer>
  )
}
const mapStateToProps = ({ chat }) => {
  return {
    ...chat
  }
}
export default connect(mapStateToProps)(NewMessageInput);
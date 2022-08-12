import React, { useEffect } from 'react'
import { styled } from '@mui/system';
import Messages from './Messages/Messages';
import NewMessageInput from './NewMessageInput';
import { getDirectChatHistory } from '../../../../../realTimeCommunication/socketConnection';
const Wrapper=styled('div')({
    flexGrow:1,
    backgroundColor:'#36393f',
    marginTop:'48px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between'

});
export default function MessengerContent({chosenChatDetails}) {
    useEffect(()=>{
        getDirectChatHistory({
            receiverId:chosenChatDetails.id,
        });
    },[chosenChatDetails]);
  return (
   <Wrapper>
    <Messages></Messages>
    <NewMessageInput></NewMessageInput>
   </Wrapper>
  )
}

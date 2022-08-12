import React from 'react';
import Avatar from '../../../../../../shared/components/Avatar';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import { convertDateToHumanReadable } from '../../../../../../shared/Utils/utils';
const MainContainer = styled('div')({
  width: '97%',
  display: 'flex',
  marginTop: '10px'
});
const AvatarContainer = styled('div')({
  width: '70px',
});

const MessageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});
const MessageContent = styled('div')({
  color: '#DCDDDE'
});
const SameAuthorMessageContent = styled('div')({
  color: '#DCDDDE',
  width: '97%'
});

const SameAuthorMessageText = styled('span')({
  marginLeft: '70px'
});
export default function Message(props) {

  const {  sameAuthor,  sameDay,message } = props;
  const { content,  author, date,  } = message;
  if (sameAuthor && sameDay) {
    return (
      <SameAuthorMessageContent>
        <SameAuthorMessageText>{content}</SameAuthorMessageText>
      </SameAuthorMessageContent>
    );
  }
  return (
    <MainContainer>
      <AvatarContainer>
        <Avatar username={author.username}></Avatar>
      </AvatarContainer>
      <MessageContainer>
        <Typography style={{ fontSize: '16px', color: 'white' }}>{author.username}
          <span style={{ fontSize: '12px', color: '#72767d',marginLeft:'10px' }}>{convertDateToHumanReadable(new Date(date),"dd/mm/yy")}</span>
        </Typography>
        <MessageContent>{content}</MessageContent>
      </MessageContainer>
    </MainContainer>
  )
}

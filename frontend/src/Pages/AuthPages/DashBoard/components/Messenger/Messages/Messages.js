import React from 'react'
import { styled } from '@mui/system';
import MessageHeader from './MessageHeader';
import { connect } from 'react-redux';
import Message from './Message';
import { convertDateToHumanReadable } from '../../../../../../shared/Utils/utils';
import DateSeparetor from './DateSeparetor';

const MainContainer = styled('div')({
    height: 'calc(100% - 60px)',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
});

function Messages({ chosenChatDetails, messages }) {
    return (
        <MainContainer><MessageHeader name={chosenChatDetails?.name}></MessageHeader>
            {messages.map((message, idx) => {
                const sameAuthor = idx > 0 && messages[idx].author._id === messages[idx - 1].author._id;
                const sameDay = idx > 0 && convertDateToHumanReadable(new Date(message.date), "dd/mm/yy") === convertDateToHumanReadable(new Date(messages[idx - 1].date), "dd/mm/yy")
                const newMessage = { ...message, sameAuthor, sameDay };
                return (
            
                    <div key={message._id} style={{width:'97%'}}>
                        {(!sameDay||idx===0)&&(<DateSeparetor date={convertDateToHumanReadable(new Date(message.date), "dd/mm/yy")}></DateSeparetor>)}
                        <Message message={newMessage} key={message._id}>

                        </Message>
                    </div>)

            })}
        </MainContainer>
    )
}
const mapStateToProps = ({ chat }) => {
    return {
        ...chat
    }

}
export default connect(mapStateToProps)(Messages);


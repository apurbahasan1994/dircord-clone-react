import store from "../../store/store";
import { setMessages } from "../../store/actions/chatActions";
export const updateChatHistoryIfActive = (data) => {
    const { participants, messages } = data;

    //find id of user from token and id from active conversartions
    const receiverId = store.getState()?.chat?.chosenChatDetails?.id;
    const userId = store.getState()?.auth?.userDetails?._id;
    
    if (receiverId && userId) {
        const usersInConversation = [receiverId, userId];
        updateChatHistoryIfSameConversationActive({
            participants,
            usersInConversation, messages
        });
    }


}

const updateChatHistoryIfSameConversationActive = ({ participants, usersInConversation, messages }) => {
    const result=participants.every((participantId)=>{
        return usersInConversation.includes(participantId);
    });
    

    if(result){
        store.dispatch(setMessages(messages));
    }

}

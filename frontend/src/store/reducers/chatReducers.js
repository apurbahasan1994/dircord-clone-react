import { chatActions } from "../actions/chatActions";

const initState = {
    chosenChatDetails: null,
    chatType: null,
    messages: []
};

const reducer = (state = initState, actions) => {
    switch (actions.type) {
        case chatActions.SET_CHOSEN_CHAT_DETAILS:
            return {
                ...state, chosenChatDetails: actions.details,
                chatType: actions.chatType,
                messages: []
            }
        case chatActions.SET_MESSAGES:
            return {
                ...state,
                messages: [...actions.messages],
            }
        // case chatActions.SET_CHAT_TYPE:
        //     return {
        //         ...state, chosenChatDetails: actions.details,
        //         chatType: actions.chatType,
        //         messages: []
        //     }
        default:
            return state;

    }

}

export default reducer;  

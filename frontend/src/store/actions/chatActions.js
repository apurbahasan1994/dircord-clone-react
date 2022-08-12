export const chatTypes = {
    DIRECT: "DIRECT",
    GROUP: "GROUP"
};

export const chatActions = {
    SET_CHOSEN_CHAT_DETAILS: 'CHAT.SET_CHOSEN_CHAT_DETAILS',
    SET_MESSAGES: "CHAT.SET_MESSAGES",
    SET_CHAT_TYPE: 'CHAT.SET_CHAT_TYPE'
}
export const setChosenChartDetails = (details, chatType) => {
    return {
        type: chatActions.SET_CHOSEN_CHAT_DETAILS,
        chatType,
        details
    }
}
export const setMessages = (messages) => {
    return {
        type: chatActions.SET_MESSAGES,
        messages
    }
}
export const setChartType = (details, chatType) => {
    return {
        type: chatActions.SET_CHAT_TYPE,
        details,
        chatType
    }
}

export const getActions = (dispatch) => {
    return {
        setChosenChartDetails: (details, chatType) => dispatch(setChosenChartDetails(details, chatType)),
        setMessages: (details) => dispatch(setMessages(details)),
        setChartType: (details, chatType) => dispatch(setChartType(details, chatType))
    }
}
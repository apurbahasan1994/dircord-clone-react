import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import alertReducer from './reducers/alertReducers';
import friendReducer from './reducers/friendsReducer';
import chatReducer from './reducers/chatReducers';
const rootReducer = combineReducers({
        auth: authReducer,
        alert: alertReducer,
        friend: friendReducer,
        chat: chatReducer
});
const store = configureStore({ reducer: rootReducer }, composeWithDevTools(applyMiddleware(thunk)));

export default store;
import {combineReducers} from 'redux';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import blogReducer from './blogReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    blog: blogReducer
})

export default rootReducer;
import {combineReducers} from 'redux';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import blogReducer from './blogReducer';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    blog: blogReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer;
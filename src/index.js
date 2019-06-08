import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {createStore,compose, applyMiddleware} from 'redux'
import {Provider} from 'react-redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import {getFirestore, reduxFirestore} from 'redux-firestore';
import {getFirebase, reactReduxFirebase} from 'react-redux-firebase'
import fbConfig from './config/fbConfig';

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirestore,getFirebase})),
        reactReduxFirebase(fbConfig, {useFirestoreForProfile:true,userProfile:'users',attachAuthIsReady:true}),
        reduxFirestore(fbConfig),
        
    )
    );

store.firebaseAuthIsReady.then(()=>{
ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();

})

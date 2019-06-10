
export const signIn=(cred)=>{
    return (dispatch,getState,{getFirebase})=>{

            const firebase = getFirebase();

            firebase.auth().signInWithEmailAndPassword(
                cred.email,
                cred.password
            ).then(()=>{
                dispatch({type:'LOGIN_SUCCESS'})
            })
            .catch(err=>{
                dispatch({type:'LOGIN_ERROR',err})
            })

    }
}

export const logOut =(uid)=>{
    return (dispatch,getState,{getFirebase})=>{
        const firebase = getFirebase();
        firebase.auth().signOut()
        .then(()=>{
            dispatch({type:"LOGOUT_SUCCESS"})
        })
        .catch((err)=>{
            dispatch({type:"LOGOUT_ERROR",err})
        })
    }
}

export const signUp =(creds)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase= getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            creds.email,
            creds.password
        )
        .then((res)=>{
            return firestore.collection('users').doc(res.user.uid).set({
                username: creds.username,
                joinDate: new Date(),
                firstTime: null,
                profileImage: 'https://firebasestorage.googleapis.com/v0/b/react-firebase-a3124.appspot.com/o/profileImg%2Fimage%20(2).jpg?alt=media&token=905f0caf-cf5f-4a2a-88a5-70b7086991bd',
                articleCount:0
            })
        }).then(()=>{
            firebase.auth().currentUser.sendEmailVerification(
            {url: 'http://localhost:3000/'}
        ).then(()=>{
            console.log('email link sent')
        })
        .catch(err=>{
            console.log('email link error')
        })
        })
        .then(()=>{
            dispatch({type:'SIGNUP_SUCCESS'})
        })
        .catch((err)=>{
            dispatch({type:'SIGNUP_ERROR',err})
        })
    }
}


export const verifyEmail=()=>{
    return (dispatch,getState,{getFirebase})=>{
        const firebase = getFirebase();

        
        firebase.auth().currentUser.sendEmailVerification(
            {url: 'http://localhost:3000/'}
        ).then(()=>{
            console.log('working')
        }).catch(()=>{
            console.log('nope')
        })

    }   
}
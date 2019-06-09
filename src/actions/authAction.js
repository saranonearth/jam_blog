
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
                profileImage: 'https://firebasestorage.googleapis.com/v0/b/react-firebase-a3124.appspot.com/o/profileImg%2FDummyimage.png?alt=media&token=cef8d99d-01ee-4a45-ac9b-884ec6afbf01',
                articleCount:0
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



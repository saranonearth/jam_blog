
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
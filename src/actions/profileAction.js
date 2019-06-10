
export const editProfile =(details)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        
        const uid = getState().firebase.auth.uid
        const firestore = getFirestore();
        const firebase = getFirebase();

            const spaceRef = firebase.storage().ref();
        
            spaceRef.child(`profileImg/${uid}`).put(details.file).then(snapshot=>{
            console.log('image uploaded')
        })
        .then(()=>{
            const spaceRef = firebase.storage().ref().child(`profileImg/${uid}`);   //to get image url
            return spaceRef.getDownloadURL()
        .then(url=>{
                    console.log(url)
                    return firestore.collection('users').doc(uid).update({    //to update img url in firestore user
                        profileImage: url,
                        bio: details.bio,
                        firstTime: 'nope'
                        }
                    )                
                }
            )
        }).then(()=>{
            console.log('yooy');
        }).catch(err=>{
            console.log(err)
        })
      
    
}
}
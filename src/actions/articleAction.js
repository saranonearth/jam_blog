export const NewArticle=(newarticle)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore = getFirestore();
        const firebase = getFirebase();

        const uid = firebase.auth().currentUser.uid;
        
        firestore.collection('articles').doc().set({

            authorId: uid,
            title: newarticle.title,
            description: newarticle.description,
            content: newarticle.content,
            postedDate: new Date()
        }).then(()=>{
            dispatch({type:"ARTICLEPOST_SUCCESS"})
        })
        .catch(err=>{
            dispatch({type:"ARTICLEPOST_ERROR".err})
        })
        

    }
}
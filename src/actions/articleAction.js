export const NewArticle=(newarticle)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore = getFirestore();
        const firebase = getFirebase();
        console.log(firebase.auth().currentUser.profile)
        const uid = firebase.auth().currentUser.uid;
            console.log('action',newarticle);
        firestore.collection('articles').doc().set({

            authorId: uid,
            title: newarticle.title,
            description: newarticle.description,
            content: newarticle.content,
            postedDate: new Date(),
            author: newarticle.author
        }).then(()=>{
            dispatch({type:"ARTICLEPOST_SUCCESS"})
        })
        .catch(err=>{
            dispatch({type:"ARTICLEPOST_ERROR".err})
        })
        

    }
}

export const remove=(id)=>{
    return (dispatch,getState,{getFirestore})=>{
        
        const firestore = getFirestore();
        console.log(id)
        firestore.collection('articles').doc(id).delete()
        .then(()=>{
            dispatch({type:'ARTICLE_DELETE_SUCCESSFUL'})
        })
        .then(()=>{
            dispatch({type:'ARTICLE_DELETE_ERROR'})
        })

    }
}
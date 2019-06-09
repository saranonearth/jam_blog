


const blogReducer=(state={},action)=>{
        switch(action.type){
                case 'ARTICLEPOST_SUCCESS':
                        console.log('posted')
                        return state
                case 'ARTICLEPOST_ERROR':
                        console.log(action.err)
                        return state
                case 'ARTICLE_DELETE_SUCCESS':
                        console.log("article deleted")
                        return state
                case 'ARTICLE_DELETE_ERROR':
                        console.log('aerticle delete error')
                        return state
                default:
                        return state
        }
}



export default blogReducer;
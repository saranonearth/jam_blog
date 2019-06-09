
const initState = {
        articleError: null
}

const blogReducer=(state=initState,action)=>{
        switch(action.type){
                case 'ARTICLEPOST_SUCCESS':
                        console.log('posted')
                        return {
                                ...state,
                                articleError: 'Article Published'
                        }
                case 'ARTICLEPOST_ERROR':
                        console.log(action.err)
                        return {
                                ...state,
                                articleError: action.err.code
                        }
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
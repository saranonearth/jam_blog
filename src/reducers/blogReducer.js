


const blogReducer=(state={},action)=>{
        switch(action.type){
                case 'ARTICLEPOST_SUCCESS':
                        console.log('posted')
                        return state
                case 'ARTICLEPOST_ERROR':
                        console.log(action.err)
                        return state
                default:
                        return state
        }
}



export default blogReducer;
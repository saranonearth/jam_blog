
const profileReducer=(state={},action)=>{
        switch(action.type){
                case 'PROFILE_EDIT_SUCCESS':
                        console.log('profile edit success')
                        return state
                case 'PROFILE_EDIT_ERROR':
                        console.log('profile edit fail')
                        return state
                default:
                        return state
        }
}


export default profileReducer;
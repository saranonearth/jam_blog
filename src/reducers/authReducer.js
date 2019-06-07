
const initState={
    authError: null
}



const authReducer=(state=initState,action)=>{
    switch(action.type){
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return state
        case 'LOGIN_ERROR':
            console.log('signin error',action.err)
            return {
                ...state,
                authError: action.err
            }
        default:
            return state
    }
   
}


export default authReducer;
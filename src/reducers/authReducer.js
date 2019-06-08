
const initState={
    signinauthError: null,
    signupauthError:null
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
        case 'SIGNUP_SUCCESS':
            console.log('signup successful')
            return state
        case 'SIGNUP_ERROR':
            console.log('Signup error', action.err)
            return{
                ...state,
                signupauthError: action.err.code
            }
        default:
            return state
    }
   
}


export default authReducer;
const initailState = {
    isAuthen: false,
    error: null,
    authToken: null,
}
const signUpReducer =(state = initailState,action)=>{
    switch(action.type){
        case 'SIGNUP_REQUEST':
            return {
               ...state,
               error:null,
            }
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                isAuthen:true,
                authToken:action.payload.authToken,
                error:null,
            }
            case'SIGNUP_ERROR':
            return{
                ...state,
                error:action.payload.error,
            }
            default:return state;
    }
}
export default signUpReducer;
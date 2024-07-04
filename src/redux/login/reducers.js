const initailState = {
    isAuthenticated: false,
    error: null,
    authToken: null,
}
const authReducer =(state = initailState,action)=>{
    switch(action.type){
        case 'LOGIN_REQUEST':
            return {
               ...state,
               error:null,
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isAuthenticated:true,
                authToken:action.payload.authToken,
                error:null,
            }
            case'LOGIN_ERROR':
            return{
                ...state,
                error:action.payload.error,
            }
            default:return state;
    }
}
export default authReducer;
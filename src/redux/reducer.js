import {combineReducers} from 'redux';
import authReducer from './login/reducers';
import signUpReducer from './signUp/reducer';
import {electronicsReducer,cartReducer} from './electronics/reducer';


const rootReducer = combineReducers({
    auth:authReducer,
    auth:signUpReducer,
    electronics: electronicsReducer,
    cart:cartReducer
})
export default rootReducer;
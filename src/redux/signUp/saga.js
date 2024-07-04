import { call, put, takeLatest } from "redux-saga/effects";
import { signUpError, signUpSuccess } from "./action";
import { signUpApi } from "./api";

function* signUpSaga(action){
    try{
const{name,email,password}=action.payload;
const result=yield call(signUpApi,name,email,password);
yield put(signUpSuccess(result.authToken))
    }catch(error){
yield put(signUpError(error.message))
    }
}
function* SignUpSaga(){
    yield takeLatest("SIGNUP_REQUEST",signUpSaga)
}
export default  SignUpSaga

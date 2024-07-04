import { call, put, takeLatest } from "redux-saga/effects";
import { loginError, loginSuccess } from "./actions";
import { loginApi } from "./apis";

function*loginSaga(action){
    try{
const{email,password}=action.payload;
const result=yield call(loginApi,email,password);
yield put(loginSuccess(result.authToken))
    }catch(error){
yield put(loginError(error.message))
    }
}
function* authSaga(){
    yield takeLatest("LOGIN_REQUEST",loginSaga)
}
export default authSaga

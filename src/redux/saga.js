import {all} from "redux-saga/effects";
import authSaga from "./login/sagas";
import SignUpSaga from "./signUp/saga";
import electronicSaga from "./electronics/saga";
export default function* rootSaga(){
    yield all([
        authSaga(),
        SignUpSaga(),
        electronicSaga()

    ])
}


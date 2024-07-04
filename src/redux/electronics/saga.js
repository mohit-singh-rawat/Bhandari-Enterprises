import { call, put, takeLatest } from "redux-saga/effects";
import { electronicsApi } from "./api";
import { electronicsError, electronicsSuccess, electronicsLoading } from "./action";

function* fetchElectronicsSaga(action) {
    try {
        const result = yield call(electronicsApi);
        yield put(electronicsSuccess(result))
    } catch (error) {
        yield put(electronicsError(error.message))
    }
}
function* electronicSaga() {
    yield takeLatest(electronicsLoading, fetchElectronicsSaga)
}
export default electronicSaga

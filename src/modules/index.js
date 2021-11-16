import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import certificate, { certificateSaga } from './certificate';

const rootReducer = combineReducers({
  auth,
  certificate,
});
export function* rootSaga() {
  yield all([authSaga(), certificateSaga()]);
}

export default rootReducer;

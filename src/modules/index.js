import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import certificate, { certificateSaga } from './certificate';
import profile, { profileSaga } from './profile';

const rootReducer = combineReducers({
  auth,
  certificate,
  profile,
});
export function* rootSaga() {
  yield all([authSaga(), certificateSaga(), profileSaga()]);
}

export default rootReducer;

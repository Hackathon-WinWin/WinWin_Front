import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import certificate, { certificateSaga } from './certificate';
import profile, { profileSaga } from './profile';
import myPage, { myPageSaga } from './myPage';

const rootReducer = combineReducers({
  auth,
  certificate,
  profile,
  myPage,
});
export function* rootSaga() {
  yield all([authSaga(), certificateSaga(), profileSaga(), myPageSaga()]);
}

export default rootReducer;

import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import certificate, { certificateSaga } from './certificate';
import profile, { profileSaga } from './profile';
import myPage, { myPageSaga } from './myPage';
import portfolio, { portfolioSaga } from './portfolio';

const rootReducer = combineReducers({
  auth,
  certificate,
  profile,
  myPage,
  portfolio,
});
export function* rootSaga() {
  yield all([
    authSaga(),
    certificateSaga(),
    profileSaga(),
    myPageSaga(),
    portfolioSaga(),
  ]);
}

export default rootReducer;

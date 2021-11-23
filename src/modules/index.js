import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import certificate, { certificateSaga } from './certificate';
import profile, { profileSaga } from './profile';
import myPage, { myPageSaga } from './myPage';
import portfolio, { portfolioSaga } from './portfolio';
import recruitment, { recruitmentSaga } from './recruitment';

const rootReducer = combineReducers({
  auth,
  certificate,
  profile,
  myPage,
  portfolio,
  recruitment,
});
export function* rootSaga() {
  yield all([
    authSaga(),
    certificateSaga(),
    profileSaga(),
    myPageSaga(),
    portfolioSaga(),
    recruitmentSaga(),
  ]);
}

export default rootReducer;

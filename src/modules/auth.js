import { createAction, handleActions } from 'redux-actions';
import { createRequestSaga } from '../lib/createRequestSaga';
import * as authAPI from '../api/auth';
import { takeLatest } from 'redux-saga/effects';

// ARTIST action
const ARTIST_SIGNUP = 'auth/ARTIST_SIGNUP';
const ARTIST_SIGNUP_SUCCESS = 'auth/ARTIST_SIGNUP_SUCCESS';
const ARTIST_SIGNUP_FAILURE = 'auth/ARTIST_SIGNUP_FAILURE';

// HOTEL action
const HOTEL_SIGNUP = 'auth/HOTEL_SIGNUP';
const HOTEL_SIGNUP_SUCCESS = 'auth/HOTEL_SIGNUP_SUCCESS';
const HOTEL_SIGNUP_FAILURE = 'auth/HOTEL_SIGNUP_FAILURE';

// common
const SIGNIN = 'auth/SIGNIN';
const SIGNIN_SUCCESS = 'auth/SIGNIN_SUCCESS';
const SIGNIN_FAILURE = 'auth/SIGNIN_FAILURE';
const LOGOUT = 'auth/LOGOUT';
const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
const CHECK_LOGGEDIN = 'auth/CHECK_LOGGEDIN';
const CHECK_LOGGEDIN_SUCCESS = 'auth/CHECK_LOGGEDIN_SUCCESS';
const CHECK_ACCOUNT = 'auth/CHECK_ACCOUNT';
const CHECK_ACCOUNT_SUCCESS = 'auth/CHECK_ACCOUNT_SUCCESS';
const CHECK_ACCOUNT_FAILURE = 'auth/CHECK_ACCOUNT_FAILURE';
const INIT_AUTH = 'auth/INIT_AUTH';

export const artistSignup = createAction(
  ARTIST_SIGNUP,
  ({ account, password, phoneNumber }) => ({
    account,
    password,
    phoneNumber,
  })
);
export const hotelSignup = createAction(
  HOTEL_SIGNUP,
  ({ account, password, hostName, openDate, businessNumber }) => ({
    account,
    password,
    hostName,
    openDate,
    businessNumber,
  })
);
export const signin = createAction(SIGNIN, ({ account, password }) => ({
  account,
  password,
}));
export const logout = createAction(LOGOUT);
export const checkLoggedIn = createAction(CHECK_LOGGEDIN);
export const checkAccount = createAction(CHECK_ACCOUNT, (account) => account);
export const initAuth = createAction(INIT_AUTH);

const artistSignupSaga = createRequestSaga(ARTIST_SIGNUP, authAPI.artistSignup);
const hotelSignupSaga = createRequestSaga(HOTEL_SIGNUP, authAPI.hotelSignup);
const signinSaga = createRequestSaga(SIGNIN, authAPI.signin);
const logoutSaga = createRequestSaga(LOGOUT, authAPI.Logout);
const checkLoggedInSaga = createRequestSaga(
  CHECK_LOGGEDIN,
  authAPI.checkLoggedIn
);
const checkAccountSaga = createRequestSaga(CHECK_ACCOUNT, authAPI.checkAccount);

export function* authSaga() {
  yield takeLatest(ARTIST_SIGNUP, artistSignupSaga);
  yield takeLatest(HOTEL_SIGNUP, hotelSignupSaga);
  yield takeLatest(SIGNIN, signinSaga);
  yield takeLatest(LOGOUT, logoutSaga);
  yield takeLatest(CHECK_LOGGEDIN, checkLoggedInSaga);
  yield takeLatest(CHECK_ACCOUNT, checkAccountSaga);
}

const initialState = {
  artistSignupSuccess: null,
  artistSignupError: null,
  hotelSignupSuccess: null,
  hotelSignupError: null,
  signinSuccess: null,
  signinError: null,
  logoutSuccess: null,
  check: true,
  checkAccountSuccess: null,
};

export default handleActions(
  {
    [ARTIST_SIGNUP_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      artistSignupSuccess: success,
    }),
    [ARTIST_SIGNUP_FAILURE]: (state, { payload: error }) => ({
      ...state,
      artistSignupError: error,
    }),
    [HOTEL_SIGNUP_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      hotelSignupSuccess: success,
    }),
    [HOTEL_SIGNUP_FAILURE]: (state, { payload: error }) => ({
      ...state,
      hotelSignupError: error,
    }),
    [SIGNIN_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      signinSuccess: success,
    }),
    [SIGNIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      signinError: error,
    }),
    [LOGOUT_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      logoutSuccess: success,
    }),
    [CHECK_LOGGEDIN_SUCCESS]: (state, { payload: check }) => ({
      ...state,
      check,
    }),
    [CHECK_ACCOUNT_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      checkAccountSuccess: success,
    }),
    [INIT_AUTH]: () => initialState,
  },
  initialState
);

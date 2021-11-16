import { createAction, handleActions } from 'redux-actions';
import { createRequestSaga } from '../lib/createRequestSaga';
import * as authAPI from '../api/auth';
import { takeLatest } from 'redux-saga/effects';

// ARTIST action
const ARTIST_SIGNUP = 'auth/ARTIST_SIGNUP';
const ARTIST_SIGNUP_SUCCESS = 'auth/ARTIST_SIGNUP_SUCCESS';
const ARTIST_SIGNUP_FAILURE = 'auth/ARTIST_SIGNUP_FAILURE';
const ARTIST_SIGNIN = 'auth/ARTIST_SIGNIN';
const ARTIST_SIGNIN_SUCCESS = 'auth/ARTIST_SIGNIN_SUCCESS';
const ARTIST_SIGNIN_FAILURE = 'auth/ARTIST_SIGNIN_FAILURE';
const ARTIST_LOGOUT = 'auth/ARTIST_LOGOUT';
const ARTIST_LOGOUT_SUCCESS = 'auth/ARTIST_LOGOUT_SUCCESS';

// HOTEL action
const HOTEL_SIGNUP = 'auth/HOTEL_SIGNUP';
const HOTEL_SIGNUP_SUCCESS = 'auth/HOTEL_SIGNUP_SUCCESS';
const HOTEL_SIGNUP_FAILURE = 'auth/HOTEL_SIGNUP_FAILURE';
const HOTEL_SIGNIN = 'auth/HOTEL_SIGNIN';
const HOTEL_SIGNIN_SUCCESS = 'auth/HOTEL_SIGNIN_SUCCESS';
const HOTEL_SIGNIN_FAILURE = 'auth/HOTEL_SIGNIN_FAILURE';
const HOTEL_LOGOUT = 'auth/HOTEL_LOGOUT';
const HOTEL_LOGOUT_SUCCESS = 'auth/HOTEL_LOGOUT_SUCCESS';

// common
const CHECK_LOGGEDIN = 'auth/CHECK_LOGGEDIN';
const CHECK_LOGGEDIN_SUCCESS = 'auth/CHECK_LOGGEDIN_SUCCESS';
const INIT_AUTH = 'auth/INIT_AUTH';

export const artistSignup = createAction(
  ARTIST_SIGNUP,
  ({ account, password, phoneNumber }) => ({
    account,
    password,
    phoneNumber,
  })
);
export const artistSignin = createAction(
  ARTIST_SIGNIN,
  ({ account, password }) => ({
    account,
    password,
  })
);
export const artistLogout = createAction(ARTIST_LOGOUT);
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
export const hotelSignin = createAction(
  HOTEL_SIGNIN,
  ({ account, password }) => ({
    account,
    password,
  })
);
export const hotelLogout = createAction(HOTEL_LOGOUT);

export const checkLoggedIn = createAction(CHECK_LOGGEDIN);
export const initAuth = createAction(INIT_AUTH);

const artistSignupSaga = createRequestSaga(ARTIST_SIGNUP, authAPI.artistSignup);
const artistSigninSaga = createRequestSaga(ARTIST_SIGNIN, authAPI.artistSignin);
const artistLogoutSaga = createRequestSaga(ARTIST_LOGOUT, authAPI.artistLogout);
const hotelSignupSaga = createRequestSaga(HOTEL_SIGNUP, authAPI.hotelSignup);
const hotelSigninSaga = createRequestSaga(HOTEL_SIGNIN, authAPI.hotelSignin);
const hotelLogoutSaga = createRequestSaga(HOTEL_LOGOUT, authAPI.hotelLogout);

const checkLoggedInSaga = createRequestSaga(
  CHECK_LOGGEDIN,
  authAPI.checkLoggedIn
);

export function* authSaga() {
  yield takeLatest(ARTIST_SIGNUP, artistSignupSaga);
  yield takeLatest(ARTIST_SIGNIN, artistSigninSaga);
  yield takeLatest(ARTIST_LOGOUT, artistLogoutSaga);
  yield takeLatest(HOTEL_SIGNUP, hotelSignupSaga);
  yield takeLatest(HOTEL_SIGNIN, hotelSigninSaga);
  yield takeLatest(HOTEL_LOGOUT, hotelLogoutSaga);
  yield takeLatest(CHECK_LOGGEDIN, checkLoggedInSaga);
}

const initialState = {
  artistSignupSuccess: null,
  artistSignupError: null,
  artistSigninSuccess: null,
  artistSigninError: null,
  artistLogoutSuccess: null,
  hotelSignupSuccess: null,
  hotelSignupError: null,
  hotelSigninSuccess: null,
  hotelSigninError: null,
  hotelLogoutSuccess: null,
  check: null,
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
    [ARTIST_SIGNIN_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      artistSigninSuccess: success,
    }),
    [ARTIST_SIGNIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      artistSigninError: error,
    }),
    [ARTIST_LOGOUT_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      artistLogoutSuccess: success,
    }),

    [HOTEL_SIGNUP_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      hotelSignupSuccess: success,
    }),
    [HOTEL_SIGNUP_FAILURE]: (state, { payload: error }) => ({
      ...state,
      hotelSignupError: error,
    }),
    [HOTEL_SIGNIN_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      hotelSigninSuccess: success,
    }),
    [HOTEL_SIGNIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      hotelSigninError: error,
    }),
    [HOTEL_LOGOUT_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      hotelLogoutSuccess: success,
    }),

    [CHECK_LOGGEDIN_SUCCESS]: (state, { payload: check }) => ({
      ...state,
      check,
    }),
    [INIT_AUTH]: () => initialState,
  },
  initialState
);

import { createAction, handleActions } from 'redux-actions';
import { createRequestSaga } from '../lib/createRequestSaga';
import * as certificationAPI from '../api/certificate';
import { takeLatest } from 'redux-saga/effects';

// ARTIST action
const REQUIRE_NUMBER = 'auth/REQUIRE_NUMBER';
const REQUIRE_NUMBER_SUCCESS = 'auth/REQUIRE_NUMBER_SUCCESS';
const REQUIRE_NUMBER_FAILURE = 'auth/REQUIRE_NUMBER_FAILURE';
const CHECK_NUMBER = 'auth/CHECK_NUMBER';
const CHECK_NUMBER_SUCCESS = 'auth/CHECK_NUMBER_SUCCESS';
const CHECK_NUMBER_FAILURE = 'auth/CHECK_NUMBER_FAILURE';

// HOTEL action
const CHECK_BUSINESS = 'auth/CHECK_BUSINESS';
const CHECK_BUSINESS_SUCCESS = 'auth/CHECK_BUSINESS_SUCCESS';
const CHECK_BUSINESS_FAILURE = 'auth/CHECK_BUSINESS_FAILURE';

// INIT action
const INIT_PHONE_CERTIFY = 'auth/INIT_PHONE_CERTIFY';
const INIT_BUSINESS_CERTIFY = 'auth/INIT_BUSINESS_CERTIFY';

export const requireNumber = createAction(
  REQUIRE_NUMBER,
  (phoneNumber) => phoneNumber
);
export const checkNumber = createAction(
  CHECK_NUMBER,
  ({ phoneNumber, certification }) => ({ phoneNumber, certification })
);
export const checkBusiness = createAction(
  CHECK_BUSINESS,
  ({ businessNumber, openDate, hostName }) => ({
    businessNumber,
    openDate,
    hostName,
  })
);
export const initPhoneCertify = createAction(INIT_PHONE_CERTIFY);
export const initBusinessCertify = createAction(INIT_BUSINESS_CERTIFY);

const requireNumberSaga = createRequestSaga(
  REQUIRE_NUMBER,
  certificationAPI.requireNumber
);
const checkNumberSaga = createRequestSaga(
  CHECK_NUMBER,
  certificationAPI.checkNumber
);
const checkBusinessSaga = createRequestSaga(
  CHECK_BUSINESS,
  certificationAPI.checkBusiness
);
export function* certificateSaga() {
  yield takeLatest(REQUIRE_NUMBER, requireNumberSaga);
  yield takeLatest(CHECK_NUMBER, checkNumberSaga);
  yield takeLatest(CHECK_BUSINESS, checkBusinessSaga);
}

const initialState = {
  requirePhoneSuccess: null,
  requirePhoneError: null,
  checkPhoneSuccess: null,
  checkPhoneError: null,
  checkBusinessSuccess: null,
  checkBusinessError: null,
};

export default handleActions(
  {
    [REQUIRE_NUMBER_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      requirePhoneSuccess: success,
    }),
    [REQUIRE_NUMBER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      requirePhoneError: error,
    }),
    [CHECK_NUMBER_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      checkPhoneSuccess: success,
    }),
    [CHECK_NUMBER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      checkPhoneError: error,
    }),
    [CHECK_BUSINESS_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      checkBusinessSuccess: success,
    }),
    [CHECK_BUSINESS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      checkBusinessError: error,
    }),
    [INIT_PHONE_CERTIFY]: (state) => ({
      ...state,
      requirePhoneSuccess: null,
      requirePhoneError: null,
      checkPhoneSuccess: null,
      checkPhoneError: null,
    }),
    [INIT_BUSINESS_CERTIFY]: (state) => ({
      ...state,
      checkBusinessSuccess: null,
      checkBusinessError: null,
    }),
  },
  initialState
);

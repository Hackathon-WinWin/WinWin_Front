import { createAction, handleActions } from 'redux-actions';
import { createRequestSaga } from '../lib/createRequestSaga';
import * as certificationAPI from '../api/certificate';
import { takeLatest } from 'redux-saga/effects';

// ARTIST action
const REQUIRE_NUMBER = 'auth/REQUIRE_NUMBER';
const REQUIRE_NUMBER_SUCCESS = 'auth/REQUIRE_NUMBER_SUCCESS';
const CHECK_NUMBER = 'auth/CHECK_NUMBER';
const CHECK_NUMBER_SUCCESS = 'auth/CHECK_NUMBER';

// HOTEL action
const CHECK_BUSINESS = 'auth/CHECK_BUSINESS';
const CHECK_BUSINESS_SUCCESS = 'auth/CHECK_BUSINESS_SUCCESS';
const CHECK_BUSINESS_FAILURE = 'auth/CHECK_BUSINESS_FAILURE';

export const requireNumber = createAction(
  REQUIRE_NUMBER,
  (phonenumber) => phonenumber
);
export const checkNumber = createAction(
  CHECK_NUMBER,
  ({ phonenumber, certification }) => ({ phonenumber, certification })
);
export const checkBusiness = createAction(
  CHECK_BUSINESS,
  ({ businessNumber, openDate, hostName }) => ({
    businessNumber,
    openDate,
    hostName,
  })
);

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
  certificationSuccess: null,
  checkBusinessSuccess: null,
  checkBusinessError: null,
};

export default handleActions(
  {
    [REQUIRE_NUMBER_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      requirePhoneSuccess: success,
    }),
    [CHECK_NUMBER_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      certificationSuccess: success,
    }),
    [CHECK_BUSINESS_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      checkBusinessSuccess: success,
    }),
    [CHECK_BUSINESS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      checkBusinessError: error,
    }),
  },
  initialState
);

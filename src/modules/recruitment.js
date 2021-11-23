import createAction from 'redux-actions/lib/createAction';
import { createRequestSaga } from '../lib/createRequestSaga';
import * as recruitmentAPI from '../api/recruitment';
import { takeLatest } from 'redux-saga/effects';
import { handleActions } from 'redux-actions';

const ADD_RECRUITMENT = 'recruitment/ADD_RECRUITMENT';
// const ADD_RECRUITMENT_SUCCESS = 'recruitment/ADD_RECRUITMENT_SUCCESS';
// const ADD_RECRUITMENT_FAILURE = 'recruitment/ADD_RECRUITMENT_FAILURE';
const REAC_MY_RECRUITMENT = 'recruitment/REAC_MY_RECRUITMENT';
const REAC_MY_RECRUITMENT_SUCCESS = 'recruitment/REAC_MY_RECRUITMENT_SUCCESS';
const REAC_MY_RECRUITMENT_FAILURE = 'recruitment/REAC_MY_RECRUITMENT_FAILURE';

export const addRecruitment = createAction(
  ADD_RECRUITMENT,
  (formData) => formData
);
export const readMyRecruitment = createAction(REAC_MY_RECRUITMENT);

const addRecruitmentSaga = createRequestSaga(
  ADD_RECRUITMENT,
  recruitmentAPI.addRecruitment
);
const readMyRecruitmentSaga = createRequestSaga(
  REAC_MY_RECRUITMENT,
  recruitmentAPI.readMyRecruitment
);
export function* recruitmentSaga() {
  yield takeLatest(ADD_RECRUITMENT, addRecruitmentSaga);
  yield takeLatest(REAC_MY_RECRUITMENT, readMyRecruitmentSaga);
}
const initialState = {
  addSuccess: null,
  addError: null,
  myRecuitementList: null,
  myRecuitementListError: null,
};
export default handleActions(
  {
    [REAC_MY_RECRUITMENT_SUCCESS]: (state, { payload: myRecuitementList }) => ({
      ...state,
      myRecuitementList,
      myRecuitementListError: null,
    }),
    [REAC_MY_RECRUITMENT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      myRecuitementList: null,
      myRecuitementListError: error,
    }),
  },
  initialState
);

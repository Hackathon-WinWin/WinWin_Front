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
initialState.myRecuitementList = {
  _id: '619d23776f2db9b7980d27a7',
  hotelAuth_id: '619d23636f2db9b7980d2796',
  hotelName: '서울 호텔',
  address: '서울시 강남구 대치동',
  bookMark: 0,
  recruitments: [
    {
      hotelAuth_id: '619d23636f2db9b7980d2796',
      exhibitionStartDate: '2022-01-01T00:00:00.000Z',
      exhibitionEndDate: '2022-01-31T00:00:00.000Z',
      applicationStartDate: '2021-12-01T00:00:00.000Z',
      applicationEndDate: '2021-12-31T00:00:00.000Z',
      area: 500,
      concept: '자연',
      images: [],
      title: '서울호텔 자연컨셉 작품 모집',
      introduceText: '안녕하세요 서울호텔입니다.',
      _id: '619d23826f2db9b7980d27ae',
    },
    {
      hotelAuth_id: '619d23636f2db9b7980d2796',
      exhibitionStartDate: '2022-01-01T00:00:00.000Z',
      exhibitionEndDate: '2022-01-31T00:00:00.000Z',
      applicationStartDate: '2021-12-01T00:00:00.000Z',
      applicationEndDate: '2021-12-31T00:00:00.000Z',
      area: 500,
      concept: '자연',
      images: [
        {
          image:
            'https://hackathonwinwin.s3.ap-northeast-2.amazonaws.com/9311637688234457.png',
          _id: '619d23aa6f2db9b7980d27b5',
        },
        {
          image:
            'https://hackathonwinwin.s3.ap-northeast-2.amazonaws.com/9381637688234459.png',
          _id: '619d23aa6f2db9b7980d27b6',
        },
        {
          image:
            'https://hackathonwinwin.s3.ap-northeast-2.amazonaws.com/3691637688234460.png',
          _id: '619d23aa6f2db9b7980d27b7',
        },
      ],
      title: '서울호텔 자연컨셉 작품 모집',
      introduceText: '안녕하세요 서울호텔입니다.',
      _id: '619d23aa6f2db9b7980d27b4',
    },
  ],
  __v: 0,
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

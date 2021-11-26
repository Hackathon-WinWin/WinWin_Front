import { createAction } from 'redux-actions';
import { createRequestSaga } from '../lib/createRequestSaga';
import * as portfolioAPI from '../api/portfolio';
import { takeLatest } from 'redux-saga/effects';
import { handleActions } from 'redux-actions';

const ADD_PORTFOLIO = 'portfolio/ADD_PORTFOLIO';
const ADD_PORTFOLIO_SUCCESS = 'portfolio/ADD_PORTFOLIO_SUCCESS';
const ADD_PORTFOLIO_FAILURE = 'portfolio/ADD_PORTFOLIO_FAILURE';
const READ_MY_PORTFOLIO = 'portfolio/READ_MY_PORTFOLIO';
const READ_MY_PORTFOLIO_SUCCESS = 'portfolio/READ_MY_PORTFOLIO_SUCCESS';
const READ_MY_PORTFOLIO_FAILURE = 'portfolio/READ_MY_PORTFOLIO_FAILURE';
const INIT_PORTFOLIO = 'portfolio/INIT_PORTFOLIO';

export const addPortfolio = createAction(ADD_PORTFOLIO, (formData) => formData);
export const readMyPortfolio = createAction(READ_MY_PORTFOLIO);
export const initPortfolio = createAction(INIT_PORTFOLIO);

const addPortfolioSaga = createRequestSaga(
  ADD_PORTFOLIO,
  portfolioAPI.addPortfolio
);
const readMyPortfolioSaga = createRequestSaga(
  READ_MY_PORTFOLIO,
  portfolioAPI.readMyPortfolio
);

export function* portfolioSaga() {
  yield takeLatest(ADD_PORTFOLIO, addPortfolioSaga);
  yield takeLatest(READ_MY_PORTFOLIO, readMyPortfolioSaga);
}
const initialState = {
  success: null,
  error: null,
  myPortfolio: null,
  myPortfolioError: null,
};
// initialState.myPortfolio = {
//   _id: '619b9803d2959b99228bf3f5',
//   artistAuth_id: '619b97fcd2959b99228bf3e9',
//   portfolios: [
//     {
//       artistAuth_id: '619b97fcd2959b99228bf3e9',
//       title: '포트폴리오 제목',
//       introduceText: '소개글',
//       link: '링크',
//       images: [
//         {
//           image:
//             'https://hackathonwinwin.s3.ap-northeast-2.amazonaws.com/4291637586955897.png',
//           _id: '619b980cd2959b99228bf3fb',
//         },
//         {
//           image:
//             'https://hackathonwinwin.s3.ap-northeast-2.amazonaws.com/8301637586955898.png',
//           _id: '619b980cd2959b99228bf3fc',
//         },
//       ],
//       _id: '619b980cd2959b99228bf3fa',
//     },
//     {
//       artistAuth_id: '619b97fcd2959b99228bf3e9',
//       title: '포트폴리오 제목',
//       introduceText: '소개글',
//       link: '링크',
//       images: [
//         {
//           image:
//             'https://hackathonwinwin.s3.ap-northeast-2.amazonaws.com/4291637586955897.png',
//           _id: '619b980cd2959b99228bf3',
//         },
//         {
//           image:
//             'https://hackathonwinwin.s3.ap-northeast-2.amazonaws.com/8301637586955898.png',
//           _id: '619b980cd2959b992f3fc',
//         },
//       ],
//       _id: '619b980cd2959b99228bf3',
//     },
//   ],
//   __v: 0,
// };
export default handleActions(
  {
    [ADD_PORTFOLIO_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      success,
      error: null,
    }),
    [ADD_PORTFOLIO_FAILURE]: (state, { payload: error }) => ({
      ...state,
      success: null,
      error,
    }),
    [READ_MY_PORTFOLIO_SUCCESS]: (state, { payload: myPortfolio }) => ({
      ...state,
      myPortfolio,
      myPortfolioError: null,
    }),
    [READ_MY_PORTFOLIO_FAILURE]: (state, { payload: error }) => ({
      ...state,
      myPortfolio: null,
      myPortfolioError: error,
    }),
    [INIT_PORTFOLIO]: (state) => ({ ...state, success: null, error: null }),
  },
  initialState
);

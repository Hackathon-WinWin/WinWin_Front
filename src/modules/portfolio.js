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

import { createAction, handleActions } from 'redux-actions';
import { createRequestSaga } from '../lib/createRequestSaga';
import * as profileAPI from '../api/profile';
import { takeLatest } from 'redux-saga/effects';

// ARTIST action
const CHECK_ARTIST_PROFILE = 'auth/CHECK_ARTIST_PROFILE';
const CHECK_ARTIST_PROFILE_SUCCESS = 'auth/CHECK_ARTIST_PROFILE_SUCCESS';
const CHECK_ARTIST_PROFILE_FAILURE = 'auth/CHECK_ARTIST_PROFILE_FAILURE';

const CREATE_ARTIST_PROFILE = 'auth/CREATE_ARTIST_PROFILE';
const CREATE_ARTIST_PROFILE_SUCCESS = 'auth/CREATE_ARTIST_PROFILE_SUCCESS';
const CREATE_ARTIST_PROFILE_FAILURE = 'auth/CREATE_ARTIST_PROFILE_FAILURE';
const CREATE_ARTIST_BACKIMG = 'auth/CREATE_ARTIST_BACKIMG';
const CREATE_ARTIST_BACKIMG_SUCCESS = 'auth/CREATE_ARTIST_BACKIMG_SUCCESS';
const CREATE_ARTIST_BACKIMG_FAILURE = 'auth/CREATE_ARTIST_BACKIMG_FAILURE';
const CREATE_ARTIST_PROFILEIMG = 'auth/CREATE_ARTIST_PROFILEIMG';
const CREATE_ARTIST_PROFILEIMG_SUCCESS =
  'auth/CREATE_ARTIST_PROFILEIMG_SUCCESS';
const CREATE_ARTIST_PROFILEIMG_FAILURE =
  'auth/CREATE_ARTIST_PROFILEIMG_FAILURE';

// HOTEL action

export const checkArtistProfile = createAction(CHECK_ARTIST_PROFILE);
export const createArtistProfile = createAction(
  CREATE_ARTIST_PROFILE,
  ({ nickname, name, birthday, email }) => ({
    nickname,
    name,
    birthday,
    email,
  })
);
export const createArtistProfileImage = createAction(
  CREATE_ARTIST_PROFILEIMG,
  (formData) => formData
);
export const createArtistBackgroundImage = createAction(
  CREATE_ARTIST_BACKIMG,
  (formData) => formData
);

const checkArtistProfileSaga = createRequestSaga(
  CHECK_ARTIST_PROFILE,
  profileAPI.checkArtistProfile
);
const createArtistProfileSaga = createRequestSaga(
  CREATE_ARTIST_PROFILE,
  profileAPI.createArtistProfile
);
const createArtistProfileImageSaga = createRequestSaga(
  CREATE_ARTIST_PROFILEIMG,
  profileAPI.createArtistProfileImage
);
const createArtistBackgroundImageSaga = createRequestSaga(
  CREATE_ARTIST_BACKIMG,
  profileAPI.createArtistBackgroundImage
);

export function* profileSaga() {
  yield takeLatest(CHECK_ARTIST_PROFILE, checkArtistProfileSaga);
  yield takeLatest(CREATE_ARTIST_PROFILE, createArtistProfileSaga);
  yield takeLatest(CREATE_ARTIST_PROFILEIMG, createArtistProfileImageSaga);
  yield takeLatest(CREATE_ARTIST_BACKIMG, createArtistBackgroundImageSaga);
}

const initialState = {
  checkArtistProfileSuccess: null,
  checkArtistProfileError: null,
  artistprofileSuccess: null,
  artistprofileError: null,
  artistBackImgSuccess: null,
  artistBackImgError: null,
  artistProfileImgSuccess: null,
  artistProfileImgError: null,

  //   hotelSignupSuccess: null,
  //   hotelSignupError: null,
  //   hotelSigninSuccess: null,
  //   hotelSigninError: null,
  //   hotelLogoutSuccess: null,
  check: null,
};

export default handleActions(
  {
    [CHECK_ARTIST_PROFILE_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      checkArtistProfileSuccess: success,
    }),
    [CHECK_ARTIST_PROFILE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      checkArtistProfileError: error,
    }),
    [CREATE_ARTIST_PROFILE_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      artistprofileSuccess: success,
    }),
    [CREATE_ARTIST_PROFILE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      artistprofileError: error,
    }),
    [CREATE_ARTIST_BACKIMG_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      artistBackImgSuccess: success,
    }),
    [CREATE_ARTIST_BACKIMG_FAILURE]: (state, { payload: error }) => ({
      ...state,
      artistBackImgError: error,
    }),
    [CREATE_ARTIST_PROFILEIMG_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      artistProfileImgSuccess: success,
    }),
    [CREATE_ARTIST_PROFILEIMG_FAILURE]: (state, { payload: error }) => ({
      ...state,
      artistProfileImgError: error,
    }),
  },
  initialState
);

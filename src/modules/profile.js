import { createAction, handleActions } from 'redux-actions';
import { createRequestSaga } from '../lib/createRequestSaga';
import * as profileAPI from '../api/profile';
import { takeLatest } from 'redux-saga/effects';

// ARTIST action
const CHECK_ARTIST_PROFILE = 'profile/CHECK_ARTIST_PROFILE';
const CHECK_ARTIST_PROFILE_SUCCESS = 'profile/CHECK_ARTIST_PROFILE_SUCCESS';
const CHECK_ARTIST_PROFILE_FAILURE = 'profile/CHECK_ARTIST_PROFILE_FAILURE';
const CREATE_ARTIST_PROFILE = 'profile/CREATE_ARTIST_PROFILE';
const CREATE_ARTIST_PROFILE_SUCCESS = 'profile/CREATE_ARTIST_PROFILE_SUCCESS';
const CREATE_ARTIST_PROFILE_FAILURE = 'profile/CREATE_ARTIST_PROFILE_FAILURE';

// HOTEL action
const CHECK_HOTEL_PROFILE = 'profile/CHECK_HOTEL_PROFILE';
const CHECK_HOTEL_PROFILE_SUCCESS = 'profile/CHECK_HOTEL_PROFILE_SUCCESS';
const CHECK_HOTEL_PROFILE_FAILURE = 'profile/CHECK_HOTEL_PROFILE_FAILURE';
const CREATE_HOTEL_PROFILE = 'profile/CREATE_HOTEL_PROFILE';
const CREATE_HOTEL_PROFILE_SUCCESS = 'profile/CREATE_HOTEL_PROFILE_SUCCESS';
const CREATE_HOTEL_PROFILE_FAILURE = 'profile/CREATE_HOTEL_PROFILE_FAILURE';

// ARTIST action creator
export const checkArtistProfile = createAction(CHECK_ARTIST_PROFILE);
export const createArtistProfile = createAction(
  CREATE_ARTIST_PROFILE,
  (nickname, name, birthday, address, email, introduceText) => ({
    nickname,
    name,
    birthday,
    address,
    email,
    introduceText,
  })
);

// HOTEL action creator
export const checkHotelProfile = createAction(CHECK_HOTEL_PROFILE);
export const createHotelProfile = createAction(
  CREATE_HOTEL_PROFILE,
  ({ hotelName, address, phoneNumber, email, introduceText }) => ({
    hotelName,
    address,
    phoneNumber,
    email,
    introduceText,
  })
);

// ARTIST saga
const checkArtistProfileSaga = createRequestSaga(
  CHECK_ARTIST_PROFILE,
  profileAPI.checkArtistProfile
);
const createArtistProfileSaga = createRequestSaga(
  CREATE_ARTIST_PROFILE,
  profileAPI.createArtistProfile
);

// HOTEL saga

export function* profileSaga() {
  yield takeLatest(CHECK_ARTIST_PROFILE, checkArtistProfileSaga);
  yield takeLatest(CREATE_ARTIST_PROFILE, createArtistProfileSaga);
}

const initialState = {
  checkArtistProfileSuccess: null,
  checkArtistProfileError: null,
  artistprofileSuccess: null,
  artistprofileError: null,

  checkHotelProfileSuccess: null,
  checkHotelProfileError: null,
  hotelprofileSuccess: null,
  hotelprofileError: null,
  hotelBackImgSuccess: null,
  hotelBackImgError: null,
  hotelProfileImgSuccess: null,
  hotelProfileImgError: null,
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
  },
  initialState
);

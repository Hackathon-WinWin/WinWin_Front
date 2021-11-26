import { createAction, handleActions } from 'redux-actions';
import { createRequestSaga } from '../lib/createRequestSaga';
import * as profileAPI from '../api/profile';
import { takeLatest } from 'redux-saga/effects';

// ARTIST action
const CREATE_ARTIST_PROFILE = 'profile/CREATE_ARTIST_PROFILE';
const CREATE_ARTIST_PROFILE_SUCCESS = 'profile/CREATE_ARTIST_PROFILE_SUCCESS';
const CREATE_ARTIST_PROFILE_FAILURE = 'profile/CREATE_ARTIST_PROFILE_FAILURE';

// HOTEL action
const CREATE_HOTEL_PROFILE = 'profile/CREATE_HOTEL_PROFILE';
const CREATE_HOTEL_PROFILE_SUCCESS = 'profile/CREATE_HOTEL_PROFILE_SUCCESS';
const CREATE_HOTEL_PROFILE_FAILURE = 'profile/CREATE_HOTEL_PROFILE_FAILURE';

// ARTIST action creator
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
const createArtistProfileSaga = createRequestSaga(
  CREATE_ARTIST_PROFILE,
  profileAPI.createArtistProfile
);

// HOTEL saga

export function* profileSaga() {
  yield takeLatest(CREATE_ARTIST_PROFILE, createArtistProfileSaga);
}

const initialState = {
  artistprofileSuccess: null,
  artistprofileError: null,

  hotelprofileSuccess: null,
  hotelprofileError: null,
};

export default handleActions(
  {
    // [CREATE_ARTIST_PROFILE_SUCCESS]: (state, { payload: success }) => ({
    //   ...state,
    //   artistprofileSuccess: success,
    //   artistprofileError: null,
    // }),
    // [CREATE_ARTIST_PROFILE_FAILURE]: (state, { payload: error }) => ({
    //   ...state,
    //   artistprofileSuccess: null,
    //   artistprofileError: error,
    // }),
  },
  initialState
);

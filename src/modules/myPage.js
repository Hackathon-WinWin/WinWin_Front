import { createAction, handleActions } from 'redux-actions';
import { createRequestSaga } from '../lib/createRequestSaga';
import * as myPageAPI from '../api/myPage';
import { takeLatest } from 'redux-saga/effects';

// ARTIST action
const UPDATE_ARTIST_BACKIMG = 'myPage/UPDATE_ARTIST_BACKIMG';
const UPDATE_ARTIST_BACKIMG_SUCCESS = 'myPage/UPDATE_ARTIST_BACKIMG_SUCCESS';
const UPDATE_ARTIST_BACKIMG_FAILURE = 'myPage/UPDATE_ARTIST_BACKIMG_FAILURE';
const UPDATE_ARTIST_PROFILEIMG = 'myPage/UPDATE_ARTIST_PROFILEIMG';
const UPDATE_ARTIST_PROFILEIMG_SUCCESS =
  'myPage/UPDATE_ARTIST_PROFILEIMG_SUCCESS';
const UPDATE_ARTIST_PROFILEIMG_FAILURE =
  'myPage/UPDATE_ARTIST_PROFILEIMG_FAILURE';
const GET_MY_ARTIST_PROFILE = 'myPage/GET_MY_ARTIST_PROFILE';
const GET_MY_ARTIST_PROFILE_SUCCESS = 'myPage/GET_MY_ARTIST_PROFILE_SUCCESS';
const GET_MY_ARTIST_PROFILE_FAILURE = 'myPage/GET_MY_ARTIST_PROFILE_FAILURE';
const GET_MY_ARTIST_PROFILEIMG = 'myPage/GET_MY_ARTIST_PROFILEIMG';
const GET_MY_ARTIST_PROFILEIMG_SUCCESS =
  'myPage/GET_MY_ARTIST_PROFILEIMG_SUCCESS';
const GET_MY_ARTIST_PROFILEIMG_FAILURE =
  'myPage/GET_MY_ARTIST_PROFILEIMG_FAILURE';
const GET_MY_ARTIST_PROFILE_BACKIMG = 'myPage/GET_MY_ARTIST_PROFILE_BACKIMG';
const GET_MY_ARTIST_PROFILE_BACKIMG_SUCCESS =
  'myPage/GET_MY_ARTIST_PROFILE_BACKIMG_SUCCESS';
const GET_MY_ARTIST_PROFILE_BACKIMG_FAILURE =
  'myPage/GET_MY_ARTIST_PROFILE_BACKIMG_FAILURE';

// HOTEL action
const UPDATE_HOTEL_PROFILEIMG = 'myPage/UPDATE_HOTEL_PROFILEIMG';
const UPDATE_HOTEL_PROFILEIMG_SUCCESS =
  'myPage/UPDATE_HOTEL_PROFILEIMG_SUCCESS';
const UPDATE_HOTEL_PROFILEIMG_FAILURE =
  'myPage/UPDATE_HOTEL_PROFILEIMG_FAILURE';
const ADD_HOTEL_IMAGE = 'myPage/ADD_HOTEL_IMAGE';
const ADD_HOTEL_IMAGE_SUCCESS = 'myPage/ADD_HOTEL_IMAGE_SUCCESS';
const ADD_HOTEL_IMAGE_FAILURE = 'myPage/ADD_HOTEL_IMAGE_FAILURE';
const GET_MY_HOTEL_PROFILE = 'myPage/GET_MY_HOTEL_PROFILE';
const GET_MY_HOTEL_PROFILE_SUCCESS = 'myPage/GET_MY_HOTEL_PROFILE_SUCCESS';
const GET_MY_HOTEL_PROFILE_FAILURE = 'myPage/GET_MY_HOTEL_PROFILE_FAILURE';
const GET_MY_HOTEL_PROFILEIMG = 'myPage/GET_MY_HOTEL_PROFILEIMG';
const GET_MY_HOTEL_PROFILEIMG_SUCCESS =
  'myPage/GET_MY_HOTEL_PROFILEIMG_SUCCESS';
const GET_MY_HOTEL_PROFILEIMG_FAILURE =
  'myPage/GET_MY_HOTEL_PROFILEIMG_FAILURE';
const INIT_PROFILEIMG = 'myPage/INIT_PROFILEIMG';

// ARTIST action creator
export const updateArtistProfileImage = createAction(
  UPDATE_ARTIST_PROFILEIMG,
  (formData) => formData
);
export const updateArtistBackgroundImage = createAction(
  UPDATE_ARTIST_BACKIMG,
  (formData) => formData
);
export const getMyAritistProfile = createAction(GET_MY_ARTIST_PROFILE);
export const getMyArtistProfileImg = createAction(GET_MY_ARTIST_PROFILEIMG);
export const getMyArtistBgImg = createAction(GET_MY_ARTIST_PROFILE_BACKIMG);
// HOTEL action creator
export const getMyHotelProfile = createAction(GET_MY_HOTEL_PROFILE);
export const getMyHotelProfileImg = createAction(GET_MY_HOTEL_PROFILEIMG);
export const updateHotelProfileImage = createAction(
  UPDATE_HOTEL_PROFILEIMG,
  (formData) => formData
);
export const addHotelImage = createAction(
  ADD_HOTEL_IMAGE,
  (formData) => formData
);
export const initProfileImg = createAction(INIT_PROFILEIMG);

// ARTIST saga
const updateArtistProfileImageSaga = createRequestSaga(
  UPDATE_ARTIST_PROFILEIMG,
  myPageAPI.updateArtistProfileImage
);
const updateArtistBackgroundImageSaga = createRequestSaga(
  UPDATE_ARTIST_BACKIMG,
  myPageAPI.updateArtistBackgroundImage
);
const getMyAritistProfileSaga = createRequestSaga(
  GET_MY_ARTIST_PROFILE,
  myPageAPI.getMyAritistProfile
);
const getMyArtistProfileImgSaga = createRequestSaga(
  GET_MY_ARTIST_PROFILEIMG,
  myPageAPI.getMyArtistProfileImg
);
const getMyArtistBgImgSaga = createRequestSaga(
  GET_MY_ARTIST_PROFILE_BACKIMG,
  myPageAPI.getMyArtistBgImg
);
// HOTEL saga
const getMyHotelProfileSaga = createRequestSaga(
  GET_MY_HOTEL_PROFILE,
  myPageAPI.getMyHotelProfile
);
const getMyHotelProfileImgSaga = createRequestSaga(
  GET_MY_HOTEL_PROFILEIMG,
  myPageAPI.getMyHotelProfileImage
);
const updateHotelProfileImageSaga = createRequestSaga(
  UPDATE_HOTEL_PROFILEIMG,
  myPageAPI.updateHotelProfileImage
);
const addHotelImageSaga = createRequestSaga(
  ADD_HOTEL_IMAGE,
  myPageAPI.addHotelImage
);
export function* myPageSaga() {
  yield takeLatest(GET_MY_ARTIST_PROFILE, getMyAritistProfileSaga);
  yield takeLatest(GET_MY_ARTIST_PROFILEIMG, getMyArtistProfileImgSaga);
  yield takeLatest(GET_MY_ARTIST_PROFILE_BACKIMG, getMyArtistBgImgSaga);
  yield takeLatest(UPDATE_ARTIST_PROFILEIMG, updateArtistProfileImageSaga);
  yield takeLatest(UPDATE_ARTIST_BACKIMG, updateArtistBackgroundImageSaga);
  yield takeLatest(GET_MY_HOTEL_PROFILE, getMyHotelProfileSaga);
  yield takeLatest(GET_MY_HOTEL_PROFILEIMG, getMyHotelProfileImgSaga);
  yield takeLatest(UPDATE_HOTEL_PROFILEIMG, updateHotelProfileImageSaga);
  yield takeLatest(ADD_HOTEL_IMAGE, addHotelImageSaga);
}
const initialState = {
  myArtist: null,
  myArtistError: null,
  artistProfileImg: null,
  artistProfileImgError: null,
  artistBackImg: null,
  artistBackImgError: null,

  myHotel: null,
  myHotelError: null,
  hotelProfileImg: null,
  hotelProfileImgError: null,
  addHotelImg: null,
  addHotelImgError: null,
};

export default handleActions(
  {
    [UPDATE_ARTIST_PROFILEIMG_SUCCESS]: (
      state,
      { payload: artistProfileImg }
    ) => ({
      ...state,
      artistProfileImg,
      artistProfileImgError: null,
    }),
    [UPDATE_ARTIST_PROFILEIMG_FAILURE]: (state, { payload: error }) => ({
      ...state,
      artistProfileImg: null,
      artistProfileImgError: error,
    }),
    [UPDATE_ARTIST_BACKIMG_SUCCESS]: (state, { payload: artistBackImg }) => ({
      ...state,
      artistBackImg,
      artistBackImgError: null,
    }),
    [UPDATE_ARTIST_BACKIMG_FAILURE]: (state, { payload: error }) => ({
      ...state,
      artistBackImg: null,
      artistBackImgError: error,
    }),
    [GET_MY_ARTIST_PROFILE_SUCCESS]: (state, { payload: myArtist }) => ({
      ...state,
      myArtist,
      myArtistError: null,
    }),
    [GET_MY_ARTIST_PROFILE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      myArtist: null,
      myArtistError: error,
    }),
    [GET_MY_ARTIST_PROFILEIMG_SUCCESS]: (
      state,
      { payload: artistProfileImg }
    ) => ({
      ...state,
      artistProfileImg,
      artistProfileImgError: null,
    }),
    [GET_MY_ARTIST_PROFILEIMG_FAILURE]: (state, { payload: error }) => ({
      ...state,
      artistProfileImg: null,
      artistProfileImgError: error,
    }),
    [GET_MY_ARTIST_PROFILE_BACKIMG_SUCCESS]: (
      state,
      { payload: artistBackImg }
    ) => ({
      ...state,
      artistBackImg,
      artistBackImgError: null,
    }),
    [GET_MY_ARTIST_PROFILE_BACKIMG_FAILURE]: (state, { payload: error }) => ({
      ...state,
      artistBackImg: null,
      artistBackImgError: error,
    }),

    // HOTEL
    [GET_MY_HOTEL_PROFILE_SUCCESS]: (state, { payload: myHotel }) => ({
      ...state,
      myHotel,
      myHotelError: null,
    }),
    [GET_MY_HOTEL_PROFILE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      myHotel: null,
      myHotelError: error,
    }),
    [GET_MY_HOTEL_PROFILEIMG_SUCCESS]: (
      state,
      { payload: hotelProfileImg }
    ) => ({
      ...state,
      hotelProfileImg,
      hotelProfileImgError: null,
    }),
    [GET_MY_HOTEL_PROFILEIMG_FAILURE]: (state, { payload: error }) => ({
      ...state,
      hotelProfileImg: null,
      hotelProfileImgError: error,
    }),
    [UPDATE_HOTEL_PROFILEIMG_SUCCESS]: (
      state,
      { payload: hotelProfileImg }
    ) => ({
      ...state,
      hotelProfileImg,
      hotelProfileImgError: null,
    }),
    [UPDATE_HOTEL_PROFILEIMG_FAILURE]: (state, { payload: error }) => ({
      ...state,
      hotelProfileImg: null,
      hotelProfileImgError: error,
    }),
    [ADD_HOTEL_IMAGE_SUCCESS]: (state, { payload: addHotelImg }) => ({
      ...state,
      addHotelImg,
      addHotelImgError: null,
    }),
    [ADD_HOTEL_IMAGE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      addHotelImg: null,
      addHotelImgError: error,
    }),
    [INIT_PROFILEIMG]: (state) => ({
      ...state,
      addHotelImg: null,
      addHotelImgError: null,
    }),
  },
  initialState
);

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
const UPDATE_HOTEL_PROFILEIMG = 'myPage/UPDATE_PROFILEIMG';
const UPDATE_HOTEL_PROFILEIMG_SUCCESS =
  'myPage/UPDATE_HOTEL_PROFILEIMG_SUCCESS';
const UPDATE_HOTEL_PROFILEIMG_FAILURE =
  'myPage/UPDATE_HOTEL_PROFILEIMG_FAILURE';
const GET_MY_HOTEL_PROFILE = 'myPage/GET_MY_HOTEL_PROFILE';
const GET_MY_HOTEL_PROFILE_SUCCESS = 'myPage/GET_MY_HOTEL_PROFILE_SUCCESS';
const GET_MY_HOTEL_PROFILE_FAILURE = 'myPage/GET_MY_HOTEL_PROFILE_FAILURE';
const GET_MY_HOTEL_PROFILEIMG = 'myPage/GET_MY_HOTEL_PROFILEIMG';
const GET_MY_HOTEL_PROFILEIMG_SUCCESS =
  'myPage/GET_MY_HOTEL_PROFILEIMG_SUCCESS';
const GET_MY_HOTEL_PROFILEIMG_FAILURE =
  'myPage/GET_MY_HOTEL_PROFILEIMG_FAILURE';

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
export function* myPageSaga() {
  yield takeLatest(GET_MY_ARTIST_PROFILE, getMyAritistProfileSaga);
  yield takeLatest(GET_MY_ARTIST_PROFILEIMG, getMyArtistProfileImgSaga);
  yield takeLatest(GET_MY_ARTIST_PROFILE_BACKIMG, getMyArtistBgImgSaga);
  yield takeLatest(UPDATE_ARTIST_PROFILEIMG, updateArtistProfileImageSaga);
  yield takeLatest(UPDATE_ARTIST_BACKIMG, updateArtistBackgroundImageSaga);
  yield takeLatest(GET_MY_HOTEL_PROFILE, getMyHotelProfileSaga);
  yield takeLatest(GET_MY_HOTEL_PROFILEIMG, getMyHotelProfileImgSaga);
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
};
// DUMMY DATA
// initialState.myArtist = {
//   _id: '619796295b2b45723b57ab85',
//   artistAuth_id: '619661cfaf39e6cec711d492',
//   nickname: 'jayjay',
//   name: '오정진',
//   birthday: '1999-11-23T00:00:00.000Z',
//   address: '서울시 노원구 공릉동',
//   phoneNumber: '01012341234',
//   email: 'ojj1123@gmail.com',
//   introduceText: '안녕하세요.',
//   hashTag: [],
//   __v: 0,
// };
// initialState.artistProfileImg = {
//   _id: '6197962a5b2b45723b57ab87',
//   artistAuth_id: '619661cfaf39e6cec711d492',
//   profileImage:
//     'https://hackathonwinwin.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png',
//   __v: 0,
// };
// initialState.artistBackImg = {
//   _id: '6197962a5b2b45723b57ab89',
//   artistAuth_id: '619661cfaf39e6cec711d492',
//   backgroundImage:
//     'https://hackathonwinwin.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png',
//   __v: 0,
// };
// initialState.myHotel = {
//   _id: '619a85a8e022247def87c54b',
//   hotelAuth_id: '619a8567e022247def87c540',
//   hotelName: '서울 호텔',
//   address: '서울시 강남구 대치동',
//   phoneNumber: '02-1234-56781',
//   email: 'ojj991123@seoulhotel.com',
//   introduceText: '안녕하세요 서울 호텔입니다.',
//   images: [],
//   __v: 0,
// };
// initialState.hotelProfileImg = {
//   _id: '619a85a8e022247def87c54d',
//   hotelAuth_id: '619a8567e022247def87c540',
//   profileImage:
//     'https://hackathonwinwin.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png',
//   __v: 0,
// };
export default handleActions(
  {
    [UPDATE_ARTIST_PROFILEIMG_SUCCESS]: (state, { payload: profileImg }) => ({
      ...state,
      artistProfileImg: profileImg,
      artistProfileImgError: null,
    }),
    [UPDATE_ARTIST_PROFILEIMG_FAILURE]: (state, { payload: error }) => ({
      ...state,
      artistProfileImg: null,
      artistProfileImgError: error,
    }),
    [UPDATE_ARTIST_BACKIMG_SUCCESS]: (state, { payload: bgImg }) => ({
      ...state,
      artistBackImg: bgImg,
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
  },
  initialState
);

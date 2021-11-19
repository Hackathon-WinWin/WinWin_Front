import { createAction, handleActions } from 'redux-actions';
import { createRequestSaga } from '../lib/createRequestSaga';
import * as myPageAPI from '../api/myPage';
import { takeLatest } from 'redux-saga/effects';

const CREATE_ARTIST_BACKIMG = 'profile/CREATE_ARTIST_BACKIMG';
const CREATE_ARTIST_BACKIMG_SUCCESS = 'profile/CREATE_ARTIST_BACKIMG_SUCCESS';
const CREATE_ARTIST_BACKIMG_FAILURE = 'profile/CREATE_ARTIST_BACKIMG_FAILURE';
const CREATE_ARTIST_PROFILEIMG = 'profile/CREATE_ARTIST_PROFILEIMG';
const CREATE_ARTIST_PROFILEIMG_SUCCESS =
  'profile/CREATE_ARTIST_PROFILEIMG_SUCCESS';
const CREATE_ARTIST_PROFILEIMG_FAILURE =
  'profile/CREATE_ARTIST_PROFILEIMG_FAILURE';
const GET_MY_ARTIST_PROFILE = 'profile/GET_MY_ARTIST_PROFILE';
const GET_MY_ARTIST_PROFILE_SUCCESS = 'profile/GET_MY_ARTIST_PROFILE_SUCCESS';
const GET_MY_ARTIST_PROFILE_FAILURE = 'profile/GET_MY_ARTIST_PROFILE_FAILURE';
const GET_MY_ARTIST_PROFILEIMG = 'profile/GET_MY_ARTIST_PROFILEIMG';
const GET_MY_ARTIST_PROFILEIMG_SUCCESS =
  'profile/GET_MY_ARTIST_PROFILEIMG_SUCCESS';
const GET_MY_ARTIST_PROFILEIMG_FAILURE =
  'profile/GET_MY_ARTIST_PROFILEIMG_FAILURE';
const GET_MY_ARTIST_PROFILE_BACKIMG = 'profile/GET_MY_ARTIST_PROFILE_BACKIMG';
const GET_MY_ARTIST_PROFILE_BACKIMG_SUCCESS =
  'profile/GET_MY_ARTIST_PROFILE_BACKIMG_SUCCESS';
const GET_MY_ARTIST_PROFILE_BACKIMG_FAILURE =
  'profile/GET_MY_ARTIST_PROFILE_BACKIMG_FAILURE';

export const createArtistProfileImage = createAction(
  CREATE_ARTIST_PROFILEIMG,
  (formData) => formData
);
export const createArtistBackgroundImage = createAction(
  CREATE_ARTIST_BACKIMG,
  (formData) => formData
);
export const getMyAritistProfile = createAction(GET_MY_ARTIST_PROFILE);
export const getMyArtistProfileImg = createAction(GET_MY_ARTIST_PROFILEIMG);
export const getMyArtistBgImg = createAction(GET_MY_ARTIST_PROFILE_BACKIMG);

const createArtistProfileImageSaga = createRequestSaga(
  CREATE_ARTIST_PROFILEIMG,
  myPageAPI.createArtistProfileImage
);
const createArtistBackgroundImageSaga = createRequestSaga(
  CREATE_ARTIST_BACKIMG,
  myPageAPI.createArtistBackgroundImage
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

export function* myPageSaga() {
  yield takeLatest(GET_MY_ARTIST_PROFILE, getMyAritistProfileSaga);
  yield takeLatest(GET_MY_ARTIST_PROFILEIMG, getMyArtistProfileImgSaga);
  yield takeLatest(GET_MY_ARTIST_PROFILE_BACKIMG, getMyArtistBgImgSaga);
  yield takeLatest(CREATE_ARTIST_PROFILEIMG, createArtistProfileImageSaga);
  yield takeLatest(CREATE_ARTIST_BACKIMG, createArtistBackgroundImageSaga);
}
const initialState = {
  myArtist: null,
  myArtistError: null,
  artistProfileImg: null,
  artistProfileImgError: null,
  artistBackImg: null,
  artistBackImgError: null,
};
initialState.myArtist = {
  _id: '619796295b2b45723b57ab85',
  artistAuth_id: '619661cfaf39e6cec711d492',
  nickname: 'jayjay',
  name: '오정진',
  birthday: '1999-11-23T00:00:00.000Z',
  address: '서울시 노원구 공릉동',
  phoneNumber: '01012341234',
  email: 'ojj1123@gmail.com',
  introduceText: '안녕하세요.',
  hashTag: [],
  __v: 0,
};
initialState.artistProfileImg = {
  _id: '6197962a5b2b45723b57ab87',
  artistAuth_id: '619661cfaf39e6cec711d492',
  profileImage:
    'https://hackathonwinwin.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png',
  __v: 0,
};
initialState.artistBackImg = {
  _id: '6197962a5b2b45723b57ab89',
  artistAuth_id: '619661cfaf39e6cec711d492',
  backgroundImage:
    'https://hackathonwinwin.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png',
  __v: 0,
};
export default handleActions(
  {
    [CREATE_ARTIST_PROFILEIMG_SUCCESS]: (state, { payload: profileImg }) => ({
      ...state,
      artistProfileImg: profileImg,
    }),
    [CREATE_ARTIST_PROFILEIMG_FAILURE]: (state, { payload: error }) => ({
      ...state,
      artistProfileImgError: error,
    }),
    [CREATE_ARTIST_BACKIMG_SUCCESS]: (state, { payload: bgImg }) => ({
      ...state,
      artistBackImg: bgImg,
    }),
    [CREATE_ARTIST_BACKIMG_FAILURE]: (state, { payload: error }) => ({
      ...state,
      artistBackImgError: error,
    }),
    [GET_MY_ARTIST_PROFILE_SUCCESS]: (state, { payload: myArtist }) => ({
      ...state,
      myArtist,
    }),
    [GET_MY_ARTIST_PROFILE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      myArtistError: error,
    }),
  },
  initialState
);

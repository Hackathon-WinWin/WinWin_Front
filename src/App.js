import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import firebase from 'firebase';
import { checkLoggedIn } from './modules/auth';
import HotelSignupPage from './pages/hotel/HotelSignupPage';
import BusinessCertificationPage from './pages/hotel/BusinessCertificationPage';
import ArtistSignupPage from './pages/artist/ArtistSignupPage';
import PhoneCertificationPage from './pages/artist/PhoneCertificationPage';
import ArtistProfilePage from './pages/artist/ArtistProfilePage';
import HotelProfilePage from './pages/hotel/HotelProfilePage';
import EntryPage from './pages/common/EntryPage';
import Signup from './components/common/Signup';
import ArtistMyPage from './pages/artist/mypage/ArtistMyPage';
import EditArtistProfilePage from './pages/artist/mypage/EditArtistProfilePage';
import HotelMyPage from './pages/hotel/mypage/HotelMyPage';
import ArtistMainPage from './pages/artist/ArtistMainPage';
import HotelMainPage from './pages/hotel/HotelMainPage';
import RecruitmentPage from './pages/hotel/RecruitmentPage';
import AddRecruitPage from './pages/hotel/AddRecruitPage';
import SpecificPortfolioPage from './pages/hotel/SpecificPortfolioPage';
import ProposeFormPage from './pages/hotel/ProposeFormPage';
import SpecificRecruitmentPage from './pages/artist/SpecificRecruitmentPage';
import ApplyFormPage from './pages/artist/ApplyFormPage';
import OtherArtistProfilePage from './pages/hotel/OtherArtistProfilePage';
import OtherHotelProfilePage from './pages/artist/OtherHotelProfilePage';
import MySpecificPortfolioPage from './pages/artist/mypage/MySpecificPortfolioPage';
import ArtistStatusPage from './pages/artist/ArtistStatusPage';
import HotelStatusPage from './pages/hotel/HotelStatusPage';
import CommunityPage from './pages/artist/CommunityPage';

axios.defaults.withCredentials = true;

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  body {
    word-break : keep-all;
    font-family: 'Noto Sans KR', sans-serif; // 한글 폰트
  }
  input:focus {
    outline: none;
  }
  textarea:focus {
    outline: none;
  }
`;
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_API_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

Notification.requestPermission()
  .then(function () {
    console.log('허가!');
    return messaging.getToken();
  })
  .then(function (token) {
    localStorage.setItem('firebase_token', token);
  })
  .catch(function (err) {
    console.log('fcm에러 : ', err);
  });

messaging.onMessage(function (payload) {
  console.log(payload.notification.title);
  console.log(payload.notification.body);
});
const App = () => {
  const { check } = useSelector(({ auth }) => ({
    check: auth.check,
  }));
  const [firebaseToken, setFirebaseToken] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const getFirebaseToken = () => {
      try {
        const token = localStorage.getItem('firebase_token');
        setFirebaseToken(token);
      } catch (e) {}
    };
    getFirebaseToken();
  }, []);

  useEffect(() => {
    if (firebaseToken) {
      dispatch(checkLoggedIn(firebaseToken));
    }
  }, [dispatch, firebaseToken]);
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<EntryPage />} />
        <Route path='/checkArtistPhone' element={<PhoneCertificationPage />} />
        <Route path='/checkBusiness' element={<BusinessCertificationPage />} />
        <Route path='/signupArtist' element={<ArtistSignupPage />} />
        <Route path='/signupHotel' element={<HotelSignupPage />} />
        <Route path='/createArtistProfile' element={<ArtistProfilePage />} />
        <Route path='/createHotelProfile' element={<HotelProfilePage />} />
        <Route
          path='/main'
          element={
            check && check.isArtist ? <ArtistMainPage /> : <HotelMainPage />
          }
        />
        <Route path='/applyStatus/*' element={<ArtistStatusPage />} />
        <Route path='/recruitStatus/*' element={<HotelStatusPage />} />

        <Route path='/artistMyPage' element={<ArtistMyPage />} />
        <Route path='/hotelMyPage' element={<HotelMyPage />} />

        <Route path='/editProfile' element={<EditArtistProfilePage />} />
        <Route path='/recruit' element={<RecruitmentPage />} />
        <Route path='/createRecruit' element={<AddRecruitPage />} />
        <Route
          path='/otherArtistProfile/:artistAuth_id'
          element={<OtherArtistProfilePage />}
        />
        <Route
          path='/specificPortfolio/:artistAuth_id/:portfolio_id'
          element={<SpecificPortfolioPage />}
        />
        <Route
          path='/mySpecificPortfolio/:artistAuth_id/:portfolio_id'
          element={<MySpecificPortfolioPage />}
        />
        <Route path='/propose/:artistAuth_id' element={<ProposeFormPage />} />
        <Route
          path='/otherHotelProfile/:hotelAuth_id'
          element={<OtherHotelProfilePage />}
        />
        <Route
          path='/specificRecruit/:hotelAuth_id/:recruitment_id'
          element={<SpecificRecruitmentPage />}
        />
        <Route
          path='/apply/:hotelAuth_id/:recruitment_id'
          element={<ApplyFormPage />}
        />
        <Route path='/community' element={<CommunityPage />} />
        <Route path='*' element={<div>Not Found.</div>} />
      </Routes>
    </>
  );
};

export default App;

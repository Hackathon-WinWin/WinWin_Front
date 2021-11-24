import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HotelSignupPage from './pages/hotel/HotelSignupPage';
import BusinessCertificationPage from './pages/hotel/BusinessCertificationPage';
import { useDispatch, useSelector } from 'react-redux';
import ArtistSignupPage from './pages/artist/ArtistSignupPage';
import PhoneCertificationPage from './pages/artist/PhoneCertificationPage';
import ArtistProfilePage from './pages/artist/ArtistProfilePage';
import HotelProfilePage from './pages/hotel/HotelProfilePage';
import EntryPage from './pages/common/EntryPage';
import Signup from './components/common/Signup';
import ArtistMyPage from './pages/artist/mypage/ArtistMyPage';
import { createGlobalStyle } from 'styled-components';
import EditArtistProfilePage from './pages/artist/mypage/EditArtistProfilePage';
import { useEffect } from 'react';
import { checkLoggedIn } from './modules/auth';
import HotelMyPage from './pages/hotel/mypage/HotelMyPage';
import axios from 'axios';
import ArtistMainPage from './pages/artist/ArtistMainPage';
import HotelMainPage from './pages/hotel/HotelMainPage';
import RecruitmentPage from './pages/hotel/RecruitmentPage';
import AddRecruitPage from './pages/hotel/AddRecruitPage';
import SpecificPortfolioPage from './pages/hotel/SpecificPortfolioPage';
import OtherProfilePage from './pages/hotel/OtherProfilePage';
import ProposeFormPage from './pages/hotel/ProposeFormPage';
import firebase from 'firebase';
import { useState } from 'react';

// axios.defaults.baseURL = 'http://3.12.248.32:8000';
axios.defaults.withCredentials = true;

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  body {
    word-break : keep-all
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
  }, [dispatch]);

  useEffect(() => {
    if (firebaseToken) {
      console.log(firebaseToken);
      // dispatch(checkLoggedIn(firebaseToken));
    }
  }, [dispatch, firebaseToken]);

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<EntryPage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/checkArtistPhone' element={<PhoneCertificationPage />} />
        <Route path='/checkBusiness' element={<BusinessCertificationPage />} />
        <Route path='/singupArtist' element={<ArtistSignupPage />} />
        <Route path='/signupHotel' element={<HotelSignupPage />} />
        <Route path='/createArtistProfile' element={<ArtistProfilePage />} />
        <Route path='/createHotelProfile' element={<HotelProfilePage />} />
        <Route
          path='/myPage'
          element={check && check.isArtist ? <ArtistMyPage /> : <HotelMyPage />}
        />
        <Route path='/editProfile' element={<EditArtistProfilePage />} />
        <Route
          path='/main'
          element={
            check && check.isArtist ? <ArtistMainPage /> : <HotelMainPage />
          }
        />
        <Route path='/recruit' element={<RecruitmentPage />} />
        <Route path='/createRecruit' element={<AddRecruitPage />} />
        <Route
          path='/otherProfile/:artistAuth_id'
          element={<OtherProfilePage />}
        />
        <Route
          path='/specificPortfolio/:artistAuth_id/:portfolio_id'
          element={<SpecificPortfolioPage />}
        />
        <Route path='/propose/:artistAuth_id' element={<ProposeFormPage />} />
        <Route path='*' element={<div>Not Found.</div>} />
      </Routes>
    </>
  );
};

export default App;

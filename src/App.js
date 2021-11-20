import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import HotelSignupPage from './pages/hotel/HotelSignupPage';
import BusinessCertificationPage from './pages/hotel/BusinessCertificationPage';
import { useDispatch, useSelector } from 'react-redux';
import ArtistSignupPage from './pages/artist/ArtistSignupPage';
import PhoneCertificationPage from './pages/artist/PhoneCertificationPage';
import ArtistProfilePage from './pages/artist/ArtistProfilePage';
import HotelProfilePage from './pages/hotel/HotelProfilePage';
import EntryPage from './pages/common/EntryPage';
import Signup from './components/common/Signup';
import RequireAuth from './routes/RequireAuth';
import RequireProfile from './routes/RequireProfile';
import ArtistMyPage from './pages/artist/mypage/ArtistMyPage';
import { createGlobalStyle } from 'styled-components';
import EditArtistProfilePage from './pages/artist/mypage/EditArtistProfilePage';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  body {
    word-break : keep-all
  }
`;
const check = { isArtist: true };
const App = () => {
  // const { check } = useSelector(({ auth, profile }) => ({
  //   check: auth.check,
  // }));
  // const dispatch = useDispatch();

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
          element={
            check.isArtist ? <ArtistMyPage /> : <div>호텔 마이페이지</div>
          }
        />
        <Route
          path='editProfile'
          element={check.isArtist ? <EditArtistProfilePage /> : <>호텔 수정</>}
        />
        <Route
          path='/main'
          element={
            <RequireAuth>
              <RequireProfile isArtist={check.isArtist}>
                <MainPage />
              </RequireProfile>
            </RequireAuth>
          }
        />
        <Route path='*' element={<div>Not Found.</div>} />
      </Routes>
    </>
  );
};

export default App;

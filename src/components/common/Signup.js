import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Signup = () => {
    return (
        <Container>
            <Title>회원타입 선택</Title>
            <Subtitle>원하시는 회원타입을 선택하세요.</Subtitle>
            <Hotel>
                <Links to="../checkBusiness">호텔</Links>
            </Hotel>
            <Artist>
                <Links to="../checkArtistPhone">아티스트</Links>
            </Artist>
        </Container>
    );
};
const Container = styled.div`
    height: 844px;
    width: 390px;
    background-color: #ffffff;
    text-align: center;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 100;
`;

const Title = styled.p`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 80px;
    left: 20px;
    width: 184px;
    height: 28px;
    color: #000000;
    font-size: 32px;
    font-weight: 700;
`;

const Subtitle = styled.p`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 118px;
    left: 20px;
    width: 164px;
    height: 28px;
    color: #000000;
    font-size: 12px;
    font-weight: 400;
`;

const Hotel = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 311px;
    left: 28px;
    width: 154px;
    height: 145px;
    background-color: #181818;
    font-size: 20px;
    font-weight: 700;
    border-radius: 14px;
`;

const Artist = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 311px;
    left: 208px;
    width: 154px;
    height: 145px;
    background-color: #181818;
    font-size: 20px;
    font-weight: 700;
    border-radius: 14px;
`;

const Links = styled(Link)`
    text-decoration: none;
    color: #ffffff;
`;

export default Signup;

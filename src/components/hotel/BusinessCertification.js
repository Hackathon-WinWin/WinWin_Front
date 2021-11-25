import React from "react";
import styled from "styled-components";

const BusinessCertification = ({ form, onChange, onSubmit }) => {
    return (
        <Container>
            <Title>사업자 인증</Title>
            <Subtitle>호텔용 회원가입을 위해 사업자 인증이 필요해요.</Subtitle>
            <form onSubmit={onSubmit}>
                <P1>사업자 등록 번호</P1>
                <Input1
                    name="businessNumber"
                    value={form.businessNumber}
                    onChange={onChange}
                    placeholder="0000000000000"
                />
                <P2>대표자 성명</P2>
                <Input2
                    name="hostName"
                    value={form.hostName}
                    onChange={onChange}
                    placeholder="외국인 사업자의 경우, 영문명 입력"
                />
                <P3>개업일자</P3>
                <Input3
                    name="openDate"
                    value={form.openDate}
                    onChange={onChange}
                    placeholder="YYYYMMDD"
                />
                <Button1>인증 요청</Button1>
                <Button2>다음</Button2>
            </form>
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
    width: 155px;
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
    width: 238px;
    height: 28px;
    color: #000000;
    font-size: 12px;
    font-weight: 400;
`;

const P1 = styled.p`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 238px;
    left: 20px;
    width: 101px;
    height: 16px;
    color: #000000;
    font-size: 14px;
    font-weight: 500;
`;

const P2 = styled.p`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 358px;
    left: 20px;
    width: 71px;
    height: 16px;
    color: #000000;
    font-size: 14px;
    font-weight: 500;
`;

const P3 = styled.p`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 479px;
    left: 20px;
    width: 54px;
    height: 16px;
    color: #000000;
    font-size: 14px;
    font-weight: 500;
`;

const Input1 = styled.input`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 259px;
    left: 20px;
    width: 350px;
    height: 50px;
    color: #000000;
    background-color: #ffffff;
    border: none;
    border-bottom: 1px solid black;
    font-size: 16px;
    font-weight: 500;
`;

const Input2 = styled.input`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 380px;
    left: 20px;
    width: 350px;
    height: 50px;
    color: #000000;
    background-color: #ffffff;
    border: none;
    border-bottom: 1px solid black;
    font-size: 16px;
    font-weight: 500;
`;

const Input3 = styled.input`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 501px;
    left: 20px;
    width: 350px;
    height: 50px;
    color: #000000;
    background-color: #ffffff;
    border: none;
    border-bottom: 1px solid black;
    font-size: 16px;
    font-weight: 500;
`;

const Button1 = styled.button`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 569px;
    left: 20px;
    width: 350px;
    height: 48px;
    border: none;
    border-radius: 4px;
    background-color: #181818;
    color: #ffffff;
    font-size: 12px;
    font-weight: 500;
`;

const Button2 = styled.button`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 769px;
    width: 390px;
    height: 75px;
    border: none;
    background-color: #c1c1c1;
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
`;

export default BusinessCertification;

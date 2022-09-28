import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { useEffect, useState } from 'react';

//커밋테스트

const Background = styled.div`
  width: 100%;
  height: auto;

  margin-top: 80px;
  display: flex;
  justify-content: center;
  border: 1px solid red;
`;

const ContentsBox = styled.div`
  width: 500px;
  height: 500px;
  padding-top: 40px;
  padding-left: 30px;
  border: 1px solid blue;
`;

const InputBox = styled.input`
  width: 300px;
  height: 25px;
  padding: 4.5px;
  border-radius: 3px;
  border: none;
  outline: 1px solid hsl(210, 8%, 75%);
`;
const LoginButton = styled.button`
  width: 300px;
  height: 30px;
  margin-bottom: 10px;
`;

const LoginPage = () => {
  const [Email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleChecked = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
      <Header />
      <Background>
        <ContentsBox>
          <h1>로그인</h1>
          <h4>호박공구마 서비스를 이용하기 위해 로그인해주세요.</h4>
          <p>아이디</p>
          <InputBox placeholder="이메일주소 입력"></InputBox>
          <p>비밀번호</p>
          <InputBox placeholder="비밀번호 입력"></InputBox>
          <div>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleChecked}
            ></input>
            아이디저장
            <p>회원가입 비밀번호 재설정</p>
          </div>
          <LoginButton>로그인</LoginButton>
          <LoginButton>카카오톡 로그인</LoginButton>
        </ContentsBox>
      </Background>
    </>
  );
};

export default LoginPage;

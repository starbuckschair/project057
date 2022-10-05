import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

let PaddingBox = styled.div`
    height: 60px;
`
const Background = styled.div`
  width: 100%;
  height: auto;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  border: 1px solid red;
`;

const ContentsBox = styled.div`
  width: 500px;
  height: 500px;
  padding: 15px;
  border-radius: 3px;
  border: none;
  outline: 1px solid hsl(210, 8%, 75%);
  > h2 {
    margin-top: 0;
  }
`;

const InputBox = styled.input`
  width: 300px;
  height: 25px;
  padding: 4.5px;
  border-radius: 3px;
  border: none;
  outline: 1px solid hsl(210, 8%, 75%);
`;
const CheckZone = styled.div`
  width: 300px;
  height: 50px;
  padding: 4.5px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    margin-right: 10px;
  }
`;
const ButtonZone = styled(CheckZone)`
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const LoginButton = styled.button`
  width: 300px;
  height: 30px;
  margin-bottom: 10px;
`;

function LoginPage() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleChecked = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
      <Header />
      <PaddingBox/>
      <Background>
        <ContentsBox>
          <h2>로그인</h2>
          <h4>호박공구마 서비스를 이용하기 위해 로그인해주세요.</h4>
          <p>아이디</p>
          <InputBox placeholder="이메일주소 입력"></InputBox>
          <p>비밀번호</p>
          <InputBox placeholder="비밀번호 입력"></InputBox>
          <CheckZone>
            <div>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleChecked}
            ></input>
            <p>아이디저장</p>
            </div>
            <div>
              <p>회원가입</p>
              <p>비밀번호재설정</p>
            </div>
          </CheckZone>
          <ButtonZone>
            <LoginButton>로그인</LoginButton>
            <LoginButton>카카오톡 로그인</LoginButton>
          </ButtonZone>
        </ContentsBox>
      </Background>
    </>
  );
}

export default LoginPage;

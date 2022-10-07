import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

let PaddingBox = styled.div`
    height: 60px;
`
const Background = styled.div`
  width: 100%;
  height: auto;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  /* border: 1px solid red; */
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


function LoginPage({setIsLogin, setUserInfo}) {
  // const [Email, setEmail] = useState('');
  // const [Password, setPassword] = useState('');
  const navigate = useNavigate();
  const[loginInfo, setLoginInfo] = useState({
    userId: '',
    password: '',
  });
  const [checkedKeepLogin, setCheckedKeepLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const SignIn =() => {
    navigate('/')
  }
  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };
  const loginRequestHandler = () => {
    // Login 컴포넌트가 가지고 있는 state를 이용해 로그인을 구현합니다.
    // 로그인에 필요한 유저정보가 충분히 제공되지 않았다면 에러메시지가 나타남  
  console.log(loginInfo)

    if(!loginInfo.userId|| !loginInfo.password){
      setErrorMessage('아이디와 비밀번호를 입력하세요')
      return;
    } else {
      setErrorMessage("")
    }
    return axios
<<<<<<< HEAD
      .post("http://192.168.5.46:8080/v1/members/login",
      {loginInfo, checkedKeepLogin})
=======
      .post("http://192.168.4.223:8080/v1/members/login",{loginInfo, checkedKeepLogin})
>>>>>>> ff7a30d81f798f617739e545fb0af3effdef27a9
      .then((res) => {
        // 로그인에 성공했다면 응답으로 받은 데이터가 Mypage에 렌더링되도록 State를 변경하세요.
        console.log(res.data)
        // setUserInfo(res.data)
        // setIsLogin(true)
        SignIn('/')
        // localStorage.setItem('user', JSON.stringify(user));
      })
      .catch((err) => {
        console.log(err.response.data)
        setErrorMessage("로그인에 실패했습니다.")
        // 로그인에 실패했다면 그에 대한 에러 핸들링을 구현하세요. 
      });
      
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
          <InputBox type="text" placeholder="이메일주소 입력" onChange={handleInputValue('userId')}></InputBox>
          <p>비밀번호</p>
          <InputBox type="password" placeholder="비밀번호 입력" onChange={handleInputValue('password')}></InputBox>
          <CheckZone>
            <div>
            <input
              type="checkbox"
              onChange={()=>setCheckedKeepLogin(!checkedKeepLogin)} />
            <p>아이디저장</p>
            </div>
            <div>
              <p>회원가입</p>
              <p>비밀번호재설정</p>
            </div>
          </CheckZone>
          <ButtonZone>
            <LoginButton type="submit" onClick={loginRequestHandler}>
              로그인
            </LoginButton>
              {errorMessage ? (
            <div id='alert-message' data-testid='alert-message'>
              {errorMessage}
            </div>
          ) : (
            ''
          )}
            <LoginButton>카카오톡 로그인</LoginButton>
          </ButtonZone>
        </ContentsBox>
      </Background>
    </>
  );
}

export default LoginPage;

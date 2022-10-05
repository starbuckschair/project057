import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import * as Yup from 'yup';

let PaddingBox = styled.div`
  height: 60px;
`;
const Background = styled.div`
  width: 100%;
  height: auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`;
const FormBox = styled.div`
  width: 500px;
  height: 500px;
  padding-top: 40px;
  padding-left: 15px;
  border-radius: 3px;
  border: none;
  border: 1px solid hsl(210, 8%, 75%);
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  > h1 {
    margin-top: 0;
  }
  > div {
    display: flex;
    justify-content: center;
  }
`;
const FormPosition = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const FormTitle = styled.div`
  width: 15%;
  height: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const InputBox = styled.input`
  width: 300px;
  height: 25px;
  padding: 4.5px;
  border-radius: 3px;
  border: none;
  outline: 1px solid hsl(210, 8%, 75%);
`;
const JoinButton = styled.button`
  width: 300px;
  height: 30px;
  padding: 4.5px;
  border-radius: 3px;
  border: none;
  outline: 1px solid hsl(210, 8%, 75%);
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function RegisterInfo() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [phone, setPhone] = useState('');
  const [payment, setPayment] = useState('');
  const navigate = useNavigate();

  //   const handleClick = (event) => {
  //     // event.preventDefault();
  //     // setUserName(event.target.username)
  //     console.log(event.target);
  //   };

  const onSubmit = (e) => {
    e.preventDefault();
    setUserName(e.target.username.value);
    setEmail(e.target.email.value);
    setPw(e.target.pw.value);
    setPhone(e.target.phone.value);
    setPayment(e.target.payment.value);

    fetch('http://localhost:4000/members', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'username',
        email: 'email',
        password: 'pw',
        phoneNumber: 'phoneNumber',
        payment: 'payment',
      }),
    }).then((res) => console.log(res.json()));
    SignUp();
  };
  const SignUp = () => {
    navigate('/');
  };

  return (
    <>
      <Header />
      <PaddingBox />
      <Background>
        <form onSubmit={onSubmit}>
          <FormBox>
            <h1>RegisterInfo</h1>
            <FormPosition>
              <FormTitle>이름</FormTitle>
              <InputBox
                type="text"
                name="username"
                placeholder="name"
              ></InputBox>
            </FormPosition>
            <FormPosition>
              <FormTitle>이메일</FormTitle>
              <InputBox type="text" name="email" placeholder="email"></InputBox>
            </FormPosition>
            <FormPosition>
              <FormTitle>비밀번호</FormTitle>
              <InputBox
                type="password"
                name="pw"
                placeholder="password"
              ></InputBox>
            </FormPosition>
            <FormPosition>
              <FormTitle>연락처</FormTitle>
              <InputBox type="tel" name="phone" placeholder="phone"></InputBox>
            </FormPosition>
            <FormPosition>
              <FormTitle>결제수단</FormTitle>
              <InputBox
                type="text"
                name="payment"
                placeholder="payment"
              ></InputBox>
            </FormPosition>
            <div>
              {/* <JoinButton type="submit" onClick={handleClick}>
                가입하기
              </JoinButton> */}
              <input type="submit" />
            </div>
          </FormBox>
        </form>
      </Background>
    </>
  );
}

export default RegisterInfo;

import React from "react";
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import styled from 'styled-components';

let Box = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
    border-bottom: 2px solid grey;
    position: fixed;
    z-index: 100;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

let LogoBox = styled.div`
    width: 100px;
    height: 45px;
    margin: 1px;
    font-weight: 500;
    font-size: large;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
    border-radius: 10px;
    &:hover {
      color: red;
      cursor: pointer;
    }
`;
let LoginBox = styled.div`
    width: 300px;
    height: 50px;
    /* border: 1px solid black; */
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      color: red;
      cursor: pointer;
    }
`;
let Button = styled.button`//로그인/회원가입버튼
    width: 120px;
    height: 30px;
  color: black;
  background-color: white;
  font-size: 12px;
  font-weight: 500;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 10px;
  /* border: 2px solid palevioletred; */
  &:hover {
      color: red;
      cursor: pointer;
    }
`;
const OpenButton = styled(Button)`//방만들기버튼
    font-weight: 700;
`

function Header(){
    let navigate = useNavigate();
    return(
        <Box>
            <LogoBox onClick={()=>{navigate('/')}}>호박공구마</LogoBox> 
            <LoginBox>
                <OpenButton onClick={()=>{navigate('/write')}}>방만들기</OpenButton>
                <Button onClick={()=>{navigate('/login')}}>로그인</Button>
                <Button onClick={()=>{navigate('/register')}}>회원가입</Button>
            </LoginBox>
        </Box>
        
        ) 
  
};

export default Header;
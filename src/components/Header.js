import React from "react";
import styled from 'styled-components';

let Box = styled.div`
    width: auto;
    height: 50px;
    /* color : grey; */
    border-bottom: 2px solid grey;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

let LogoBox = styled.div`
    width: 100px;
    height: 50px;
    font-weight: 500;
    font-size: large;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
`

let LoginBox = styled.div`
    width: 300px;
    height: 50px;
    /* border: 1px solid black; */
    display: flex;
    justify-content: center;
    align-items: center;
`
const Button = styled.button`
    width: 120px;
    height: 30px;
  color: black;
  background-color: white;
  font-size: 10px;
  font-weight: 500;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  /* border: 2px solid palevioletred; */
`;

const OpenButton = styled(Button)`
    font-weight: 700;

`

function Header(){
    return(
            <Box>
                <LogoBox>호박공구마</LogoBox> 
                <LoginBox>
                    <OpenButton>방만들기</OpenButton>
                    <Button>로그인</Button>
                    <Button>회원가입</Button>
                </LoginBox>
            </Box>
        ) 
  
};

export default Header;
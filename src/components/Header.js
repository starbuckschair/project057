import React from "react";
import styled from 'styled-components';

let Box = styled.div`
    width: auto;
    height: 50px;
    color : grey;
    border: 1px solid grey;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

let Img = styled.img`
    width: 400px;
    height: 50px;
`

let LoginBox = styled.div`
    width: 300px;
    height: 50px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Button = styled.button`
    width: 120px;
    height: 30px;
  color: palevioletred;
  font-size: 10px;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const OpenButton = styled(Button)`
    border: 2px solid blue;
    color: blue;

`

function Header(){
    return(
            <Box>
                <Img src={process.env.PUBLIC_URL + '/pumkinlogo.png'} /> 
                <LoginBox>
                    <OpenButton>방만들기</OpenButton>
                    <Button>로그인</Button>
                    <Button>회원가입</Button>
                </LoginBox>
            </Box>
        ) 
  
};

export default Header;
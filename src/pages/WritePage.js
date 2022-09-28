import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  height: auto;

  margin-top: 80px;
  display: flex;
  justify-content: center;
  border: 1px solid red;
`;
const AddressBox = styled.div`
  border: 1px solid blue;
  width: 500px;
  height: 500px;


`;

const WritePage = () => {
  return (
    <>
      <Header />
      <Background>
        <AddressBox>
          <div>배송지 선택</div>
          
        </AddressBox>
      </Background>
    </>
  );
};

export default WritePage;

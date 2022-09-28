import React, { useState } from 'react';
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
const ContentsArea = styled.div`
  border: 1px solid yellow;
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const AddressBox = styled.div`
  border: 1px solid blue;
  width: 500px;
  height: 300px;
`;
const InputBox = styled.input`
  width: 450px;
  height: 25px;
  padding: 4.5px;
  border-radius: 3px;
  border: none;
  outline: 1px solid hsl(210, 8%, 75%);
`;
const LimitInput = styled.input`
  width: 150px;
  height: 18px;
  padding: 4.5px;
  border-radius: 3px;
  border: none;
  outline: 1px solid hsl(210, 8%, 75%);
`;
const TextareaBox = styled.textarea`
  width: 450px;
  height: 100px;
  padding: 4px;
  border-radius: 3px;
  resize: none;
  border: none;
  outline: 1px solid hsl(210, 8%, 75%);
`;

const WritePage = () => {
  let [] = useState();
  return (
    <>
      <Header />
      <Background>
        <ContentsArea>
          <AddressBox>
            <h1>배송지 선택</h1>
            <div>김제주</div>
            <p>제주특별자치도 제주시 한라산 백록담, 101동 </p>
            <p>010-0707-8282</p>
            <p>문 앞</p>
            <div>
              <button>수정</button>
              <button>선택</button>
            </div>
          </AddressBox>
          <button>+배송지추가</button>
          <div>
            <span>URL</span>
            <InputBox placeholder="배달어플에서 주문희망 상품페이지 url을 복사붙여넣기 하세요"></InputBox>
          </div>
          <div>
            <span>참여하기</span>
            <LimitInput
              type="number"
              name="number"
              step="1" min="1"
              max="5"
            ></LimitInput>
            <span>참가희망 인원을 입력해주세요. 최대 3명</span>
          </div>
          <div>
            <span>마감시간</span>
            <LimitInput type="number" name="number" step="30"></LimitInput>
            <span>30분 단위로 설정할 수 있습니다. 최대 2시간</span>
          </div>
          <div>
            <span>추가사항</span>
            <TextareaBox placeholder="참여자에게 전달사항을 입력해주세요."></TextareaBox>
          </div>
          <button>글쓰기</button>
        </ContentsArea>
      </Background>
    </>
  );
};

export default WritePage;

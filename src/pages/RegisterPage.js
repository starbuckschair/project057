import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';

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
  > button {
    width: 500px;
    height: 50px;
  }
`;
const FormBox = styled.div`
  width: 500px;
  height: 500px;
  padding: 40px 30px;
  border-radius: 3px;
  border: none;
  border: 1px solid hsl(210, 8%, 75%);
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  > h1 {
    border-bottom: 1px solid hsl(210, 8%, 75%);
    padding-left: 10px;
    padding-bottom: 5px;
    width: 430px;
  }
  > div {
    margin-left: 10px;
  }
`;
const FormBoxChild = styled.div`
  width: 90%;
  height: 20px;
  display: flex;
  justify-content: space-between;
`;
const AllCheck = styled.div`
  margin-bottom: 15px;
  margin-top: 15px;
`;
const CheckZone = styled.div`
  width: 15%;
  height: 20px;
  /* border: 1px solid blue; */
  display: flex;
  justify-content: center;
`;
const TextZone = styled.div`
  width: 85%;
  height: 20px;
`;

const SubmitButton = styled.button`
  width: 300px;
  height: 30px;
  padding: 4.5px;
  border-radius: 3px;
  border: none;
  outline: 1px solid hsl(210, 8%, 75%);
  margin-top: 20px;
`;

const RegisterPage = () => {
  const CheckData = [
    { id: 0, title: '[필수] 만 14세 이상입니다.' },
    { id: 1, title: '[필수] 만 14세 이상입니다.' },
    { id: 2, title: '[필수] 만 14세 이상입니다.' },
    { id: 3, title: '[선택] 마케팅 정보 수신에 대한 동의' },
  ];
  const [checkItems, setCheckItems] = useState([]);
  const navigate = useNavigate();

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems((prev) => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked) => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = [];
      CheckData.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  };
  return (
    <>
      <Header />
      <PaddingBox />
      <Background>
        <FormBox>
          <h1>회원가입</h1>
          <div>환영합니다! 호박공구마 서비스 이용약관에 동의해주세요.</div>
          <AllCheck>
            <FormBoxChild>
              <CheckZone>
                <input
                  type="checkbox"
                  name="select-all"
                  onChange={(e) => handleAllCheck(e.target.checked)}
                  checked={
                    checkItems.length === CheckData.length ? true : false
                  }
                />
              </CheckZone>
              <TextZone>모두동의합니다.</TextZone>
            </FormBoxChild>
          </AllCheck>
          {CheckData?.map((CheckData, key) => (
            <FormBoxChild key={key}>
              <CheckZone>
                <input
                  type="checkbox"
                  name={`${CheckData.id}`}
                  onChange={(e) =>
                    handleSingleCheck(e.target.checked, CheckData.id)
                  }
                  checked={checkItems.includes(CheckData.id) ? true : false}
                />
              </CheckZone>
              <TextZone>
                <span>{CheckData.title}</span>
              </TextZone>
            </FormBoxChild>
          ))}
          <SubmitButton onClick={() => navigate('/regiInfo')}>
            동의하고 진행하기
          </SubmitButton>
        </FormBox>
      </Background>
    </>
  );
};

export default RegisterPage;

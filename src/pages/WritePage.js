import React, { useState } from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import data from '../data';

let PaddingBox = styled.div`
  height: 60px;
`;
const Background = styled.div`
  width: 100%;
  height: auto;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  border: 1px solid red;
`;
const ContentsArea = styled.div`
  border: 1px solid yellow;
  width: 600px;
  height: 630px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const AddressBox = styled.div`
  width: 500px;
  height: 220px;
  padding: 15px;
  border-radius: 3px;
  flex-direction: column;
  align-items: center;
  border: none;
  outline: 1px solid hsl(210, 8%, 75%);
  > h2 {
    margin-top: 0px;
    margin-bottom: 10px;
  }
  > div {
    display: flex;
    justify-content: space-between;
  }
`;
const WriteInfo = styled.div`
  width: 500px;
  height: 300px;
  padding: 0px 15px;
  border-radius: 3px;
  border: none;
  outline: 1px solid hsl(210, 8%, 75%);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const WriteInfoChild = styled.div`
  width: 98%;
  height: 25px;
  font-size: 13px;
  font-weight: 500;
  /* border: 1px solid blue; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  > span {
    font-size: 10pt;
  }
`;
const Title = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const Content = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  > div {
    height: 100%;
    margin-left: 5px;
    color: gray;
    display: flex;
    align-items: center;
  }
  > select {
    width: 100%;
    height: 100%;
    border-radius: 3px;
    resize: none;
    border: none;
    outline: 1px solid hsl(210, 8%, 75%);
    > select option {
      background-color: white;
    }
  }
`;
const InputBox = styled.input`
  width: 450px;
  height: 18px;
  padding: 4.5px;
  border-radius: 3px;
  border: none;
  outline: 1px solid hsl(210, 8%, 75%);
`;
const LimitInput = styled(InputBox)`
  width: 150px;
`;
const TextareaBox = styled.textarea`
  width: 450px;
  height: 30px;
  overflow: visible;
  padding: 4px;
  border-radius: 3px;
  resize: none;
  border: none;
  outline: 1px solid hsl(210, 8%, 75%);
`;

function WritePage(props) {
  let [category, setCategory] = useState('선택');
  let [url, setUrl] = useState('');
  let [involved, setInvolved] = useState();
  let [deadline, setDeadLine] = useState();
  let [notice, setNotice] = useState('');
  let [posts, setPosts] = useState({
    "memberId" : 1,
    "title": "Title",
    "foodCategoryId": "1",
    "deadline" : 1664348627680,
    "recruit" : 10,
    "pickupLocation" : {
        "nameOfPlace": "더큰내일센터",
        "korAddress": "제주도 연북로",
        "addressDetail": "101동 101호",
        "type": 1,
        "latitude": 209.987,
        "longitude": 1234.343
    },
    "restaurantName": "McDonalds1",
    "restaurantUrl": "http://local1.com/",
    "body": "오늘 저녁에 치킨 드실 분 같이 주문해요!!",
    "imageUrl": {
        "url": "imageurl/url/image.jpg",
        "type": 1
    },
  });
  let navigate = useNavigate();
  let { id } = useParams();
  console.log(JSON.stringify(posts))

  const SelecCt = (value) => {
    console.log();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setUrl(e.target.url.value);
    setInvolved(e.target.number.value);
    setDeadLine(e.target.deadline.value);
    setNotice(e.target.notice.value);
    // console.log(e.target.deadline.value)

    fetch('/items', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        url: 'url',
        number: 'involved',
      }),
    }).then((res) => console.log(res.json()));
    writeContents();
  };

  const writeContents = () => {
    navigate(`/post/${id}`);
  };

  const postTest =()=> {
    return axios
      .post("/items", JSON.stringify(posts))
      // .post(" http://localhost:4000/items", JSON.stringify(posts))
      .then((res) => {
        console.log(res.data)
      })
      .catch((err)=>{
        console.log(err.response.data)
      });
  }

  return (
    <>
      <Header />
      <PaddingBox />
      <Background>
        <form onSubmit={onSubmit}>
          <ContentsArea>
            <AddressBox>
              <h2>배송지 선택</h2>
              <div>김제주 </div>
              <p>제주특별자치도 제주시 한라산 백록담, 101동 </p>
              <p>010-0707-8282</p>
              <p>문 앞</p>
              <div>
                <button>수정</button>
                <button>선택</button>
              </div>
            </AddressBox>
            <button>+배송지추가</button>
            <WriteInfo>
              <WriteInfoChild>
                <Title>카테고리</Title>
                <Content>
                  <select>
                    <option value="선택">--선택--</option>
                    <option value="1인분주문">1인분 주문</option>
                    <option value="프렌차이즈">프렌차이즈</option>
                    <option value="치킨">치킨</option>
                    <option value="피자/양식">피자/양식</option>
                    <option value="중식">중식</option>
                    <option value="한식">한식</option>
                    <option value="일식/돈까스">일식/돈까스</option>
                    <option value="족발/보쌈">족발/보쌈</option>
                    <option value="야식">야식</option>
                    <option value="분식">분식</option>
                    <option value="카페/디저트">카페/디저트</option>
                    <option value="편의점/마트">편의점/마트</option>
                  </select>
                </Content>
              </WriteInfoChild>
              <WriteInfoChild>
                <Title>URL</Title>
                <Content>
                  <InputBox
                    placeholder="배달어플에서 주문희망 상품페이지 url을 복사붙여넣기 하세요"
                    name="url"
                  ></InputBox>
                </Content>
              </WriteInfoChild>
              <WriteInfoChild>
                <Title>참여하기</Title>
                <Content>
                  <LimitInput
                    type="number"
                    name="number"
                    step="1"
                    min="1"
                    max="5"
                  ></LimitInput>
                  <div>참가희망 인원을 입력해주세요. 최대 5명</div>
                </Content>
              </WriteInfoChild>
              <WriteInfoChild>
                <Title>마감시간</Title>
                <Content>
                  <LimitInput
                    type="number"
                    name="deadline"
                    step="30"
                    min="0"
                    max="120"
                  ></LimitInput>
                  <div>30분 단위로 설정할 수 있습니다. 최대 2시간</div>
                </Content>
              </WriteInfoChild>
              <WriteInfoChild>
                <Title>추가사항</Title>
                <Content>
                  <TextareaBox
                    placeholder="참여자에게 전달사항을 입력해주세요."
                    name="notice"
                  ></TextareaBox>
                </Content>
              </WriteInfoChild>
            </WriteInfo>
            {/* <button onClick={() => navigate(`/post/${detail}`)}>글쓰기</button> */}
            <input type="submit" />
  
          </ContentsArea>
        </form>
        <button onClick={postTest}>만들기</button>
      </Background>
    </>
  );
}

export default WritePage;

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import PostLists from '../components/PostLists';
import FilterBar from '../components/FilterBar';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import axios from 'axios';


let PaddingBox = styled.div`
  height: 60px;
`;
let Body = styled.div`
  width: 96%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
let Describe = styled.div`
  width: 800px;
  height: 80px;
  font-weight: 800;
  text-align: center;
  /* background-image: url('./describe.jpeg'); */
  /* background-size: cover; */
  /* background-position: center; */
  align-items: center;
  border: 1px solid gray;
  border-radius: 10px;
`;
let MapImg = styled.div`
  width: 800px;
  height: 300px;
  margin-top: 1%;
  border: 1px solid gray;
  border-radius: 10px;
  /* background-image: url('./map.png'); */
  /* background-size: cover;
    background-position: center; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

function PostListPage() {
  const [contents, setContents] = useState([]);
  const positions = [
    {
      title: "더큰내일센터",
      latlng: { lat: 33.556245, lng: 126.792824 },
    },
    {
      title: "매종글래드",
      latlng: { lat: 33.556468, lng: 126.794843 },
    },
    {
      title: "노형아이파크아파트",
      latlng: { lat:33.556689, lng: 126.796862 },
    },
    {
      title: "제주부영아파트1차",
      latlng: { lat: 33.558393, lng: 126.798881 },
    },
  ]

  useEffect(()=>{
    // axios.get("ec2-3-35-16-72.ap-northeast-2.compute.amazonaws.com:8080/items?page=0&size=100").then((res)=>{
    axios.get(process.env.REACT_APP_TEST_URL+"/items").then((res)=>{
        let copy = [...res.data];
        // console.log(copy);
        setContents(copy)
        // console.log(choice)

    })
    .catch(()=>{
      console.log('실패함')
    })
 },[])



  return (
    <>
      <Header />
      <PaddingBox />
      <Body>
        <Describe>
          <br></br>호박공구마는 배달건당 주문량을 늘려 탄소절감과 고객비용부담
          완화를 통해 <br></br>더 나은 세상을 만들기 위한 배달비공유
          사이트입니다.
        </Describe>
        <MapImg>
          <Map
            center={{ lat: 33.556355, lng: 126.79581 }}
            style={{ width: '98%', height: '98%' }}
            level={3} // 지도의 확대 레벨
          >
            {positions.map((position, index) => (
          <MapMarker
            key={`${position.title}-${position.latlng}`}
            position={position.latlng} // 마커를 표시할 위치
            image={{
              src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
              size: {
                width: 24,
                height: 35
              }, // 마커이미지의 크기입니다
            }}
            title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          />
      ))}
          </Map>
        </MapImg>
        <FilterBar />
        <PostLists />
      </Body>
    </>
  );
}

export default PostListPage;

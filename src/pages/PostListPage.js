import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostLists from '../components/PostLists';
import FilterBar from '../components/FilterBar';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
const {kakao}= window;

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
  margin-top: 10px;
  margin-bottom: 5px;
  font-weight: 800;
  text-align: center;
  background-image: url('./background.jpeg');
  /* background-size: cover; */
  /* background-position: center; */
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  border-radius: 10px;
  > div {
    width: 100px;
    height: 80px;
    border: 1px solid red;
    margin-right: 15px;
  }
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
  const [position, setPosition] = useState();
  // const [positions, setPositions] = useState([]);

  // useEffect(() => {
  //   setPositions(clusterPositionsData.positions);
  // }, []);

  return (
    <>
      <Header />
      <PaddingBox />
      <Body>
        <Describe>
          <div>
            <img src="url('./pumkinlogo.png')" />
          </div>
          <br></br>호박공구마는 배달건당 주문량을 늘려 탄소절감과 고객비용부담
          완화를 통해 <br></br>더 나은 세상을 만들기 위한 배달비공유
          사이트입니다.
        </Describe>
        <MapImg>
          <Map
            center={{ lat: 33.5563, lng: 126.79581 }}
            style={{ width: '99%', height: '100%' }}
            level={10} // 지도의 확대 레벨
            onClick={(_t, mouseEvent) => setPosition({
              lat: mouseEvent.latLng.getLat(),
              lng: mouseEvent.latLng.getLng(),
            })}
          >
            {position && <MapMarker position={position} />}
          </Map>
        </MapImg>
        <FilterBar />
        <PostLists />
        <Footer/>
      </Body>
    </>
  );
}

export default PostListPage;

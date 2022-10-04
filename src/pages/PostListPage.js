import { useEffect, useState } from "react";
import styled from 'styled-components';
import Header from '../components/Header';
import PostLists from '../components/PostLists'
import FilterBar from '../components/FilterBar'
import {Map, MapMarker} from 'react-kakao-maps-sdk'


let PaddingBox = styled.div`
    height: 60px;
`
let Body = styled.div`
    width: 96%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
let Describe = styled.div`
    width: 800px;
    height: 80px;
    font-weight:800;
    text-align: center;
    /* background-image: url('./describe.jpeg'); */
    /* background-size: cover; */
    /* background-position: center; */
    align-items: center;
    border: 1px solid gray;
    border-radius: 10px;
`
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
`


function PostListPage(){
    return(
        <>
            <Header/>
            <PaddingBox />
            <Body>
                <Describe><br></br>호박공구마는 배달건당 주문량을 늘려 탄소절감과 고객비용부담 완화를 통해 <br></br>더 나은 세상을 만들기 위한 배달비공유 사이트입니다.</Describe>
                <MapImg>
                    <Map
                        center={{ lat: 33.5563, lng: 126.79581 }}
                        style={{ width: "98%", height: "98%"}}
                        >
                        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
                            <div style={{ color: "#000" }}>호박공구마</div>
                        </MapMarker>
                    </Map>   
                </MapImg>
                <FilterBar/>
                <PostLists />
            </Body>
        </>
        ) 
  
};

export default PostListPage;


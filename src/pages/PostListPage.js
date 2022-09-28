import React from "react";
import styled from 'styled-components';
import Header from '../components/Header';
import PostLists from '../components/PostLists'
import FilterBar from '../components/FilterBar'

let PaddingBox = styled.div`
    height: 5px;
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
let Map = styled.div`
    width: 800px;
    height: 300px;
    margin-top: 1%;
    border: 1px solid gray;
    border-radius: 10px;
    background-image: url('./map.png');
    background-size: cover;
    background-position: center;
`




function PostListPage(){
    return(
        <>
            <Header/>
            <PaddingBox />
            <Body>
                <Describe><br></br>호박공구마는 배달건당 주문량을 늘려 탄소절감과 고객비용부담 완화를 통해 <br></br>더 나은 세상을 만들기 위한 배달비공유 사이트입니다.</Describe>
                <Map />
                <FilterBar/>
                <PostLists />
                
            </Body>
        </>
        ) 
  
};

export default PostListPage;


import React from "react";
import styled from 'styled-components';
import Header from '../components/Header';
import PostLists from '../components/PostLists'

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
`
let Map = styled.div`
    width: 800px;
    height: 300px;
    margin-top: 1%;
    border: 1px solid gray;
    background-image: url('./map.png');
    background-size: cover;
    background-position: center;
`

let FilterBox = styled.div`
    margin-top: 1%;
    width: 800px;
    height: 40px;
    border: 1px solid gray;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
let Filters = styled.div`
    width: auto;
    height: auto;
    padding-left: 5px;
    padding-right: 5px;
    font-weight: 400;
    font-size: 13px;
    border-right: 1px solid gray;
`
let All = styled(Filters)`
    font-weight: 600;
`


function PostListPage(){
    return(
        <>
            <Header/>
            <PaddingBox />
            <Body>
                <Describe><br></br>호박공구마는 배달건당 주문량을 늘려 탄소절감과 고객비용부담 완화를 통해 <br></br>더 나은 세상을 만들기 위한 배달비공유 사이트입니다.</Describe>
                <Map />
                <FilterBox>
                    <All>전체보기</All>
                    <Filters>1인분 주문 </Filters>
                    <Filters>프렌차이즈</Filters>
                    <Filters>치킨</Filters>
                    <Filters>피자/양식</Filters>
                    <Filters>중국집</Filters>
                    <Filters>한식</Filters>
                    <Filters>일식/돈까스</Filters>
                    <Filters>족발/보쌈</Filters>
                    <Filters>야식</Filters>
                    <Filters>분식</Filters>
                    <Filters>까페/디저트</Filters>
                    <Filters>편의점/마트</Filters>
                </FilterBox>
                <PostLists />
                
            </Body>
        </>
        ) 
  
};

export default PostListPage;


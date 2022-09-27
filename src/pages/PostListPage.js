import React from "react";
import styled from 'styled-components';
import Header from '../components/Header';

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

let PostList = styled.div`
    margin-top: 1%;
    width: 800px;
    height: auto;
    /* border: 1px solid pink; */
    /* display: flex; */
    /* justify-content: space-around; */
    /* flex-direction: column; */
    /* align-items: center; */
`
let PostHead = styled(PostList)`    
    font-weight: 400;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* border: 1px solid blue; */

`
let HeadLine = styled.div`
    width: 25%;
    height:auto;
    border-bottom: 1px solid gray;
    text-align: center;
`
let ContentsBox = styled(PostList)`
    margin-top: 2px;
    font-weight: 300;
    border-bottom: 1px solid gray;
    text-align: center;
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
                <PostList>
                    <PostHead>
                        <HeadLine>주문매장</HeadLine>
                        <HeadLine>공구마</HeadLine>
                        <HeadLine>모집인원</HeadLine>
                        <HeadLine>거리</HeadLine>
                        <HeadLine>마감시간</HeadLine>
                    </PostHead>
                    <PostHead>
                        <ContentsBox>양고기</ContentsBox>
                        <ContentsBox>신가깅</ContentsBox>
                        <ContentsBox>2명</ContentsBox>
                        <ContentsBox>500M</ContentsBox>
                        <ContentsBox>5분전</ContentsBox>
                    </PostHead>
                    <PostHead>
                        <ContentsBox>돈까스</ContentsBox>
                        <ContentsBox>은주모니</ContentsBox>
                        <ContentsBox>3명</ContentsBox>
                        <ContentsBox>400M</ContentsBox>
                        <ContentsBox>7분전</ContentsBox>
                    </PostHead>
                    <PostHead>
                        <ContentsBox>셀러드</ContentsBox>
                        <ContentsBox>송지효</ContentsBox>
                        <ContentsBox>2명</ContentsBox>
                        <ContentsBox>300M</ContentsBox>
                        <ContentsBox>15분전</ContentsBox>
                    </PostHead>
                    <PostHead>
                        <ContentsBox>볶음밥</ContentsBox>
                        <ContentsBox>이태원</ContentsBox>
                        <ContentsBox>2명</ContentsBox>
                        <ContentsBox>250M</ContentsBox>
                        <ContentsBox>8분전</ContentsBox>
                    </PostHead>
                    <PostHead>
                        <ContentsBox>닭가슴</ContentsBox>
                        <ContentsBox>건휘바</ContentsBox>
                        <ContentsBox>3명</ContentsBox>
                        <ContentsBox>450M</ContentsBox>
                        <ContentsBox>7분전</ContentsBox>
                    </PostHead>
                </PostList>
            </Body>
        </>
        ) 
  
};

export default PostListPage;


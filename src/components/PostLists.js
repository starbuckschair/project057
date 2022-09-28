import React from "react";
import styled from 'styled-components';

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


function PostLists(){
    return(
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
        ) 
  
};

export default PostLists;
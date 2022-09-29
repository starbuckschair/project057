import React from "react";
import { useState } from "react";
import {useParams} from "react-router-dom"
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import styled from 'styled-components';
import data from '../data'

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
let PostHeadTitle = styled(PostList)`    
    margin-top: 1rem;
    font-weight: 700;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* border: 1px solid blue; */
`
let PostHead = styled(PostHeadTitle)`
    font-weight: 500;
    &:hover {
      /* border:2px solid red; */
      cursor: pointer;
    }
`
let HeadLine = styled.div`
    width: 25%;
    height:auto;
    border-bottom: 1px solid gray;
    text-align: center;
`
let ContentsBox = styled(PostHeadTitle)`
    margin-top: 2px;
    font-weight: 400;
    border-bottom: 1px solid gray;
    text-align: center;
`


function PostLists(){
    let [contents, setContents] = useState(data)
    let navigate = useNavigate();


    return(
        <PostList>
        <PostHeadTitle>
            <HeadLine>주문매장</HeadLine>
            <HeadLine>공구마</HeadLine>
            <HeadLine>모집인원</HeadLine>
            <HeadLine>거리</HeadLine>
            <HeadLine>마감시간</HeadLine>
        </PostHeadTitle>
        {
            contents.map((a, i)=>{
                const detail = a.userId; //detail은 게시판 글 클릭시 해당 글의 userId입니다.
                return(
                    <PostHead key={i} onClick={()=>{
                        navigate(`/post/${detail}`)
                    }}>
                        <ContentsBox>{a.title}</ContentsBox>
                        <ContentsBox>{a.itemId}</ContentsBox>
                        <ContentsBox>{a.recruit}명</ContentsBox>
                        <ContentsBox>{a.distance}미터</ContentsBox>
                        <ContentsBox>{a.timeLimit}분전</ContentsBox>
                    </PostHead>
                )
            })
        }
        </PostList>
    ) 
  
};

export default PostLists;
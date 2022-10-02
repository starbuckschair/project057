import React from "react";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import styled from 'styled-components';
import data from '../data'
import axios from 'axios';

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
    let [contents, setContents] = useState([]);
    let [users, setUsers] = useState([]);
    let navigate = useNavigate();
    
    useEffect(()=>{
        axios.get("https://53a26b07-21c1-41b3-87a0-88d0c872d18a.mock.pstmn.io/testapi/first").then((res)=>{
            let copy = [...res.data];
            // console.log(copy);
            setContents(copy)
            // console.log(choice)
        })
        .catch(()=>{
          console.log('실패함')
        })
     },[])
   
     useEffect(()=>{
        axios.get("https://53a26b07-21c1-41b3-87a0-88d0c872d18a.mock.pstmn.io/testapi/second").then((res)=>{
            let copy = [...res.data];
            // console.log(copy);
            setUsers(copy)
            // console.log(res.data)
        })
        .catch(()=>{
          console.log('실패함')
        })
     },[])
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
                const detail = a.itemId; //detail은 게시판 글 클릭시 해당 글의 itemId입니다.
                const userName = users.filter((el)=>{return el.memberId===a.memberId})[0].username;
                
                return(
                    <PostHead key={i} onClick={()=>{
                        navigate(`/post/${detail}`)
                    }}>
                        <ContentsBox>{a.restaurantName}</ContentsBox>
                        <ContentsBox>{userName}</ContentsBox>
                        <ContentsBox>{a.participantsList.length}명</ContentsBox>
                        <ContentsBox>100미터</ContentsBox>
                        <ContentsBox>5분전</ContentsBox>
                    </PostHead>
                )
            })
        }
        
    
        </PostList>
    ) 
  
};

export default PostLists;
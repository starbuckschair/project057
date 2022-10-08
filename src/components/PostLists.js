import React from 'react';
import { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import styled from 'styled-components';
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
`;
let PostHeadTitle = styled(PostList)`
  margin-top: 1rem;
  font-weight: 700;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* border: 1px solid blue; */
`;
let PostHead = styled(PostHeadTitle)`
  font-weight: 500;
  &:hover {
    /* border:2px solid red; */
    cursor: pointer;
  }
`;
let HeadLine = styled.div`
  width: 25%;
  height: auto;
  border-bottom: 1px solid gray;
  text-align: center;
`;
let ContentsBox = styled(PostHeadTitle)`
  margin-top: 2px;
  font-weight: 400;
  border-bottom: 1px solid gray;
  text-align: center;
`;
function elapsedTime(date) {
    const end = new Date(date);// 마감 시간
    const now = new Date(); // 현재 시간
    
    const diff = (end - now); // 차감 시간
   
    const times = [
      {time: "분", milliSeconds: 1000 * 60},
      {time: "시간", milliSeconds: 1000 * 60 * 60},
      {time: "일", milliSeconds: 1000 * 60 * 60 * 24},
      {time: "개월", milliSeconds: 1000 * 60 * 60 * 24 * 30},
      {time: "년", milliSeconds: 1000 * 60 * 60 * 24 * 365},
    ].reverse();
    
    // 년 단위부터 알맞는 단위 찾기
    for (const value of times) {
      const betweenTime = Math.floor(diff / value.milliSeconds);
          
      // 큰 단위는 0보다 작은 소수 단위 나옴
      if (betweenTime > 0) {
        return `${betweenTime}${value.time} 전`;
      }
    }
    
    // 모든 단위가 맞지 않을 시
    return "곧 마감";
  }
function PostLists(){
    let [contents, setContents] = useState([]);
    let [users, setUsers] = useState([]);
    let navigate = useNavigate();
    // let 현재시간 = new Date("2022-11-01 11:11:11").getTime();
    // console.log(현재시간)
    
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
   
     useEffect(()=>{
        // axios.get("ec2-3-35-16-72.ap-northeast-2.compute.amazonaws.com:8080/vi/members?page=0&size=100").then((res)=>{
        axios.get(process.env.REACT_APP_TEST_URL+"/members").then((res)=>{
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
                const user = users.find((el)=>{return el.memberId===a.memberId});
                return(
                    <PostHead key={i} onClick={()=>{
                        navigate(`/post/${detail}`)
                    }}>
                        <ContentsBox>{a.restaurantName}</ContentsBox>
                        <ContentsBox>{user?.username}</ContentsBox>
                        <ContentsBox>{a.recruit}명</ContentsBox>
                        <ContentsBox>100미터</ContentsBox>
                        <ContentsBox>{elapsedTime(a.deadline)}</ContentsBox>
                    </PostHead>
                )
            })
        }
        </PostList>
    ) 
};

export default PostLists;

import React from "react";
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import styled from 'styled-components';
import Comment from './Comment';
import {Map, MapMarker} from 'react-kakao-maps-sdk';
import axios from 'axios';
import WritePage from '../pages/WritePage';

let Body = styled.div`
    width: 98%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
`
let OrderInfo = styled.div`
    width: 800px;
    height: auto;
    /* border: 1px solid gray; */
    display: flex;
    /* flex-direction: column; */
    justify-content: space-around;
`
let MapBox = styled.div`
    width: 45%;
    height: 300px;
    margin: 1%;
    border: 1px solid gray;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    /* background-image:url('./직방이미지.png');
    background-size:cover;
    background-position: center; */
`
let DetailInfo = styled.div`
    width: 45%;
    height: auto;
    margin: 1%;
    /* border: 1px solid gray; */
    display: flex;
    flex-direction: column;
    justify-content: center;
`
let StaticInfo = styled.div`
    width: 100%;
    height: auto;
    margin-top: 5%;
    font-size: medium;
    border-bottom:1px solid gray;
    display:flex;
    justify-content: center;
`
let StaticInfoTitle = styled.div`
    width: 20%;
    height: 20px;
    font-weight: 500;
    /* border: 1px solid red; */
    display:flex;
    justify-content: center;
    align-items: center;
`
let StaticInfoDetail = styled.div`
    width: 80%;
    height: 20px;
    font-weight: 400;
    /* border: 1px solid red; */
    display:flex;
    justify-content: center;
    align-items: center;
`
let LiveInfo = styled.div`
    width: 100%;
    height: 80px;
    margin-top: 5%;
    /* border: 1px solid gray; */
    display: flex;
    justify-content: space-around;
    align-items: center;
`
let LiveInfoImg = styled.div`
    width: 60%;
    height: 50px;
    border: 1px solid gray;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
let LiveInfoImgs = styled.div`
    width: 20%;
    height: 40px;
    font-size: 15px;
    font-weight: 600;
    border:1px solid gray;
    /* background:${ props => props.bg }; */
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
let LiveInfoText = styled.div`
    width: 40%;
    height: 50px;
    border: 1px solid gray;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
`

let LiveInfoTextTo = styled.div`
    margin-top: 2%;
    font-weight: 700;
    color: red;
    display: flex;
    justify-content: center;
    text-align: center;
`
let JoinButtonBox = styled.div`
    width: 100%;
    height: auto;
    /* border: 1px solid blue; */
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
let JoinButton = styled.button`
    width: 100px;
    height: 30px;
    font-weight: 500;
    margin-top: 5%;
    background-color: white;
    border: 2px solid gray;
    border-radius: 10px;
    &:hover {
    cursor: pointer;
    color: red;
    }
`




function PostPageBody(props){
    let [contents, setContents] = useState([]);
    let [users, setUsers] = useState([]);
    let {id} = useParams();
    let pickItem = contents.find(el=>el.itemId == id);
    let pickItemMaker = users.find(el=>el.memberId == pickItem?.memberId);
    // let participants = pickItem.participantsList;
    // let [icon, setIcon] = useState([])


  


    useEffect(()=>{
        // axios.get("/items?page=0&size=100").then((res)=>{
        axios.get("http://localhost:8080/items").then((res)=>{
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
<<<<<<< HEAD
        // axios.get("/members").then((res)=>{
        axios.get("http://localhost:8080/members").then((res)=>{
=======
        axios.get("http://192.168.4.223:8080/v1/members?page=0&size=100").then((res)=>{
        // axios.get("https://53a26b07-21c1-41b3-87a0-88d0c872d18a.mock.pstmn.io/testapi/second").then((res)=>{
>>>>>>> 0863cf6d32d6e1765dd7ceaea76f35eebcb0f41c
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
        <>
            <Body>
                <OrderInfo>
                    <MapBox>
                        <Map
                            center={{ lat: 33.5563, lng: 126.79581 }}
                            style={{ width: "98%", height: "98%"}}
                            >
                            <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
                                <div style={{ color: "#000" }}>호박공구마</div>
                            </MapMarker>
                        </Map>    
                    </MapBox>
                    <DetailInfo>
                        <StaticInfo>
                            <StaticInfoTitle>픽업장소</StaticInfoTitle>
                            <StaticInfoDetail>{pickItem?.restaurantName}</StaticInfoDetail>
                        </StaticInfo>
                        <StaticInfo>
                            <StaticInfoTitle>메뉴정보</StaticInfoTitle>
                            <StaticInfoDetail>{pickItem?.restaurantUrl}</StaticInfoDetail>
                        </StaticInfo>
                        <StaticInfo>
                            <StaticInfoTitle>배달료</StaticInfoTitle>
                            <StaticInfoDetail>1인 2000원</StaticInfoDetail>
                        </StaticInfo>
                        <StaticInfo>
                            <StaticInfoTitle>모집인원</StaticInfoTitle>
                            <StaticInfoDetail>{pickItem?.recruit}명</StaticInfoDetail>
                        </StaticInfo>
                        <LiveInfo>
                            <LiveInfoImg>
                                <LiveInfoImgs>
                                    {
                                        pickItemMaker?.username
                                    }
                                </LiveInfoImgs>
                                {
                                    pickItem?.participantsList?.map((a, i)=>{
                                        return(
                                            <LiveInfoImgs key={i}>
                                                {pickItem?.participantsList[i]?.member.username}
                                            </LiveInfoImgs>
                                        )  
                                    })   
                                }
                            </LiveInfoImg>
                            <LiveInfoText>
                                <LiveInfoTextTo>{pickItem?.participantsList?.length+1}명 참여중</LiveInfoTextTo>
                                <LiveInfoTextTo>마감 5분전 </LiveInfoTextTo>
                            </LiveInfoText>
                        </LiveInfo>
                        <JoinButtonBox>
                            <JoinButton onClick={()=>{
                               axios.post(
                                 `http://192.168.4.223:8080/items/${id}?memberId=4`
                               )
                               .then((response) => {
                                 console.log(response);
                               })
                               .catch((error) => {
                                 console.log(error.response);
                               });
                            }}>참여하기</JoinButton>
                        </JoinButtonBox>
                    </DetailInfo>
                </OrderInfo>
                <Comment />
                
            </Body>
        </>
    )
}

export default PostPageBody;
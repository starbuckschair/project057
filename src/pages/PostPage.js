import React from "react";
import styled from "styled-components";
import { redirect } from "../../node_modules/react-router-dom/dist/index";
import Header from "../components/Header";

let Body = styled.div`
    width: 98%;
    height: auto;
    display: flex;
    justify-content: center;
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
    background-image:url('./직방이미지.png');
    background-size:cover;
    background-position: center;
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
    display: flex;
    justify-content: space-around;
    align-items: center;
`
let LiveInfoImgs = styled.div`
    width: 20%;
    height: 40px;
    font-size: 35px;
    border:1px solid gray;
    background:${ props => props.bg };
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
let LiveInfoText = styled.div`
    width: 40%;
    height: 50px;
    border: 1px solid gray;
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

`


function PostPage() {
    return (
        <>
            <Header/>
            <Body>
                <OrderInfo>
                    <MapBox></MapBox>
                    <DetailInfo>
                        <StaticInfo>
                            <StaticInfoTitle>픽업장소</StaticInfoTitle>
                            <StaticInfoDetail>더큰내일센터 2층 김녕회의실</StaticInfoDetail>
                        </StaticInfo>
                        <StaticInfo>
                            <StaticInfoTitle>메뉴정보</StaticInfoTitle>
                            <StaticInfoDetail> https://baemin.me/oivNksxpo</StaticInfoDetail>
                        </StaticInfo>
                        <StaticInfo>
                            <StaticInfoTitle>배달료</StaticInfoTitle>
                            <StaticInfoDetail>1인 2000원</StaticInfoDetail>
                        </StaticInfo>
                        <StaticInfo>
                            <StaticInfoTitle>모집인원</StaticInfoTitle>
                            <StaticInfoDetail>3명</StaticInfoDetail>
                        </StaticInfo>
                        <LiveInfo>
                            <LiveInfoImg>
                                <LiveInfoImgs>😎</LiveInfoImgs>
                                <LiveInfoImgs>🥰</LiveInfoImgs>
                                <LiveInfoImgs>🥸</LiveInfoImgs>
                            </LiveInfoImg>
                            <LiveInfoText>
                                <LiveInfoTextTo>1명 참여중</LiveInfoTextTo>
                                <LiveInfoTextTo>마감 5분전</LiveInfoTextTo>
                            </LiveInfoText>
                        </LiveInfo>
                        <JoinButtonBox>
                            <JoinButton>참여하기</JoinButton>
                        </JoinButtonBox>
                    </DetailInfo>
                </OrderInfo>
            </Body>
        </>
    );
};

export default PostPage;
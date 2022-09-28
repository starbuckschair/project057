import React from "react";
import styled from "styled-components";
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
    height: 300px;
    margin: 1%;
    border: 1px solid gray;
`


function PostPage() {
    return (
        <>
            <Header/>
            <Body>
                <OrderInfo>
                    <MapBox></MapBox>
                    <DetailInfo></DetailInfo>
                </OrderInfo>
            </Body>
        </>
    );
};

export default PostPage;
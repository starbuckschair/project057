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
    border: 1px solid gray;
    background-image: url('./describe.jpeg');
    background-size: cover;
    background-position: center;
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
`
let Filters = styled.div`
`

function PostListPage(){
    return(
        <>
            <Header/>
            <PaddingBox />
            <Body>
                <Describe />
                <Map />
                <FilterBox />
            </Body>
        </>
        ) 
  
};

export default PostListPage;


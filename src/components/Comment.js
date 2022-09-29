import React from "react";
import { useState } from "react";
import styled from 'styled-components';
import commentData from '../commentdata'

let CommentBox = styled.div`
    width: 770px;
    height: auto;
    margin-top: 10px;
    padding-bottom: 1%;
    /* background-color: rgb(217 217 217); */
    color:black;
    border: 1px solid gray;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
let CommentLine = styled.div`
   width: 98%;
   height: 30px;
   /* border: 1px solid gray; */
   border-radius: 10px;
    margin-top: 1em;
   display: flex;
   justify-content: space-around;
`
let CommentItem = styled.div`
    width: 15%;
    height: 30px;
    font-weight: 600;
    /* border: 1px solid gray; */
    display: flex;
    justify-content: center;
    align-items: center;
`
let CommentInput = styled(CommentItem)`
    width: 85%;
    font-weight: 300;
    justify-content: flex-start;
`
function Comment(){
    let [comments, setComments] = useState(commentData); // 댓글데이터 불러오기 commentData.js
    // console.log(comments);
    return(
        <CommentBox>
            {
                comments.map((a, i)=>{
                    return(
                        <CommentLine key={i}>
                            <CommentItem>{comments[i].userId}</CommentItem>
                            <CommentInput>{comments[i].comment}</CommentInput>
                        </CommentLine>
                    )      
                })
            }
        </CommentBox>
    )
}

export default Comment;

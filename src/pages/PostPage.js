import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { redirect } from '../../node_modules/react-router-dom/dist/index';
import Header from '../components/Header';
import { useParams, useNavigate } from 'react-router-dom';
import PostPageBody from '../components/PostPageBody';
import data from '../data';

let PaddingBox = styled.div`
  height: 60px;
`;

function PostPage() {
  let { id } = useParams();
  return (
    <>
      <Header />
      <PaddingBox />
      <PostPageBody id={id} />
    </>
  );
}

export default PostPage;

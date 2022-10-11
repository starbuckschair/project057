import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import PostPageBody from '../components/PostPageBody';

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
      <Footer/>
    </>
  );
}

export default PostPage;

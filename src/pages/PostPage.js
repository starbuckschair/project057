import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { redirect } from "../../node_modules/react-router-dom/dist/index";
import Header from "../components/Header";
import { useParams, useNavigate } from 'react-router-dom'
import PostPageBody from "../components/PostPageBody"
import data from "../data";


function PostPage() {
    let {id} = useParams();
    let [posts, setPosts] = useState(data);
    return (
        <>
            <Header/>
            <PostPageBody posts={posts} id={id}/>
        </>
    );
};

export default PostPage;
import React from "react";
import styled from "styled-components";
import { redirect } from "../../node_modules/react-router-dom/dist/index";
import Header from "../components/Header";
import PostPageBody from "../components/PostPageBody"


function PostPage() {
    return (
        <>
            <Header/>
            <PostPageBody/>
        </>
    );
};

export default PostPage;
import React, {useContext, useEffect, useState} from 'react';
import PostPreviewList from "./PostPreviewList";
import classes from "./Posts.module.css";
import {BlogContext} from "../../context";

const Posts = () => {

   const {posts, setPosts} = useContext(BlogContext)

    return (
        <main className={classes.posts}>
            <PostPreviewList posts={posts}/>
        </main>
    );
};

export default Posts;
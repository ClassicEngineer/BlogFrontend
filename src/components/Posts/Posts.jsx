import React, {useContext} from 'react';
import PostPreviewList from "./PostPreviewList";
import classes from "./Posts.module.css";
import {BlogContext} from "../../context";

const Posts = () => {

   const {blogContext} = useContext(BlogContext);

    return (
        <main className={classes.posts}>
            <PostPreviewList posts={blogContext.posts}/>
        </main>
    );
};

export default Posts;
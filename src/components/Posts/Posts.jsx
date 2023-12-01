import React, {useContext, useEffect, useState} from 'react';
import PostPreviewList from "./PostPreviewList";
import classes from "./Posts.module.css";
import {BlogContext} from "../../context";
import {useFetching} from "../../hooks/useFetching";
import BlogService from "../../services/BlogService";

const Posts = () => {

    const [blogContext, setBlogContext] = useState({posts:[]});

    let [fetchingBlogPosts] = useFetching(async () => {
        const response = await BlogService.getBlogPosts();
        setBlogContext({posts: response.data})
        console.log('Fetching blog posts was called')

    });

    useEffect(() => {
        fetchingBlogPosts();
    }, []);

    return (
        <main className={classes.posts}>
            <PostPreviewList posts={blogContext.posts}/>
        </main>
    );
};

export default Posts;
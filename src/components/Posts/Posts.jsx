import React, {useEffect, useState} from 'react';
import BlogService from "../../services/BlogService";
import PostPreviewList from "./PostPreviewList";
import classes from "./Posts.module.css";
import {useFetching} from "../../hooks/useFetching";

const Posts = () => {

    let [posts, setPosts] = useState([{ id: 1, title: 'HelloWorld', content: ''}])

    let [fetchingBlogPosts]= useFetching(async () => {
        console.log('Fetching blog posts was called')
        const response = await BlogService.getBlogPosts();
        setPosts(response.data)
    });

    useEffect(() => {
        fetchingBlogPosts()
    }, []);

    return (
        <main className={classes.posts}>
            <PostPreviewList posts={posts}/>
        </main>
    );
};

export default Posts;
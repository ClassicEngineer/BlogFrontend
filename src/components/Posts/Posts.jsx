import React, {useEffect, useState} from 'react';
import {useFetching} from "../../hooks/useFetching";
import BlogService from "../../services/BlogService";
import PostPreviewList from "./PostPreviewList";
import classes from "./Posts.module.css";

const Posts = () => {

    let [posts, setPosts] = useState([{ id: 1, title: '', content: ''}])

    let [fetchingBlogPosts] = useFetching(async () => {
        console.log('Fetching blog posts was called')
        const response = await BlogService.getBlogPosts();
        setPosts(response.data)
        console.log(response.data)
    })

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
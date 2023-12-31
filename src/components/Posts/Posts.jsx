import React, {useEffect, useMemo, useRef, useState} from 'react';
import PostPreviewList from "./PostPreviewList";
import classes from "./Posts.module.css";
import {useFetching} from "../../hooks/useFetching";
import BlogService from "../../services/BlogService";
import {useObserver} from "../../hooks/useObserver";

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [limit]= useState(9);
    const [totalPages, setTotalPages] = useState(0);
    const lastElement = useRef();
    const postsToShow = useMemo(() => preparePosts(), [posts])



    let [fetchingBlogPosts, isPostsLoading] = useFetching(async (limit, page) => {
        console.log('Fetching blog posts was called')
        const response = await BlogService.getBlogPosts(limit, page);
        const totalCount = response.data.totalCount;
        setTotalPages(totalCount)
        let newPosts =  [...posts, ...response.data.posts].filter( (value, index, self) =>
            self.findIndex(v => v.id === value.id) === index
        );
        setPosts(newPosts)
    });

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1);
    })

    useEffect(() => {
        fetchingBlogPosts(limit, page);
    }, [limit, page]);


    function splitPosts (postsArr) {
        let chunks = [];
        const chunkSize = 9;
        for (let i = 0; i < postsArr.length; i += chunkSize) {
            const chunk = postsArr.slice(i, i + chunkSize);
            chunks.push(chunk);
        }
        return chunks;
    }

    function preparePosts() {
        if (posts && posts.length > 0) {
            console.log('Prepare posts called')
            posts.sort(function (a, b) {
                return new Date(b.creationDate) - new Date(a.creationDate);
            });
            console.log('After sort')
            console.log(posts)
            return splitPosts(posts);
        } else {
            return [];
        }
    }


    return (
                <main className={classes.posts}>
                    {
                        postsToShow.map((postsChunk, index) =>
                            <PostPreviewList posts={postsChunk} num={index} key = {index + 1}/>
                        )
                    }
                    <div ref={lastElement}></div>
                </main>
    );
};

export default Posts;
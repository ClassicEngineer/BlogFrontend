import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import BlogService from "../services/BlogService";
import MDEditor from "@uiw/react-md-editor";
import {useFetching} from "../hooks/useFetching";

const Post = () => {
    const params = useParams()
    const [post, setPost] = useState({});

    const [fetchPostById] = useFetching(async (id) => {
        const response = await BlogService.getPostById(id)
        if (response.data) {
            setPost(response.data);
        }
    });

    useEffect(() => {
        fetchPostById(params.id)
    }, []);

    return (
        <div className="App">
            <h2>{post.title}</h2>
            <div>
                <MDEditor.Markdown source={post.content} />
            </div>
        </div>
    );
};

export default Post;

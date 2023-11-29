import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import BlogService from "../services/BlogService";
import MDEditor from "@uiw/react-md-editor";

const Post = () => {
    const params = useParams()
    const [post, setPost] = useState({});

    const fetchPostById = async (id) => {
        const response = await BlogService.getPostById(id)
        setPost(response.data);
    };

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

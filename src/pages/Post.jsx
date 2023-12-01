import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import BlogService from "../services/BlogService";
import MDEditor from "@uiw/react-md-editor";
import {useFetching} from "../hooks/useFetching";
import classes from "./Pages.module.css";
import Editor from "../components/Editor/Editor";
import FormButton from "../components/UI/Button/FormButton";
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import IconButton from "../components/UI/IconButton/IconButton";


const Post = () => {
    const params = useParams()
    const [post, setPost] = useState({});
    const [isEdit, setIsEdit] = useState(false);
    const [md, setMd] = React.useState('');
    const navigate = useNavigate();

    const [fetchPostById] = useFetching(async (id) => {
        const response = await BlogService.getPostById(id)
        setPost(response.data);
        setMd(response.data.header + response.data.content);
        console.log("Fetch post by ID called. Is edit = " , isEdit)
    });

    useEffect(() => {
        fetchPostById(params.id)
        document.addEventListener('keydown', e => {
            if (e.ctrlKey && e.key === 's') {
                e.preventDefault();
                // Place your code here
            }
        });
    }, []);


    const save = () => {
        BlogService.updateBlogPost(params.id, md).then(response => navigate(`/posts/${response.data.id}`));
        // edit post and add it to all blog post by id
        setIsEdit(false);
        post.content = deleteHeader(md);
        setPost(post)
    }

    function deleteHeader(md) {
        let arr = md.split("---")
        console.log(arr)
        return arr[2];
    }

    return (
        <div className="App">
            {isEdit?
                <div className={classes.editorContainer}>
                    <h2>Edit post</h2>
                    <Editor fullscreen={true} preview={"live"} value = {md} onChange={setMd}/>
                    <FormButton onClick={save}>Save</FormButton>
                </div>
                :
            <div className={classes.viewContainer}>
                <h2>{post.title}</h2>
                <MDEditor.Markdown source={post.content} />
                <IconButton className = {classes.editButton}
                            onClick={() => setIsEdit(true)}
                            icon ={faPenToSquare} size={"3x"} />
            </div>
            }
        </div>
    );
};

export default Post;

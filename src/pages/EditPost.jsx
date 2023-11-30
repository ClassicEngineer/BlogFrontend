import React, {useContext, useEffect} from 'react';
import Editor from "../components/Editor/Editor";
import {useNavigate, useParams} from "react-router-dom";
import BlogService from "../services/BlogService";
import FormButton from "../components/UI/Button/FormButton";
import classes from "./Pages.module.css";
import {BlogContext} from "../context";

const EditPost = () => {
    const params = useParams();
    const {blogContext, setBlogContext} = useContext(BlogContext)
    const [md, setMd] = React.useState(blogContext.edit.header + blogContext.edit.content);
    const navigate = useNavigate();

    const save = () => {
        BlogService.updateBlogPost(params.id, md).then(response => navigate(`/posts/${response.data.id}`));
        // edit post and add it to all blog post by id
    }
    useEffect( () =>
        {
            document.addEventListener('keydown', e => {
                if (e.ctrlKey && e.key === 's') {
                    e.preventDefault();
                    // Place your code here
                    /// save()
                }
            });

        }
    );

    if (md === null) {
        setMd("BlogService.getPostById(params.id).data.content")
    }

    return (
        <div className={classes.editorContainer}>
            <h2>Edit post</h2>
            <Editor fullscreen={true} preview={"live"} value = {md} onChange={setMd}/>
            <FormButton onClick={save}>Save</FormButton>
        </div>
    );
};

export default EditPost;
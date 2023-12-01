import React from 'react';
import Editor from "../components/Editor/Editor";
import FormButton from "../components/UI/Button/FormButton";
import {useNavigate} from "react-router-dom";
import BlogService from "../services/BlogService";
import classes from "./Pages.module.css";

const AddPost = () => {

    const initialPostContent = '---\n' +
        'title: "Title"\n' +
        'date: ' + new Date().toDateString() + '\n' +
        'image: "image.jpg"\n' +
        'draft: false\n' +
        'tags:\n' +
        '  - tagA\n' +
        '---'
    const [value, setValue] = React.useState(() => initialPostContent);
    const navigate = useNavigate();


    const publish = (event) => {
        event.preventDefault();
        BlogService.addBlogPost(value).then(response => navigate(`/posts/${response.data.id}`));
        // add post to all blog post by id
    }

    return (
        <div className={classes.editorContainer}>
            <h2>Create new post</h2>
            <Editor preview={"edit"} value = {value} onChange={setValue}/>
            <FormButton className = {classes.publishButton} onClick={publish}>Publish</FormButton>
        </div>
    );
};

export default AddPost;
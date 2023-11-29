import React from 'react';
import classes from "./Editor.module.css";
import MDEditor from '@uiw/react-md-editor';
import FormButton from "../UI/Button/FormButton";
import BlogService from "../../services/BlogService";
import {useNavigate} from "react-router-dom";

const Editor = () => {

    const [value, setValue] = React.useState("**Hello world!!!**");
    const navigate = useNavigate();

    const publish = (event) => {
        event.preventDefault();
        console.log('Sending blog post to server: ' + value);
        BlogService.addBlogPost('Title', value);
        navigate('/');
    }


    return (
        <div className={classes.editorContainer}>
            <MDEditor
                value={value}
                onChange={setValue}
                height="100%"
            />


            <FormButton onClick={publish}>Publish</FormButton>
        </div>
    );
};

export default Editor;
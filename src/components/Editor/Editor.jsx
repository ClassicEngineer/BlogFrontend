import React, {useContext} from 'react';
import classes from "./Editor.module.css";
import MDEditor from '@uiw/react-md-editor';
import FormButton from "../UI/Button/FormButton";
import BlogService from "../../services/BlogService";
import {useNavigate} from "react-router-dom";
import {BlogContext} from "../../context";

const Editor = () => {

    const initialPostContent = '---\n' +
        'title: "Title"\n' +
        'date:' + new Date().toDateString() + '\n' +
        'image: "image.jpg"\n' +
        'draft: false\n' +
        'tags:\n' +
        '  - tagA\n' +
        '---'
    const [value, setValue] = React.useState(() => initialPostContent);
    const navigate = useNavigate();
    const {posts, setPosts} = useContext(BlogContext);


    const publish = (event) => {
        event.preventDefault();
         BlogService.addBlogPost(value).then(response => navigate(`/posts/${response.data.id}`));

    }


    return (
        <div className={classes.editorContainer}>
            <MDEditor
                value={value}
                onChange={setValue}
                preview={"edit"}
            />


            <FormButton onClick={publish}>Publish</FormButton>
        </div>
    );
};

export default Editor;
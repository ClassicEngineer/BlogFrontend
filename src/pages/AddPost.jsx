import React from 'react';
import {headingsPlugin, MDXEditor} from "@mdxeditor/editor";
import Editor from "../components/Editor/Editor";

const AddPost = () => {
    return (
        <div className={"App"}>
            <h2>Create new post</h2>
            <Editor/>
        </div>
    );
};

export default AddPost;
import React, {useContext} from 'react';
import PostPreview from "./PostPreview";
import classes from "./PreviewContainer.module.css";
import {useNavigate} from "react-router-dom";
import {AppContext} from "../../context";

const PostPreviewList = ({posts}) => {


    return (
        <div className={classes.cardContainer}>
            {
                posts.map( (post) => {
                    return <PostPreview post = {post}
                                        key={post.id}
                    />
                })
            }
        </div>
    );

};

export default PostPreviewList;
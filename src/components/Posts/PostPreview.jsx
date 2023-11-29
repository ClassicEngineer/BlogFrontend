import React from 'react';
import classes from './PostPreview.module.css'
import {useNavigate} from "react-router-dom";
const PostPreview = ({post}) => {
    const navigate = useNavigate()

    function goToPost() {
        navigate(`/posts/${post.id}`)
    }

    return (
        <div className={classes.postPreview}
                onClick={goToPost}>
                <img src={'https://i.pinimg.com/originals/f8/12/1b/f8121bde622218751169443053ee5ec5.gif'}
                     alt={'Default'}
                width='300px'
                height='100px'/>
                <h2>{post.title}</h2>
                <time dateTime='2023-11-27 09:00:00 +0300'>27.11.2023</time>
        </div>
    );
};

export default PostPreview;
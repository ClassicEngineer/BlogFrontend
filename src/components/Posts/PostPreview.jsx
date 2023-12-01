import React, {useContext} from 'react';
import classes from './PostPreview.module.css'
import {useNavigate} from "react-router-dom";
import {AppContext} from "../../context";
const PostPreview = ({post}) => {

    const {context, setContext} = useContext(AppContext);
    const navigate = useNavigate()

    function goToPost() {
        navigate(`/posts/${post.id}`)
    }

    return (
        <div className={context.isDark()? `${classes.postPreview} ${classes.dark}` : classes.postPreview}
                onClick={goToPost}>
                <img src={'https://i.pinimg.com/originals/f8/12/1b/f8121bde622218751169443053ee5ec5.gif'}
                     alt={'BlogPostPreviewImage'}
                width='300px'
                height='100px'/>
                <h2>{post.title}</h2>
                <time dateTime={post.creationDate.toString()}>{post.creationDate}</time>
        </div>
    );
};

export default PostPreview;
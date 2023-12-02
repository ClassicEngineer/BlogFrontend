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
                <img src={'http://localhost:8080/image/' + post.imgSrc}
                     alt={'BlogPostPreviewImage'}
                width='300px'
                height='100px'/>
                <h2>{post.title}</h2>
                <time dateTime={post.creationDate.toString()}>{post.creationDate}</time>
        </div>
    );
};

export default PostPreview;
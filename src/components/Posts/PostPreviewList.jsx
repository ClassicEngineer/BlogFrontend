import React from 'react';
import PostPreview from "./PostPreview";
import classes from "./PreviewContainer.module.css";

const PostPreviewList = ({posts, num}) => {

    return (
        <div id={'posts' + num} className={classes.previewList} style={{scrollSnapAlign: "start"}}>
            <div className={classes.cardContainer}>
                { posts.map( (post) => {
                        return <PostPreview post = {post} key={post.id}/>
                    })
                }
            </div>
        </div>
    );

};

export default PostPreviewList;
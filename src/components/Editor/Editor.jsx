import React, {useEffect, useState} from 'react';
import MDEditor from '@uiw/react-md-editor';
import classes from "./Editor.module.css";
import {useAsyncValue} from "react-router-dom";

const Editor = ({...props}) => {

    const [isFullscreen, setFullscreen] = useState(props.fullscreen);

    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                setFullscreen(!isFullscreen)
            }
        })
    })

    return (
        <div className={classes.editor}>
            <MDEditor
                {...props}
                height={400}
                autoFocus={true}
                fullscreen={isFullscreen}
            />
        </div>
    );
};

export default Editor;
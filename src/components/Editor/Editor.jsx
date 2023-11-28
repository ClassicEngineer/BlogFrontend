import React from 'react';
import classes from "./Editor.module.css";
const Editor = () => {

    function stylize(event) {
        if (event.target.value.includes('#')) {
               console.log('Heading')
        }
    }

    return (
        <div className={classes.editorContainer} onInput={stylize}>

        

        </div>
    );
};

export default Editor;
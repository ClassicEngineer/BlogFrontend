import React, {useEffect, useState} from 'react';
import classes from './ImageUpload.module.css'
const ImageUpload = () => {

    const [dragActive, setDragActive] = React.useState(false);
    // ref
    const inputRef = React.useRef(null);

    const acceptImages = "image/png, image/gif, image/jpeg, image/webp"
    // handle drag events
    const handleDrag = function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    // triggers when file is dropped
    const handleDrop = function(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFiles(e.dataTransfer.files);
        }
    };

    // triggers when file is selected with click
    const handleChange = function(e) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFiles(e.target.files);
        }
    };

    // triggers the input when the button is clicked
    const onButtonClick = () => {
        inputRef.current.click();
    };

    const handleFiles = (files) => {
        console.log(files)
    }

    return (
        <form className={classes.formFileUpload} onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
            <input className={classes.inputFileUpload} ref={inputRef} type="file"  id="input-file-upload" multiple={true} accept={acceptImages} onChange={handleChange}  />
            <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? classes.labelFileUploadDragActive : classes.labelFileUpload }>
                <div>
                    <p>Drag and drop your images here or</p>
                    <button className={classes.uploadButton} onClick={onButtonClick}>Upload an image</button>
                </div>
            </label>
            { dragActive && <div className={classes.dragFileElement} onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
        </form>
    );
};

export default ImageUpload;


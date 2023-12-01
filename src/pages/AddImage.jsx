import React, {useContext} from 'react';
import ImageUpload from "../components/ImageUpload/ImageUpload";
import {AppContext} from "../context";

const AddImage = () => {
    const {context, setContext} = useContext(AppContext);


    return (
        <div className={context.isDark()? "App dark" : "App"}>
            <h2>Add new image</h2>
            <ImageUpload/>
        </div>
    );
};

export default AddImage;
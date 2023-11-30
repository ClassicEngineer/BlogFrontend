import React from 'react';
import classes from "./EditButton.module.css";
import LinkButton from "../UI/LinkButton/LinkButton";
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons";
const EditButton = ({postId}) => {
    return (
        <div className={classes.editButton}>
            <LinkButton to={`/editPost/${postId}`} icon ={faPenToSquare} size={"3x"}/>
        </div>
    );
};

export default EditButton;
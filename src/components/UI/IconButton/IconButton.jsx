import React from 'react';
import classes from "./IconButton.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const IconButton = ({...props}) => {
    return (
        <FontAwesomeIcon {...props}
                         size={props.size || "2x"}
                         className={classes.codeButton}
        />

    );
};

export default IconButton;
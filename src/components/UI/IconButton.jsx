import React from 'react';
import classes from "./IconButton.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const IconButton = (props) => {
    return (
        <FontAwesomeIcon icon={props.faIcon}
                         size={props.size || "2x"}
                         onClick={props.onClick}
                         className={classes.codeButton}
        />

    );
};

export default IconButton;
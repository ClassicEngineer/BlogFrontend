import React, {useContext} from 'react';
import classes from "./IconButton.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {AppContext} from "../../../context";

const IconButton = ({...props}) => {
    const {context} = useContext(AppContext);


    return (
        props.hide ? <></> : <FontAwesomeIcon {...props}
                         size={props.size || "2x"}
                         style={ context.isDark()? {color: "#f6f5f4",} : {color: "#000000"}}
                         className={ props.className ? props.className : classes.codeButton}
        />

    );
};

export default IconButton;
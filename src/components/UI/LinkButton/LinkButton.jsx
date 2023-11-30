import React from 'react';
import {Link} from "react-router-dom";
import IconButton from "../IconButton/IconButton";

const LinkButton = ({children, ...props}) => {
    const isNotAlreadyOpened = (path) => {
        return path !== window.location.pathname
    }

    return (
        isNotAlreadyOpened(props.to) &&
        <Link to={props.to} >
            <IconButton {...props} > {children}</IconButton>
        </Link>

    );
};

export default LinkButton;
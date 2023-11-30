import React from 'react';
import IconButton from "../IconButton/IconButton";
import classes from "./IconDropdown.module.css";


const IconDropdown = ({children, ...props}) => {
    return (
            <div className={classes.dropdown}>
                <IconButton faIcon = {props.faIcon}></IconButton>
                <div className={classes.item}>
                    {children}
                </div>

            </div>

    );
};

export default IconDropdown;
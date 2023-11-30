import React from 'react';
import IconButton from "../IconButton/IconButton";
import classes from "./IconDropdown.module.css";


const IconDropdown = ({children, ...props}) => {
    return (
            <div className={classes.dropdown}>
                <IconButton {...props}/>
                <div className={classes.item}>
                    {children}
                </div>

            </div>

    );
};

export default IconDropdown;
import React from 'react';
import classes from "./Toggle.module.css";

const Toggle = ({onChange, checked}) => {
    return (
            <label className={classes.switch}>
                <input onChange={onChange} checked={checked} type="checkbox"/>
                    <span className={classes.slider}></span>
            </label>
    );
};

export default Toggle;
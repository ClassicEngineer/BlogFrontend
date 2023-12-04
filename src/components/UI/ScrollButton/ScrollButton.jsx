import React, {useEffect, useState} from 'react';
import IconButton from "../IconButton/IconButton";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import classes from "./ScrollButton.module.css";

const ScrollButton = ({scrollTo}) =>{

    const scrollToTop = () => {
        console.log(scrollTo)
        document.querySelector(scrollTo).scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
            <IconButton
                className={classes.buttonToTop}
                onClick={scrollToTop}
                icon={faArrowUp}
            />
    );
}

export default ScrollButton;

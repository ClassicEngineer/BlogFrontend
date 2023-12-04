import React, {useContext} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import classes from './Footer.module.css'
import {AppContext} from "../../context";

const Footer = () => {
    const {context} = useContext(AppContext);


    return (
        <footer className={context.isDark()? `${classes.footer} ${classes.dark}` : classes.footer}>
            <pre>Made with <FontAwesomeIcon icon={faHeart} style={{color: "#e01b24",}} /> by <a href={'https://classic-developer.com/'}>Danilo</a></pre>
        </footer>
    );
};

export default Footer;
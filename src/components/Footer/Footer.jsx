import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import classes from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <pre>Made with <FontAwesomeIcon icon={faHeart} style={{color: "#e01b24",}} /> by <a href={'https://classic-developer.com/'}>Danilo</a></pre>
        </footer>
    );
};

export default Footer;
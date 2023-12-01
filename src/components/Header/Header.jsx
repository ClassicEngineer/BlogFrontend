import React, {useCallback, useContext, useEffect, useState} from 'react';
import classes from "./Header.module.css";
import BlogService from "../../services/BlogService";
import FeatureTab from "../FeatureTab/FeatureTab";
import {Link} from "react-router-dom";
import {useFetching} from "../../hooks/useFetching";
import {AppContext} from "../../context";

const Header = () => {
    const {context, setContext} = useContext(AppContext);
    let [blogName, setBlogName] = useState('Blog');

    const [fetchingBlogProperties] = useFetching(async () => {
        console.log('Fetching blog properties was called')// when is it should be called?
        const response = await BlogService.getBlogProperties();
        let blogName = response.data['blogName'];
        setBlogName(blogName)
        document.title = blogName;
    });


    useEffect(() => {
       fetchingBlogProperties()
    }, [])

    return (
        <header className={ context.isDark()? `${classes.header} ${classes.dark}` : classes.header}>
            <Link to="/"><h1>{blogName}</h1></Link>
            <FeatureTab/>
        </header>
    );
};

export default Header;
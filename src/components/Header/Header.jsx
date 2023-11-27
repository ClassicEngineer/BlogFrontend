import React, {useEffect, useState} from 'react';
import classes from "./Header.module.css";
import BlogService from "../../services/BlogService";
import {useFetching} from "../../hooks/useFetching";
import FeatureTab from "../FeatureTab/FeatureTab";
import {Link} from "react-router-dom";

const Header = () => {

    let [blogName, setBlogName] = useState('Blog');

    let [fetchingBlogProperties] = useFetching(async () => {
        console.log('Fetching blog properties was called')// when is it should be called?
        const response = await BlogService.getBlogProperties();
        setBlogName(response.data['blogName'])
    })


    useEffect(() => {
        fetchingBlogProperties()
    }, [])

    return (
        <header className={classes.header}>
            <Link to="/"><h1>{blogName}</h1></Link>
            <FeatureTab/>
        </header>
    );
};

export default Header;
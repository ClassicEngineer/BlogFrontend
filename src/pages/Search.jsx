import React, {useEffect, useState} from 'react';
import classes from "./Pages.module.css";
import IconButton from "../components/UI/IconButton/IconButton";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import PostPreviewList from "../components/Posts/PostPreviewList";
import {useFetching} from "../hooks/useFetching";
import BlogService from "../services/BlogService";

const Search = () => {

    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('')


    const search = (input) => {
        BlogService.search(input).then(response => setPosts(response.data))
        setInput('');
    };


    return (
        <div className={classes.searchContainer}>
            <h2>Search</h2>
            <div className={classes.bar}>
                <input className={classes.searchBar} type="text" title="Search" value={input} onChange={(e) => setInput(e.target.value)}/>
                <IconButton className = {classes.searchIcon} icon={faMagnifyingGlass} onClick = { () => search(input)}/>
            </div>
            <PostPreviewList posts={posts}/>
        </div>
    );
};

export default Search;
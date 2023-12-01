import React from 'react';
import classes from "./Pages.module.css";
import IconButton from "../components/UI/IconButton/IconButton";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import PostPreviewList from "../components/Posts/PostPreviewList";

const Search = () => {
    return (
        <div className="App">
            <h2>Search</h2>
            <div className={classes.bar}>
                <input className={classes.searchBar} type="text" title="Search"/>
                <IconButton className = {classes.searchIcon} icon={faMagnifyingGlass}/>
                <PostPreviewList posts={[]}/>
            </div>
        </div>
    );
};

export default Search;
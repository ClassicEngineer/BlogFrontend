import React, {useState} from 'react';
import FeaturePanel from "./FeaturePanel";
import classes from "./FeatureTab.module.css";
import {faCode} from "@fortawesome/free-solid-svg-icons";
import IconButton from "../UI/IconButton/IconButton";


const FeatureTab = () => {

    let [visible, setVisible] = useState(false);

    function toggleFeaturesPanel () {
        setVisible(!visible)
    }

    return (
        <div className={classes.tab}>
                <FeaturePanel visibility={visible}/>
                <IconButton onClick = {toggleFeaturesPanel} icon = {faCode}/>
        </div>
    );
};

export default FeatureTab;
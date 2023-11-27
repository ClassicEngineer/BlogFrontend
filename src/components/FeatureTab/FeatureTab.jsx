import React, {useState} from 'react';
import FeaturePanel from "./FeaturePanel";
import classes from "./FeatureTab.module.css";
import IconButton from "../UI/IconButton";
import {faCode} from "@fortawesome/free-solid-svg-icons";


const FeatureTab = () => {

    let [visible, setVisible] = useState(false);

    function openFeaturesPanel () {
        setVisible(!visible)
    }

    return (
        <div className={classes.tab}>
                <FeaturePanel visible={visible}/>
                <IconButton onClick = {openFeaturesPanel}
                            faIcon = {faCode}/>
        </div>
    );
};

export default FeatureTab;
import React from 'react';
import {
    faChartSimple,
    faGear,
    faMagnifyingGlass,
    faMoon, faPlus,
    faQuestion,
    faRightToBracket,
    faSun
} from "@fortawesome/free-solid-svg-icons";
import classes from "./FeaturePanel.module.css";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import IconButton from "../UI/IconButton";

const FeaturePanel = (props) => {
    function openLoginPage() {

    }

    function openSettingsPage() {

    }

    let openSearchPage = () => {

    }

    let openModalQuestion = () => {
    }

    function openGithubProjectPage() {
        window.open('https://github.com/stars/ClassicEngineer/lists/blog', '_blank').focus();
    }

    if (props.visible) {
        return (<div className={props.visible? classes.panel: 'none'}>
            <div className={classes.panel}>

                <IconButton faIcon={faRightToBracket}
                            onClick = {openLoginPage}
                />
                <IconButton faIcon={faGear}
                            onClick = {openSettingsPage}
                />

                <IconButton faIcon={faGithub}
                            onClick = {openGithubProjectPage}
                />
                <IconButton faIcon={faMagnifyingGlass}
                            onClick = {openSearchPage}
                />

                {/*add post, private function*/}
                <IconButton faIcon={faPlus}/>

                {/*<FontAwesomeIcon icon={faSun}*/}
                {/*                 size={iconSize}/>*/}

                {/*<FontAwesomeIcon icon={faMoon}*/}
                {/*                 size={iconSize}/>*/}

                <IconButton faIcon={faQuestion}
                            onClick = {openModalQuestion}
                />
                <IconButton faIcon={faChartSimple}
                />
            </div>
        </div>);
    } else {
        return (<div></div>);
    }

}


export default FeaturePanel;
import React, {useState} from 'react';
import {
    faChartSimple,
    faGear, faHouse,
    faMagnifyingGlass,
    faMoon, faPlus,
    faQuestion,
    faRightToBracket,
    faSun
} from "@fortawesome/free-solid-svg-icons";
import classes from "./FeaturePanel.module.css";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import IconButton from "../UI/IconButton/IconButton";
import {useNavigate} from "react-router-dom";
import ModalView from "../UI/ModalView/ModalView";
import About from "./About";

const FeaturePanel = (props) => {
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);

    function openLoginPage() {
        navigate('/login')
        iconsList['home'].show = true;
        iconsList['login'].show = false;
        setIconsList(iconsList); // not working as expected
    }

    function openSettingsPage() {
        navigate('/settings', { replace: true })
    }

    let openSearchPage = () => {
        navigate('/search', { replace: true })
    }

    let openStatsPage = () => {
        navigate('/stats', { replace: true })

    }

    let openModalQuestion = () => {
        setModal(true);
    }

    function openGithubProjectPage() {
        window.open('https://github.com/stars/ClassicEngineer/lists/blog', '_blank').focus();
    }

    const home = <IconButton
        faIcon = {faHouse}
    />

    const search = <IconButton faIcon={faMagnifyingGlass}
                                   onClick = {openSearchPage}
    />

    const login = <IconButton faIcon={faRightToBracket}
                onClick = {openLoginPage}
    />

    const settings = <IconButton faIcon={faGear}
                onClick = {openSettingsPage}
    />

    const github = <IconButton faIcon={faGithub}
                onClick = {openGithubProjectPage}
    />

    {/*add post, private function*/}
    const addPost = <IconButton faIcon={faPlus}/>

    const about = <IconButton faIcon={faQuestion}
                onClick = {openModalQuestion}
    />
    const stats = <IconButton faIcon={faChartSimple}
                onClick = {openStatsPage}
    />


    const icons = {
        login: {
            icon: login,
            show: true
        },
        settings : {
            icon: settings,
            show: true
        },
        home: {
            icon: home,
            show: false
        },
        search: {
            icon: search,
            show: true
        },
        addPost: {
            icon: addPost,
            show: false
        },
        stats: {
            icon: stats,
            show: true,
        },
        about: {
            icon: about,
            show: true,
        },
        github: {
            icon: github,
            show: true,
        }

    }

    const [iconsList, setIconsList] = useState(icons); // is it legal?


    if (props.visible) {
        return (
            <div className={classes.panel}>
                <ModalView visible={modal} setVisible={setModal}>
                    <About/>
                </ModalView>
                {
                    Object.values(iconsList)
                        .filter( v => v.show)
                        .map(v => v.icon)
                }
        </div>);
    } else {
        return (<div>

        </div>);
    }

}


export default FeaturePanel;
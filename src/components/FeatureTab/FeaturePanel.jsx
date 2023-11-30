import React, {useContext, useEffect, useState} from 'react';
import {
    faChartSimple, faFilePen,
    faGear, faHouse, faImage, faLock,
    faMagnifyingGlass,
    faMoon, faPlus,
    faQuestion,
    faRightToBracket,
    faSun
} from "@fortawesome/free-solid-svg-icons";
import classes from "./FeaturePanel.module.css";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import IconButton from "../UI/IconButton/IconButton";
import {Link, useNavigate} from "react-router-dom";
import ModalView from "../UI/ModalView/ModalView";
import About from "./About";
import {AuthContext} from "../../context";
import IconDropdown from "../UI/IconDropdown/IconDropdown";

const FeaturePanel = (props) => {
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
        navigate('/', {replace: true})
    }
    function openLoginPage() {
        navigate('/login', {replace: true})
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

    const home = <Link to={"/"} key={0}>
        <IconButton faIcon = {faHouse}/>
    </Link>

    const search = <IconButton faIcon={faMagnifyingGlass}
                                   onClick = {openSearchPage}
                               key ={1}
    />

    const login = <IconButton faIcon={faRightToBracket}
                              onClick = {openLoginPage}
                              key = {2}
    />

    const settings = <IconButton faIcon={faGear}
                                 onClick = {openSettingsPage}
                                 key={3}
    />

    const github = <IconButton faIcon={faGithub}
                onClick = {openGithubProjectPage}
                               key = {4}
    />



    const lock = <IconButton faIcon={faLock}
                                      onClick={logout}
                             key = {5}

    />

    const about = <IconButton faIcon={faQuestion}
                onClick = {openModalQuestion}
                              key = {6}
    />
    const stats = <IconButton faIcon={faChartSimple}
                onClick = {openStatsPage}
                              key = {7}
    />

    {/*add smth, private function*/}
    const add = <IconDropdown faIcon={faPlus}
                              key = {10}>
        <Link
            to={"/addPost"}
            key = {8}>
            <IconButton faIcon={faFilePen}/>
        </Link>
        <Link
            to={"/addImage"}
            key = {9}>
            <IconButton faIcon={faImage}/>
        </Link>
    </IconDropdown>

    const icons = {
        home: {
            icon: home,
            show: false
        },
        login: {
            icon: login,
            show: true
        },
        lock: {
            icon: lock,
            show: false,
        },
        settings : {
            icon: settings,
            show: true
        },
        search: {
            icon: search,
            show: true
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
        },
        add: {
            icon: add,
            show: false,
        },
    }


    if (props.visible) {

        icons['home'].show = window.location.pathname !== '/';
        icons['lock'].show = isAuth;
        icons['add'].show = isAuth;
        icons['login'].show = !isAuth;
        icons['about'].show = !isAuth;
        icons['github'].show = !isAuth;

        return (
            <div className={classes.panel}>
                <ModalView visible={modal} setVisible={setModal}>
                    <About/>
                </ModalView>
                {
                    Object.keys(icons)
                        .filter( key => icons[key].show)
                        .filter(key => '/' + key !== window.location.pathname)
                        .map(key => icons[key].icon)
                }
        </div>);
    } else {
        return (<div>

        </div>);
    }

}


export default FeaturePanel;
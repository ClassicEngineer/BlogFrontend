import React, {useContext, useState} from 'react';
import {
    faChartSimple, faFilePen,
    faGear, faHouse, faImage, faLock,
    faMagnifyingGlass,
    faPlus,
    faQuestion,
    faRightToBracket,

} from "@fortawesome/free-solid-svg-icons";
import classes from "./FeaturePanel.module.css";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import IconButton from "../UI/IconButton/IconButton";
import {useNavigate} from "react-router-dom";
import ModalView from "../UI/ModalView/ModalView";
import About from "./About";
import {AuthContext} from "../../context";
import IconDropdown from "../UI/IconDropdown/IconDropdown";
import LinkButton from "../UI/LinkButton/LinkButton";

const FeaturePanel = (props) => {
    const gitHubPage = 'https://github.com/stars/ClassicEngineer/lists/blog';

    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    const {isAuth, setIsAuth} = useContext(AuthContext);

    return (
            Boolean(props.visibility) &&
            <div className={classes.panel}>
            <ModalView visible={modal} setVisible={setModal}>
                <About/>
            </ModalView>
                <LinkButton to={"/"} icon={faHouse}/>
                {!isAuth && <LinkButton to={"/login"} icon={faRightToBracket}/>}
                {isAuth && <IconButton icon={faLock}
                            onClick={() => {
                                setIsAuth(false);
                                localStorage.removeItem('auth');
                                navigate('/');
                            }}
                />
                }
                {!isAuth && <IconButton icon={faQuestion} onClick = { () => setModal(true)}/> }
                {!isAuth && <LinkButton to={gitHubPage} icon={faGithub} /> }

                <LinkButton to={"/settings"} icon={faGear}/>
                <LinkButton to={"/search"} icon={faMagnifyingGlass}/>
                <LinkButton to={"/stats"} icon={faChartSimple}/>
                {isAuth &&
                <IconDropdown icon={faPlus}>
                    <LinkButton to={'/addPost'} icon={faFilePen}/>
                    <LinkButton to={'/addImage'} icon={faImage}/>
                </IconDropdown>
                }
        </div>);

}


export default FeaturePanel;
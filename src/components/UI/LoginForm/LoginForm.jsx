import React, {useContext, useState} from "react";
import classes from "./LoginForm.module.css";
import {AppContext} from "../../../context";
import {useNavigate} from "react-router-dom";
import FormButton from "../Button/FormButton";


const LoginForm = (props) => {

    const [login, setLogin] = useState('admin'); // Declare a state variable...
    const [password, setPassword] = useState('admin'); // Declare a state variable...
    const {context, setContext} = useContext(AppContext);
    const navigate = useNavigate();
    const signin = (event) => {
        event.preventDefault();
        //TODO: go to server and validate
        setContext(state => ({...state, auth: true}));
        localStorage.setItem('auth', 'true')
        navigate('/')
    }

    return (
        <form onSubmit={signin}>
            <div className={classes.formContainer}>
                <label >
                    Login
                </label>
                <input type={"text"} placeholder={"username"}
                       value={login}
                       onChange={e => setLogin(e.target.value)}
                ></input>
                <label>
                    Password
                </label>
                <input type={"password"}
                       value={password}
                       onChange={e => setPassword(e.target.value)}
                ></input>

                <FormButton>Sign in</FormButton>
            </div>
        </form>
    );
};

export default LoginForm;
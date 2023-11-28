import React, {useContext, useState} from "react";
import classes from "./LoginForm.module.css";
import {AuthContext} from "../../../context";
import {useNavigate} from "react-router-dom";


const LoginForm = (props) => {

    const [login, setLogin] = useState('admin'); // Declare a state variable...
    const [password, setPassword] = useState('admin'); // Declare a state variable...
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const navigate = useNavigate();
    const signin = (event) => {
        event.preventDefault();
        // go to server
        setIsAuth(true);
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

                <button>Sign in</button>
            </div>
        </form>
    );
};

export default LoginForm;
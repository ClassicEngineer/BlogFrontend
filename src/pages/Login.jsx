import React from 'react';
import Header from "../components/Header/Header";
import LoginForm from "../components/UI/LoginForm/LoginForm";

const Login = () => {
    return (
        <div className="App">
            <h2>Sign In</h2>
            <LoginForm/>
        </div>
    );
};

export default Login;
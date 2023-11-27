import React from "react";
import classes from "./LoginForm.module.css";


const LoginForm = (props) => {
    return (
        <form>
            <div className={classes.formContainer}>
                <label >
                    Login
                </label>
                <input type={"text"}></input>
                <label>
                    Password
                </label>
                <input type={"password"}></input>

                <button>Sign in</button>
            </div>
        </form>
    );
};

export default LoginForm;
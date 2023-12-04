import React, {useContext, useEffect, useState} from 'react';
import Toggle from "../components/UI/Toggle/Toggle";
import classes from "./Pages.module.css";
import {AppContext} from "../context";
import ThemeService from "../services/ThemeService";

const Settings = () => {

    const {context, setContext} = useContext(AppContext);
    const [isDark, setIsDark] = useState(Boolean(context.theme === 'dark' || false));

    console.log('Rendering settings with context: ')
    console.log(context)

    useEffect(() => {
        let theme = ThemeService.changeTheme(isDark)
        setContext(state => ({...state, theme: theme}));

    }, [isDark]);


    // const systemPrefersDark = useMediaQuery(
    //     {
    //         query: "(prefers-color-scheme: dark)",
    //     },
    //     undefined,
    //     (isSystemDark) => setIsDark(isSystemDark)
    // );


    return (
        <div className="App">
            <h2>Settings</h2>
            <div className={classes.settingsContainer}>
                <label className={classes.settingsLabel}>Dark mode</label>
                    <Toggle
                        checked={isDark}
                        onChange={() => {setIsDark(!isDark)}}
                    />

            </div>
        </div>
    );
};

export default Settings;


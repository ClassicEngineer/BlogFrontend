import './App.css';

import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {useEffect, useState} from "react";
import {AppContext} from "./context";
import AppRouter from "./components/Router/AppRouter";
import ThemeService from "./services/ThemeService";
function App() {

    const [context, setContext] = useState({
        auth:false,
        theme: localStorage.getItem('theme'),
        isDark: function (){ return this.theme === 'dark'},
    });

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        const isAuth = Boolean(localStorage.getItem('auth'));
        setContext(state => ({...state, auth: isAuth, theme: theme}));
        ThemeService.changeTheme(context.isDark())
    }, [])

    console.log('App rendering with context:');
    console.log(context)

    return (
        <AppContext.Provider value={{
            context,
            setContext,
        }}>
                <BrowserRouter>
                    <Header/>
                    <AppRouter/>
                    <Footer/>
                 </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;

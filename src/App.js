import './App.css';

import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Error from "./pages/Error";
import Statistics from "./pages/Statistics";
import Search from "./pages/Search";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {useEffect, useState} from "react";
import {AuthContext} from "./context";
import AddPost from "./pages/AddPost";
import AppRouter from "./components/Router/AppRouter";
function App() {

    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
        }}>
        <BrowserRouter>
            <Header/>
            <AppRouter/>
            <Footer/>
        </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;

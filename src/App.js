import './App.css';


import {BrowserRouter, useParams} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {useEffect, useState} from "react";
import {AuthContext, BlogContext} from "./context";
import AppRouter from "./components/Router/AppRouter";
import {useFetching} from "./hooks/useFetching";
import BlogService from "./services/BlogService";
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

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
            <Routes>
                <Route path="/"  element={<Home/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/settings" element={<Settings/>}></Route>
                <Route path="/error" element={<Error/>}></Route>
                <Route path="/stats" element={<Statistics/>}></Route>
                <Route path="/search" element={<Search/>}></Route>
                <Route path="/addPost" element={<AddPost/>}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;

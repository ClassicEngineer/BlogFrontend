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
import {AuthContext, BlogContext} from "./context";
import AddPost from "./pages/AddPost";
import AppRouter from "./components/Router/AppRouter";
import {useFetching} from "./hooks/useFetching";
import BlogService from "./services/BlogService";
function App() {

    const [isAuth, setIsAuth] = useState(false);
    const [posts, setPosts] = useState([]);

    let [fetchingBlogPosts]= useFetching(async () => {
        console.log('Fetching blog posts was called')
        const response = await BlogService.getBlogPosts();
        setPosts(response.data)
    });

    useEffect(() => {
        fetchingBlogPosts()
    }, []);

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
            <BlogContext.Provider value={{
                posts,
                setPosts
            }}>
                <BrowserRouter>
                    <Header/>
                    <AppRouter/>
                    <Footer/>
                 </BrowserRouter>
            </BlogContext.Provider>
        </AuthContext.Provider>
    );
}

export default App;

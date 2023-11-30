import './App.css';


import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {useEffect, useState} from "react";
import {AuthContext, BlogContext} from "./context";
import AppRouter from "./components/Router/AppRouter";
import {useFetching} from "./hooks/useFetching";
import BlogService from "./services/BlogService";
function App() {

    const [isAuth, setIsAuth] = useState(false);
    const [blogContext, setBlogContext] = useState({posts: [], edit: {}});

    let [fetchingBlogPosts]= useFetching(async () => {
        console.log('Fetching blog posts was called')
        const response = await BlogService.getBlogPosts();
        setBlogContext({posts: response.data, edit: {}})
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
                blogContext,
                setBlogContext
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

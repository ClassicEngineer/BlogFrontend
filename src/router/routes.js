import AddPost from "../pages/AddPost";
import Login from "../pages/Login";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Settings from "../pages/Settings";
import Statistics from "../pages/Statistics";
import Post from "../pages/Post";
import AddImage from "../pages/AddImage";


export const publicRoutes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/error', component: Error},
    {path: '/search', component: Search},
    {path: '/settings', component: Settings},
    {path: '/stats', component: Statistics},
    {path: '/posts/:id', component: Post},
    {path: '*', component: Error}
]

export const privateRoutes = [
    {path: '/addPost', component: AddPost},
    {path: '/addImage', component: AddImage},
    ...publicRoutes,
]


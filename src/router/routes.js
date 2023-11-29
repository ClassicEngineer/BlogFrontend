import AddPost from "../pages/AddPost";
import Login from "../pages/Login";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Settings from "../pages/Settings";
import Statistics from "../pages/Statistics";


export const publicRoutes = [
    {path: '/login', component: Login},
    {path: '/error', component: Error},
    {path: '/', component: Home},
    {path: '/search', component: Search},
    {path: '/settings', component: Settings},
    {path: '/stats', component: Statistics},
]

export const privateRoutes = [
    {path: '/addPost', component: AddPost},
    ...publicRoutes,
]


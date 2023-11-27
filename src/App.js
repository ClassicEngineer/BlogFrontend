import './App.css';

import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Error from "./pages/Error";
import Statistics from "./pages/Statistics";
import Search from "./pages/Search";
function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Home/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/settings" element={<Settings/>}></Route>
                <Route path="/error" element={<Error/>}></Route>
                <Route path="/stats" element={<Statistics/>}></Route>
                <Route path="/search" element={<Search/>}></Route>
            </Routes>
        </BrowserRouter>

    );
}

export default App;

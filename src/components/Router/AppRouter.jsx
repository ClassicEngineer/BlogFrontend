import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {AuthContext} from "../../context";
import {privateRoutes, publicRoutes} from "../../router/routes";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);


    function buildRoutes(routes) {
        return routes.map(route =>
            <Route
                element={<route.component/>}
                path={route.path}
                key={route.path}
            />
        )}

    return (
            <Routes>
                {buildRoutes(isAuth? privateRoutes : publicRoutes)}
            </Routes>
    );
};

export default AppRouter;

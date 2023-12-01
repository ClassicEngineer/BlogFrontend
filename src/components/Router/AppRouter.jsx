import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../../router/routes";
import {AppContext} from "../../context";
const AppRouter = () => {
    const {context, setContext} = useContext(AppContext);

    console.log('Router rendering with context: ');
    console.log(context)

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
                {buildRoutes(context.auth? privateRoutes : publicRoutes)}
            </Routes>
    );
};

export default AppRouter;

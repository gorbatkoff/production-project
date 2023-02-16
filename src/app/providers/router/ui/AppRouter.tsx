import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map((r) => (
                    <Route
                        key={r.path}
                        path={r.path}
                        element={
                            <div className='page-wrapper'>
                                {r.element}
                            </div>
                        }
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;

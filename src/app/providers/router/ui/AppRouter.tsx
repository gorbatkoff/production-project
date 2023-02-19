import React, {Suspense} from "react"
import {Route, Routes} from "react-router-dom"
import {routeConfig} from "shared/config/routeConfig/routeConfig"
import {PageLoader} from "widgets/PageLoader";

const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(r => (
            <Route
                key={r.path}
                path={r.path}
                element={
                    (
                        <Suspense fallback={<PageLoader />}>
                            <div className='page-wrapper'>
                                {r.element}
                            </div>
                        </Suspense>
                    )}
            />
        ))}
    </Routes>
)

export default AppRouter

import React, {memo, Suspense, useMemo} from "react"
import {Route, Routes} from "react-router-dom"
import {routeConfig} from "shared/config/routeConfig/routeConfig"
import {PageLoader} from "widgets/PageLoader";
import {useSelector} from "react-redux";
import {getUserAuthData} from "entities/User";

const AppRouter = () => {

    const isAuth = useSelector(getUserAuthData)

    const routes = useMemo(() => {
        return Object.values(routeConfig).filter((route) => {
            return !(route.authOnly && !isAuth);
        })
    }, [isAuth])

    return (
        <Routes>
            {routes.map(r => (
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
}

export default memo(AppRouter)

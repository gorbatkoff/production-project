import {Suspense, useEffect} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import {useTheme} from "./providers/ThemeProvider"
import {AppRouter} from "./providers/router"
import {Navbar} from "widgets/Navbar"
import {Sidebar} from "widgets/Sidebar"
import {useDispatch, useSelector} from "react-redux";
import {getUserInited, userActions} from "entities/User";

const App = () => {
    const {theme} = useTheme();
    const dispatch = useDispatch();

    const mounted = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback='Loading...'>
                <Navbar/>
                <div className='content-page'>
                    <Sidebar/>
                    {mounted && (<AppRouter/>)}
                </div>
            </Suspense>
        </div>
    )
}

export default App

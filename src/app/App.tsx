import {Suspense, useEffect} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import {useTheme} from "./providers/ThemeProvider"
import {AppRouter} from "./providers/router"
import {Navbar} from "widgets/Navbar"
import {Sidebar} from "widgets/Sidebar"
import {useDispatch} from "react-redux";
import {userActions} from "entities/User";

const App = () => {
    const {theme} = useTheme();

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback='Loading...'>
                <Navbar/>
                {/*<button onClick={() => setIsOpen(true)}>toggle</button>*/}
                <div className='content-page'>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}

export default App

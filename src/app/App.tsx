import {Suspense} from "react"

import "./styles/index.scss"

import {classNames} from "shared/lib/classNames/classNames"
import {useTheme} from "app/providers/ThemeProvider"
import {AppRouter} from "app/providers/router"
import {Navbar} from "widgets/Navbar"
import {Sidebar} from "widgets/Sidebar"
import i18n from "i18next";

const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback='Loading...'>
                <Navbar/>
                <div className='content-page'>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}

export default App

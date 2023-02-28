import {Suspense, useEffect, useState} from "react"

import {classNames} from "shared/lib/classNames/classNames"
import {useTheme} from "app/providers/ThemeProvider"
import {AppRouter} from "app/providers/router"
import {Navbar} from "widgets/Navbar"
import {Sidebar} from "widgets/Sidebar"
import {Modal} from "shared/ui/Modal/Modal";

const App = () => {
    const {theme} = useTheme();


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

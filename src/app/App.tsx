import {Suspense, useContext, useState} from 'react';

import './styles/index.scss'

import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

import {useTranslation} from "react-i18next";


const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="Loading...">
                <Navbar/>
                <div className="content-page">

                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;

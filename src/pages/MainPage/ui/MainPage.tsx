import React, {useState} from "react"
import {useTranslation} from "react-i18next"
import {Input} from "shared/ui/Input/Input";

const MainPage = () => {
    const {t, i18n} = useTranslation("main")

    return (
        <div>
            {t("Главная страница")}
        </div>
    )
}

export default MainPage

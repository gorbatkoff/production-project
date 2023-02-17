import React from "react"
import {useTranslation} from "react-i18next"

const MainPage = () => {
    const {t, i18n} = useTranslation("main")

    return (
        <div>
            {t("Главная страница")}
            <br/>
            {t("Дополнительная информация")}
        </div>
    )
}

export default MainPage

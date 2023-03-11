import React, {memo} from "react"
import {useTranslation} from "react-i18next"

const AboutPage = memo(() => {
    const {t, i18n} = useTranslation("about")

    return (
        <div>
            {t("О Сайте")}
        </div>
    )
})

export default AboutPage

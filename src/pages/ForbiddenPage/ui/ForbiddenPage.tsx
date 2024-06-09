import React, {memo} from "react"
import {useTranslation} from "react-i18next"
import {Page} from "widgets/Page/Page";

const ForbiddenPage = memo(() => {
    const {t, i18n} = useTranslation()

    return (
        <Page>
            {t("У вас нет доступа")}
        </Page>
    )
})

export default ForbiddenPage;
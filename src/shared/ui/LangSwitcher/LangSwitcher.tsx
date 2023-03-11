import {useTranslation} from "react-i18next"
import {Button, ButtonTheme} from "shared/ui/Button/Button"
import {classNames} from "shared/lib/classNames/classNames"
import styles from "shared/ui/AppLink/AppLink.module.scss"
import {memo} from "react";

type LangSwitcherProps = {
    className?: string;
    short?: boolean;
};

export const LangSwitcher = memo(({className, short}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation()

    const toggle = async () => {
        await i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
    }

    return (
        <Button theme={ButtonTheme.CLEAR} onClick={toggle}
            className={classNames(styles.AppLink, {}, [className])}
        >
            {t(short ? "Короткое название" : "Язык")}
        </Button>
    )
})

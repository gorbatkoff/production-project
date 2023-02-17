import {useTranslation} from "react-i18next"
import {Button, ThemeButton} from "shared/ui/Button/Button"
import {classNames} from "shared/lib/classNames/classNames"
import styles from "shared/ui/AppLink/AppLink.module.scss"

type LangSwitcherProps = {
	className?: string;
};

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation()

    const toggle = async () => {
        await i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
    }

    return (
        <Button theme={ThemeButton.CLEAR} onClick={toggle}
            className={classNames(styles.AppLink, {}, [className])}
        >
            {t("Язык")}
        </Button>
    )
}

import {classNames} from "shared/lib/classNames/classNames"

import styles from "./Navbar.module.scss"
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink"
import {useTranslation} from "react-i18next";

type NavbarProps = {
    className?: string;
};

export const Navbar = ({className}: NavbarProps) => {

    const {t} = useTranslation()

    return (
        <div className={classNames(styles.Navbar, {}, [])}>

            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/"} className={styles.mainLink}>
                    {t("Главная")}
                </AppLink>

                <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
                    {t("О сайте")}
                </AppLink>
            </div>
        </div>
    )
}
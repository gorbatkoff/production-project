import {classNames} from "shared/lib/classNames/classNames"

import styles from "./Sidebar.module.scss"
import {useState} from "react"
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher"
import {LangSwitcher} from "shared/ui/LangSwitcher/LangSwitcher"
import {useTranslation} from "react-i18next";
import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {RoutePath} from "shared/config/routeConfig/routeConfig";

import AboutIcon from "shared/assets/images/about-20-20.svg"
import MainIcon from "shared/assets/images/main-20-20.svg"

type SidebarProps = {
    className?: string;
};

export const Sidebar = ({className}: SidebarProps) => {

    const [collapsed, setCollapsed] = useState(false)

    function onToggle() {
        setCollapsed(prev => !prev)
    }

    const {t} = useTranslation();

    return (
        <div
            data-testid="Sidebar"
            className={
                classNames(styles.Sidebar,
                    {[styles.collapsed]: collapsed},
                    [className])}
        >
            <Button
                data-testid='sidebar-toggle'
                onClick={onToggle}
                className={styles.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? ">" : "<"}
            </Button>

            <div className={styles.items}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                    className={styles.item}
                >
                    <MainIcon className={styles.icon}/>
                    <span className={styles.link}>
                        {t("Главная")}
                    </span>
                </AppLink>

                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.about}
                    className={styles.item}
                >
                    <MainIcon className={styles.icon}/>
                    <span className={styles.link}>
                        {t("О сайте")}
                    </span>
                </AppLink>
            </div>

            <div className={styles.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed} className={styles.lang}/>
            </div>
        </div>
    )
}

import {classNames} from "shared/lib/classNames/classNames"

import styles from "./Sidebar.module.scss"
import {useState} from "react"
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher"
import {LangSwitcher} from "shared/ui/LangSwitcher/LangSwitcher"
import {useTranslation} from "react-i18next"

type SidebarProps = {
    className?: string;
};

export const Sidebar = ({className}: SidebarProps) => {

    const {t, i18n} = useTranslation()

    const [collapsed, setCollapsed] = useState(false)

    function onToggle() {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={
            classNames(styles.Sidebar,
                {[styles.collapsed]: collapsed},
                [className])}
        >
            <button onClick={onToggle}>
                {i18n.t("Свернуть")}
            </button>

            <div className={styles.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={styles.lang}/>
            </div>
        </div>
    )
}

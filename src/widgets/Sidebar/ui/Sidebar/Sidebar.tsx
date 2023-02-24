import {classNames} from "shared/lib/classNames/classNames"

import styles from "./Sidebar.module.scss"
import {useState} from "react"
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher"
import {LangSwitcher} from "shared/ui/LangSwitcher/LangSwitcher"

type SidebarProps = {
    className?: string;
};

export const Sidebar = ({className}: SidebarProps) => {

    const [collapsed, setCollapsed] = useState(false)

    function onToggle() {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            data-testid="Sidebar"
            className={
                classNames(styles.Sidebar,
                    {[styles.collapsed]: collapsed},
                    [className])}
        >
            <button
                data-testid='sidebar-toggle'
                onClick={onToggle}>
                Toggle
            </button>

            <div className={styles.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={styles.lang}/>
            </div>
        </div>
    )
}

import styles from "./Sidebar.module.scss"
import {memo, useMemo, useState} from "react"
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher"
import {LangSwitcher} from "shared/ui/LangSwitcher/LangSwitcher"
import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button";
import {SidebarItem} from "../SidebarItem/SidebarItem";
import {classNames} from "shared/lib/classNames/classNames";
import {useSelector} from "react-redux";
import {getSidebarItems} from "../../model/selectors/getSidebarItems";

type SidebarProps = {
    className?: string;
};

export const Sidebar = memo(({className}: SidebarProps) => {

    const [collapsed, setCollapsed] = useState(false)
    const SidebarItemsList = useSelector(getSidebarItems)
    function onToggle() {
        setCollapsed(prev => !prev)
    }
    
    const itemsList = useMemo(() => {
        return SidebarItemsList.map((item) => {
            return (
                <SidebarItem
                    item={item}
                    key={item.path}
                    collapsed={collapsed}
                />
            )
        })
    }, [SidebarItemsList, collapsed])

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
                {itemsList}
            </div>

            <div className={styles.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed} className={styles.lang}/>
            </div>
        </div>
    )
})

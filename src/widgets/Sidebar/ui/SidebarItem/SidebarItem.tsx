import {useTranslation} from "react-i18next";

import styles from "./SidebarItem.module.scss";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {SideBarItemType} from "../../model/items";
import {memo} from "react";
import {classNames} from "shared/lib/classNames/classNames";

interface SidebarItemProps {
    item: SideBarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({item, collapsed}: SidebarItemProps) => {

    const {t} = useTranslation();

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(styles.item, {[styles.collapsed]: collapsed}, [])}
        >
            <item.Icon className={styles.icon}/>
            <span className={styles.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
})
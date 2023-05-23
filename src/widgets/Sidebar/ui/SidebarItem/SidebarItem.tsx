import {useTranslation} from "react-i18next";

import styles from "./SidebarItem.module.scss";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {memo} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useSelector} from "react-redux";
import {getUserAuthData} from "entities/User";
import {SideBarItemType} from "widgets/Sidebar/model/types/sidebar";

interface SidebarItemProps {
    item: SideBarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({item, collapsed}: SidebarItemProps) => {

    const {t} = useTranslation();

    const isAuth = useSelector(getUserAuthData)

    if(item.authOnly && !isAuth) {
        return null;
    }

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
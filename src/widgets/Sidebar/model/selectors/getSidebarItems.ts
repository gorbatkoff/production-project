import {createSelector} from "@reduxjs/toolkit";
import {getUserAuthData} from "entities/User";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/images/main-20-20.svg";
import AboutIcon from "shared/assets/images/about-20-20.svg";
import ProfileIcon from "shared/assets/images/profile-20-20.svg";
import ArticlesIcon from "shared/assets/images/articles-20-20.svg";
import {SideBarItemType} from "../../model/types/sidebar";

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SideBarItemType[] = [
            {
                path: RoutePath.main,
                Icon: MainIcon,
                text: "Главная"
            },
            {
                path: RoutePath.about,
                Icon: AboutIcon,
                text: "О сайте"
            },
        ]

        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
                    Icon: ProfileIcon,
                    text: "Профиль",
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    Icon: ArticlesIcon,
                    text: "Статьи",
                    authOnly: true,
                },
            )
        }

        return sidebarItemsList;
    }
)
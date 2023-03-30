import React from "react";
import {RoutePath} from "shared/config/routeConfig/routeConfig";

import AboutIcon from "shared/assets/images/about-20-20.svg"
import MainIcon from "shared/assets/images/main-20-20.svg"
import ProfileIcon from "shared/assets/images/profile-20-20.svg"

export interface SideBarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: SideBarItemType[] = [
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
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: "Профиль",
        authOnly: true,
    },

]
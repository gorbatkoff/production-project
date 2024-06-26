// Храним информацию о маршрутах в перечислениях
import {RouteProps} from "react-router-dom"
import {MainPage} from "pages/MainPage"
import {AboutPage} from "pages/AboutPage"
import {NotFoundPage} from "pages/NotFoundPage";
import {ProfilePage} from "pages/ProfilePage";
import {ArticlesPage} from "pages/ArticlesPage";
import {ArticleDetailsPage} from "pages/ArticleDetailsPage";
import {ArticleEditPage} from "pages/ArticleEditPage";
import {AdminPanelPage} from "pages/AdminPanelPage";
import {UserRole} from "entities/User/model/types/user";
import {ForbiddenPage} from "pages/ForbiddenPage";

export type AppRouteProps = RouteProps & {
    authOnly?: boolean
    roles?: UserRole[];
}

export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    PROFILE = "profile",
    ARTICLES = "articles",
    ARTICLES_DETAILS = "articles_details",
    ARTICLES_CREATE = "articles_create",
    ARTICLES_EDIT = "articles_edit",
    ADMIN_PANEL = "admin_panel",
    FORBIDDEN = "forbidden",
    //last
    NOT_FOUND = "not_found",
}

// Тут из enum/a мы указываем путь до соответствующего компонента
export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.PROFILE]: "/profile/", // + :id
    [AppRoutes.ARTICLES]: "/articles",
    [AppRoutes.ARTICLES_DETAILS]: "/articles/", // + :id
    [AppRoutes.ARTICLES_CREATE]: "/articles/create",
    [AppRoutes.ARTICLES_EDIT]: "/articles/:id/edit",
    [AppRoutes.ADMIN_PANEL]: "/admin",
    [AppRoutes.FORBIDDEN]: "/forbidden",
    [AppRoutes.NOT_FOUND]: "*",
}

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>,
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlesPage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLES_DETAILS]: {
        path: `${RoutePath.articles_details}:id`,
        element: <ArticleDetailsPage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLES_EDIT]: {
        path: `${RoutePath.articles_edit}`,
        element: <ArticleEditPage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLES_CREATE]: {
        path: `${RoutePath.articles_create}`,
        element: <ArticleEditPage/>,
        authOnly: true
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: `${RoutePath.admin_panel}`,
        element: <AdminPanelPage/>,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER]
    },
    [AppRoutes.FORBIDDEN]: {
        path: `${RoutePath.forbidden}`,
        element: <ForbiddenPage/>,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>,
    },
}

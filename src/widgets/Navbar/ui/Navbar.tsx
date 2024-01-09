import {classNames} from "shared/lib/classNames/classNames"

import styles from "./Navbar.module.scss"
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {memo, useCallback, useState} from "react";
import {LoginModal} from "features/AuthByUsername";
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData, userActions} from "entities/User";
import {Text, TextTheme} from "shared/ui/Text/Text";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {Dropdown} from "shared/ui/Dropdown/Dropdown";
import {Avatar} from "shared/ui/Avatar/Avatar";

type NavbarProps = {
    className?: string;
};

export const Navbar = memo(({className}: NavbarProps) => {

    const {t} = useTranslation()

    const [isAuthModal, setIsAuthModal] = useState(false);
    const dispatch = useDispatch()
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])


    if (authData) {
        return (
            <div className={classNames(styles.Navbar, {}, [])}>
                <Text
                    theme={TextTheme.INVERTED}
                    className={styles.appName}
                    title={"Blog App"}
                />

                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.articles_create}
                    className={styles.createBtn}
                >
                    {t("Создать статью")}
                </AppLink>

                <Dropdown
                    className={styles.dropdown}
                    trigger={
                        <Avatar src={authData.avatar} size={35} />
                    }
                    direction="bottom left"
                    items={
                        [
                            {content: t("Профиль"), href: RoutePath.profile + authData.id},
                            {content:  t("Выйти"), onClick: onLogout},

                        ]
                    }
                />


            </div>
        )
    }

    return (
        <header className={classNames(styles.Navbar, {}, [])}>

            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={styles.links}
                onClick={onShowModal}
            >
                {t("Войти")}
            </Button>

            {isAuthModal && <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />}
        </header>
    )
})
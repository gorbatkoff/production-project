import {classNames} from "shared/lib/classNames/classNames"

import styles from "./Navbar.module.scss"
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useCallback, useState} from "react";
import {LoginModal} from "features/AuthByUsername";
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData, userActions} from "entities/User";

type NavbarProps = {
    className?: string;
};

export const Navbar = ({className}: NavbarProps) => {

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
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={styles.links}
                    onClick={onLogout}
                >
                    {t("Выйти")}
                </Button>
            </div>
        )
    }

    return (
        <div className={classNames(styles.Navbar, {}, [])}>

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
        </div>
    )
}
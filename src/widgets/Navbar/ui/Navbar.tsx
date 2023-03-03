import {classNames} from "shared/lib/classNames/classNames"

import styles from "./Navbar.module.scss"
import {useTranslation} from "react-i18next";
import {Modal} from "shared/ui/Modal/Modal";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useCallback, useState} from "react";
import {LoginForm} from "features/AuthByUsername/ui/LoginForm/LoginForm";
import {LoginModal} from "features/AuthByUsername";

type NavbarProps = {
    className?: string;
};

export const Navbar = ({className}: NavbarProps) => {

    const {t} = useTranslation()

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    return (
        <div className={classNames(styles.Navbar, {}, [])}>

            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={styles.links}
                onClick={onShowModal}
            >
                {t("Войти")}
            </Button>

            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </div>
    )
}
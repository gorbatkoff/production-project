import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";

import styles from "./LoginForm.module.scss";
import {Button} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {loginActions} from "../../model/slice/loginSlice";
import {memo, useCallback} from "react";
import {getLoginState} from "../../model/selectors/getLoginState/getLoginState";
import {loginByUsername} from "../../model/services/loginByUsername/loginByUsername";
import {Text, TextTheme} from "shared/ui/Text/Text";

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({className}: LoginFormProps) => {

    const {t} = useTranslation();

    const dispatch = useDispatch();
    const {username, password, error, isLoading} = useSelector(getLoginState)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({username, password}))
    }, [dispatch, username, password])

    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>

            <Text title="Форма авторизации"/>

            {error && <Text theme={TextTheme.ERROR} description={error}/>}

            <Input
                placeholder={t("Введите username")}
                type="text"
                className={styles.input}
                onChange={onChangeUsername}
                value={username}
            />

            <Input
                placeholder={t("Введите пароль")}
                type="text"
                className={styles.input}
                onChange={onChangePassword}
                value={password}
            />

            <Button
                className={styles.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t("Войти")}
            </Button>
        </div>
    );
})
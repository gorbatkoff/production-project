import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";

import styles from "./LoginForm.module.scss";
import {Button} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {loginActions, loginReducer} from "../../model/slice/loginSlice";
import {memo, useCallback} from "react";
import {loginByUsername} from "../../model/services/loginByUsername/loginByUsername";
import {Text, TextTheme} from "shared/ui/Text/Text";

// Selectors
import {getLoginUsername} from "../../model/selectors/getLoginUsername/getLoginUsername";
import {getLoginPassword} from "../../model/selectors/getLoginPassword/getLoginPassword";
import {getLoginIsLoading} from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import {getLogiError} from "../../model/selectors/getLoginError/getLoginError";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface LoginFormProps {
    className?: string
}

const initialReducers: ReducersList = {
    loginForm: loginReducer
}

const LoginForm = memo(({className}: LoginFormProps) => {

    const {t} = useTranslation();
    const dispatch = useDispatch();

    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginIsLoading)
    const error = useSelector(getLogiError)

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
        <DynamicModuleLoader
            removeAfterUnmount={false}
            reducers={initialReducers}
        >
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
        </DynamicModuleLoader>
    );
})

export default LoginForm;
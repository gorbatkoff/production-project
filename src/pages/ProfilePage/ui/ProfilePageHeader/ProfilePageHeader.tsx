import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";

import styles from "./ProfilePageHeader.module.scss";
import {Text} from "shared/ui/Text/Text";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useSelector} from "react-redux";
import {getProfileData, getProfileReadonly, profileActions, updateProfileData} from "entities/Profile";
import {useCallback} from "react";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {getUserAuthData} from "entities/User";

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader = ({className}: ProfilePageHeaderProps) => {

    const {t} = useTranslation();
    const authData = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileData)

    const canEdit = authData?.id === profileData?.id;
    // Если наш id равен id профиля который мы просматриваем -- тогда можно редактировать.

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSave = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch])

    return (
        <div className={classNames(styles.ProfilePageHeader, {}, [className])}>
            <Text title={t("Профиль пользователя")}/>

            {canEdit && (
                <div className={styles.btnWrapper}>
                    {readonly
                        ?
                        (
                            <Button
                                className={styles.editBtn}
                                theme={ButtonTheme.BACKGROUND_INVERTED}
                                onClick={onEdit}
                            >
                                {t("Редактировать")}
                            </Button>
                        )
                        :
                        (
                            <div className={styles.edit}>
                                <Button
                                    className={styles.editBtn}
                                    theme={ButtonTheme.WARNING}
                                    onClick={onCancelEdit}
                                >
                                    {t("Отменить")}
                                </Button>

                                <Button
                                    className={styles.saveBtn}
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onSave}
                                >
                                    {t("Сохранить")}
                                </Button></div>
                        )
                    }
                </div>
            )}
        </div>
    );
};
import {useCallback} from "react";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

import {Text} from "shared/ui/Text/Text";
import {getUserAuthData} from "entities/User";
import {getProfileData, getProfileReadonly, profileActions, updateProfileData} from "entities/Profile";
import {classNames} from "shared/lib/classNames/classNames";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {HStack} from "shared/ui/Stack/HStack/HStack";

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
        <HStack max justify="between" className={classNames("", {}, [className])}>
            <Text title={t("Профиль пользователя")}/>

            {canEdit && (
                <>
                    {readonly
                        ?
                        (
                            <Button
                                theme={ButtonTheme.BACKGROUND_INVERTED}
                                onClick={onEdit}
                            >
                                {t("Редактировать")}
                            </Button>
                        )
                        :
                        (
                            <HStack gap="8">
                                <Button
                                    theme={ButtonTheme.WARNING}
                                    onClick={onCancelEdit}
                                >
                                    {t("Отменить")}
                                </Button>

                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onSave}
                                >
                                    {t("Сохранить")}
                                </Button>
                            </HStack>
                        )
                    }
                </>
            )}
        </HStack>
    );
};
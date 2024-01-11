import {memo, useCallback} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {getUserAuthData} from "entities/User";
import {useSelector} from "react-redux";
import {getProfileData} from "../../model/selectors/getProfileData/getProfileData";
import {getProfileReadonly} from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {profileActions} from "../../model/slice/profileSlice";
import {updateProfileData} from "../../model/services/updateProfileData/updateProfileData";
import {HStack} from "shared/ui/Stack";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Text} from "shared/ui/Text/Text";


interface EditableProfileCardHeaderProps {
  className?: string
}

export const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {

    const {className} = props;

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
});
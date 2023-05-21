import {useTranslation} from "react-i18next";
import {memo, useCallback, useEffect} from "react";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
    fetchProfileData,
    getProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    ProfileCard,
    profileReducer, ValidateProfileError
} from "entities/Profile";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {ProfilePageHeader} from "./ProfilePageHeader/ProfilePageHeader";
import {Currency} from "entities/Currency";
import {Country} from "entities/Country";
import {Text, TextTheme} from "shared/ui/Text/Text";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {useParams} from "react-router-dom";


const reducers: ReducersList = {
    profile: profileReducer
}

interface ProfilePageProps {
    className?: string

}

const ProfilePage = memo(({className}: ProfilePageProps) => {

    const {t} = useTranslation("profile");
    const dispatch = useAppDispatch();

    const {id} = useParams<{ id: string }>();

    const data = useSelector(getProfileData);
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const isLoading = useSelector(getProfileIsLoading);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorsTranslate = {
        [ValidateProfileError.SERVER_ERROR]: t("Ошибка сервера при сохранении"),
        [ValidateProfileError.INCORRECT_COUNTRY]: t("Некорректный регион"),
        [ValidateProfileError.INCORRECT_AGE]: t("Некорректный возраст"),
        [ValidateProfileError.INCORRECT_USER_DATA]: t("Имя и фамилия обязательны"),
        [ValidateProfileError.NO_DATA]: t("Данные не указаны"),
    }

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    })

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({first: value || ""}))
    }, [dispatch])

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({lastname: value || ""}))
    }, [dispatch])

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({age: Number(value || 0)}));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({city: value || ""}))
    }, [dispatch])

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({username: value || ""}))
    }, [dispatch])

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({avatar: value || ""}))
    }, [dispatch])

    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updateProfile({currency}))
    }, [dispatch])

    const onChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updateProfile({country}))
    }, [dispatch])


    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ProfilePageHeader/>

            {validateErrors?.length && validateErrors.map((err) => (
                <Text
                    key={err}
                    theme={TextTheme.ERROR}
                    description={validateErrorsTranslate[err]}
                />
            ))}

            <ProfileCard
                data={formData}
                isLoading={isLoading}
                error={error}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                onChangeUsername={onChangeUsername}
                onChangeAvatar={onChangeAvatar}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
                readonly={readonly}
            />
        </DynamicModuleLoader>
    );
})

export default ProfilePage
import {classNames, Mods} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";

import styles from "./ProfileCard.module.scss";

import {Text, TextAlign, TextTheme} from "shared/ui/Text/Text";
import {Input} from "shared/ui/Input/Input";
import {Profile} from "../../model/types/profile";
import {Loader} from "shared/ui/Loader/Loader";
import {Avatar} from "shared/ui/Avatar/Avatar";
import {Currency, CurrencySelect} from "entities/Currency";
import {Country} from "entities/Country/model/types/country";
import {CountrySelect} from "entities/Country";
import {HStack, VStack} from "shared/ui/Stack";
import {Flex} from "shared/ui/Stack/Flex/Flex";

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {

    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    const {t} = useTranslation("profile");

    if (isLoading) {
        return (
            <HStack justify="center" max className={classNames(styles.ProfileCard, {}, [styles.loading])}>
                <Loader/>
            </HStack>
        )
    }

    if (error) {
        return (
            <HStack justify="center" className={classNames(styles.ProfileCard, {}, [styles.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t("Произошла ошибка при загрузке профиля")}
                    description={t("Попробуйте обновить страницу")}
                    align={TextAlign.CENTER}
                />
            </HStack>
        )
    }

    const mods: Mods = {
        [styles.editing]: !readonly
    }

    return (
        <VStack gap="8" max className={classNames(styles.ProfileCard, mods, [className])}>
            {data?.avatar && (
                <Flex justify="center" direction="row" max className={styles.avatarWrapper} >
                    <Avatar src={data?.avatar} alt={"Avatar"}/>
                </Flex>
            )}
            <Input
                value={data?.first}
                placeholder={t("Ваше имя")}
                className={styles.input}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid="ProfileCard.firstname"
            />
            <Input
                value={data?.lastname}
                placeholder={t("Ваша фамилия")}
                className={styles.input}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid="ProfileCard.lastname"
            />
            <Input
                value={data?.age}
                placeholder={t("Ваш возраст")}
                className={styles.input}
                onChange={onChangeAge}
                readonly={readonly}
                data-testid="ProfileCard.age"
            />
            <Input
                value={data?.city}
                placeholder={t("Ваш город")}
                className={styles.input}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <Input
                value={data?.username}
                placeholder={t("Ваш юзернейм")}
                className={styles.input}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <Input
                value={data?.avatar}
                placeholder={t("Введите ссылку на аватар")}
                className={styles.input}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
            <CurrencySelect
                className={styles.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />

            <CountrySelect
                className={styles.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
    );
};
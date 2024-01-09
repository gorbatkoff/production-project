import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {Select} from "shared/ui/Select/Select";
import {memo, useCallback} from "react";
import {Country} from "../../model/types/country";
import {ListBox} from "shared/ui/ListBox/ListBox";

interface CoutrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    {value: Country.Armenia, content: Country.Armenia},
    {value: Country.Belarus, content: Country.Belarus},
    {value: Country.Kazakhstan, content: Country.Kazakhstan},
    {value: Country.Russia, content: Country.Russia},
    {value: Country.Ukraine, content: Country.Ukraine},
]

export const CountrySelect = memo(({className, value, onChange, readonly}: CoutrySelectProps) => {

    const {t} = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange])

    return (
        <ListBox
            onChange={onChangeHandler}
            value={value}
            readonly={readonly}
            defaultValue={t("Укажите страну")}
            label={t("Укажите страну")}
            items={options}
            className={className}
            direction="top right"
        />
    )

})
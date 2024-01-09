import {useTranslation} from "react-i18next";
import {memo, useCallback} from "react";
import {Currency} from "../../model/types/currency";
import {ListBox} from "shared/ui/ListBox/ListBox";

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    {value: Currency.RUB, content: Currency.RUB},
    {value: Currency.EUR, content: Currency.EUR},
    {value: Currency.USD, content: Currency.USD},
]

export const CurrencySelect = memo(({className, value, onChange, readonly}: CurrencySelectProps) => {

    const {t} = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange])

    return (
        <ListBox
            className={className}
            value={value}
            items={options}
            readonly={readonly}
            onChange={onChangeHandler}
            label={t("Укажите валюту")}
            defaultValue={t("Укажите валюту")}
            direction="top right"
        />
    )
})
import {classNames, Mods} from "shared/lib/classNames/classNames";
import styles from "./Select.module.scss";
import {ChangeEvent, memo, useMemo} from "react";

export interface SelectOption {
    value: string;
    content: string
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean
}

export const Select = memo((props: SelectProps) => {

    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value)
    }

    const optionsList = useMemo(() => {
        return options?.map((opt) => (
            <option
                className={styles.option}
                key={opt.value}
                value={opt.value}
            >
                {opt.content}
            </option>
        ))
    }, [options]);

    const mods: Mods = {}

    return (
        <div className={classNames(styles.Wrapper, mods, [className])}>
            {label && (
                <span className={styles.label}>
                    {label + ">"}
                </span>
            )}
            <select
                disabled={readonly}
                className={styles.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    );
});
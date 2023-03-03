import {classNames} from "shared/lib/classNames/classNames";
import styles from "./Input.module.scss";
import React, {InputHTMLAttributes, memo, useEffect} from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}

// eslint-disable-next-line react/display-name
export const Input = memo((props: InputProps) => {

    const {
        className,
        value,
        onChange,
        type = "text",
        placeholder,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }

    return (
        <div className={classNames(styles.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={styles.placeholder}>
                    {`${placeholder}> `}
                </div>
            )}
            <input
                className={styles.Input}
                type={type}
                value={value}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    );
})
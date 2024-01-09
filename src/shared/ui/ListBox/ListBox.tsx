import {Fragment, ReactNode} from "react"
import {Listbox as HListBox} from "@headlessui/react"

import {classNames} from "shared/lib/classNames/classNames";
import {Button} from "../Button/Button";
import {HStack} from "../Stack";

import styles from "./ListBox.module.scss";

type DropDownDirection = "top" | "bottom";

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  items?: ListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  readonly?: boolean;
  label?: string;
  direction?: DropDownDirection;
}

const mapDirectionClass:Record<DropDownDirection, string> = {
    bottom: styles.optionBottom,
    top: styles.optionTop,
}

export const ListBox = (props: ListBoxProps) => {
    const {onChange, items, value, defaultValue, className, readonly, label, direction = "bottom"} = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap="4">
            {label && <span>{label + ">"}</span>}
            <HListBox
                disabled={readonly}
                as="div"
                className={classNames(styles.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button className={styles.trigger}>
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options
                    className={classNames(styles.options, {}, optionsClasses)}
                >
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li className={
                                    classNames(styles.item,
                                        {
                                            [styles.active]: active,
                                            [styles.disabled]: item.disabled
                                        })
                                }
                                >
                                    {selected && "!!!"}
                                    {item.content}
                                </li>
                            )}

                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
        
    )
}
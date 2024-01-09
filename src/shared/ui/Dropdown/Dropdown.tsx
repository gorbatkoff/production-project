import {FC, Fragment, ReactNode} from "react";
import {Menu} from "@headlessui/react"

import styles from "./Dropdown.module.scss";
import {classNames} from "shared/lib/classNames/classNames";
import {DropDownDirection} from "shared/types/ui";
import {AppLink} from "../AppLink/AppLink";

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  trigger: ReactNode;
  items: DropdownItem[];
  direction?: DropDownDirection;

}

const mapDirectionClass:Record<DropDownDirection, string> = {
    "bottom left": styles.optionBottomLeft,
    "bottom right": styles.optionBottomRight,
    "top left": styles.optionTopLeft,
    "top right": styles.optionTopRight,
}

export const Dropdown:FC<DropdownProps> = ({className, trigger, items, direction = "top right"}) => {

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu as="div" className={classNames(styles.Dropdown, {}, [className])}>
            <Menu.Button className={styles.trigger}>
                {trigger}
            </Menu.Button>
            <Menu.Items
                className={classNames(styles.menu, {}, menuClasses)}
            >
                {items.map((item, index) => {
                    const content = ({ active }: {active: boolean}) => (
                        <button
                            type="button"
                            onClick={item.onClick}
                            className={classNames(styles.item, {[styles.active]: active})}
                            disabled={item.disabled}

                        >
                            {item.content}
                        </button>
                    )

                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                key={`${index}-${item.content}`}
                                disabled={item.disabled}
                            >
                                {content}
                            </Menu.Item>)
                    }

                    return (
                        <Menu.Item
                            as={Fragment}
                            key={`${index}-${item.content}`}
                            disabled={item.disabled}
                        >
                            {content}
                        </Menu.Item>
                    )
                })}
            </Menu.Items>
        </Menu>
    )
}
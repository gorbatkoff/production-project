import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Select} from "./Select";

export default {
    title: "shared/Select",
    component: Select,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    arg: {
        to: "/"
    }
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const SelectDefault = Template.bind({});
SelectDefault.args = {
    label: "Укажите значения",
    options: [
        {value: "123", content: "Первый пункт"},
        {value: "1234", content: "Второй пункт"},
        {value: "12345", content: "Третий пункт"},
    ]
};


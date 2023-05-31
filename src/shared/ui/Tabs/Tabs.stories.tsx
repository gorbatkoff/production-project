import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {Tabs} from "./Tabs";
import { action } from "@storybook/addon-actions";

export default {
    title: "shared/Tabs",
    component: Tabs,
    argTypes: {
        backgroundColor: {control: "color"},
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    tabs: [
        {
            content: "Tab 1",
            value: "1"
        },
        {
            content: "Tab 2",
            value: "2"
        },
        {
            content: "Tab 3",
            value: "3"
        },
    ],
    value: "tab 2",
    onTabClick: action("onTabClick"),

};

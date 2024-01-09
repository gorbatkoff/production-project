import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";

import {ListBox} from "./ListBox";

export default {
    title: "shared/ListBox",
    component: ListBox,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    decorators: [
        Story => <div style={{padding: "30% 50%"}}>
            <Story />
        </div>
    ]
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    items: [
        {content: "121231231233", value: "123"},
        {content: "1283731231233", value: "12323"},
        {content: "9328181231233", value: "12341412"}
    ],
    value: "123",
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    items: [
        {content: "121231231233", value: "123"},
        {content: "1283731231233", value: "12323"},
        {content: "9328181231233", value: "12341412"}
    ],
    value: "123",
    direction: "top left"
};

export const TopRight = Template.bind({});
TopRight.args = {
    items: [
        {content: "121231231233", value: "123"},
        {content: "1283731231233", value: "12323"},
        {content: "9328181231233", value: "12341412"}
    ],
    value: "123",
    direction: "top right"
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    items: [
        {content: "121231231233", value: "123"},
        {content: "1283731231233", value: "12323"},
        {content: "9328181231233", value: "12341412"}
    ],
    value: "123",
    direction: "bottom left"
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    items: [
        {content: "121231231233", value: "123"},
        {content: "1283731231233", value: "12323"},
        {content: "9328181231233", value: "12341412"}
    ],
    value: "123",
    direction: "bottom right"
};

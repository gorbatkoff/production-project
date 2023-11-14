import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Avatar} from "./Avatar";
import src from "./Storybook.jpg"

export default {
    title: "shared/Avatar",
    component: Avatar,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    arg: {
        to: "/"
    }
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const DefaultAvatar = Template.bind({});
DefaultAvatar.args = {
    size: 150,
    alt: "Avatar",
    src: src
};

export const SmallAvatar = Template.bind({});
SmallAvatar.args = {
    size: 50,
    alt: "Avatar",
    src: src
};

import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {Skeleton} from "./Skeleton";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

export default {
    title: "shared/Skeleton",
    component: Skeleton,
    argTypes: {
        backgroundColor: {control: "color"},
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    height: 100,
    border: "10px",
    width: 500
};

export const Circle = Template.bind({});
Circle.args = {
    height: 250,
    border: "50%",
    width: 250
};
Circle.parameters = {
    loki: {skip: true}
}

export const NormalDark = Template.bind({});
NormalDark.args = {
    height: 100,
    border: "10px",
    width: 500
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)]

export const CircleDark = Template.bind({});
CircleDark.args = {
    height: 250,
    border: "50%",
    width: 250
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)]
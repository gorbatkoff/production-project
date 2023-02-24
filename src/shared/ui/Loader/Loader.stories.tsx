import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";

import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {Loader} from "shared/ui/Loader/Loader";

export default {
    title: "shared/Loader",
    component: Loader,
    argTypes: {
        backgroundColor: {control: "color"},
    },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const NormalLoader = Template.bind({});
NormalLoader.args = {};


export const DarkLoader = Template.bind({});
DarkLoader.args = {};
DarkLoader.decorators = [ThemeDecorator(Theme.DARK)]
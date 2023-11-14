import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";

import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {Text, TextSize, TextTheme} from "./Text";

export default {
    title: "shared/Text",
    component: Text,
    argTypes: {
        backgroundColor: {control: "color"},
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const WithTitle = Template.bind({});
WithTitle.args = {
    title: "Title lorem ipsum dolor sit amet"
};

export const WithTitleDark = Template.bind({});
WithTitleDark.args = {
    title: "Title lorem ipsum dolor sit amet"
};
WithTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithDescription = Template.bind({});
WithDescription.args = {
    description: "Description lorem ipsum dolor sit amet"
};

export const WithDescriptionDark = Template.bind({});
WithDescriptionDark.args = {
    description: "Description lorem ipsum dolor sit amet"
};
WithDescriptionDark.decorators = [ThemeDecorator(Theme.DARK)];


export const TitleAndDescription = Template.bind({});
TitleAndDescription.args = {
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    description: "Description lorem ipsum dolor sit amet"
};

export const TitleAndDescriptionDark = Template.bind({});
TitleAndDescriptionDark.args = {
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    description: "Description lorem ipsum dolor sit amet"
};
TitleAndDescriptionDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorTheme = Template.bind({});
ErrorTheme.args = {
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    description: "Description lorem ipsum dolor sit amet",
    theme: TextTheme.ERROR
};

export const ErrorThemeDark = Template.bind({});
ErrorThemeDark.args = {
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    description: "Description lorem ipsum dolor sit amet",
    theme: TextTheme.ERROR
};
ErrorThemeDark.decorators = [ThemeDecorator(Theme.DARK)];


export const Title_Size_L = Template.bind({});
Title_Size_L.args = {
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    description: "Description lorem ipsum dolor sit amet",
    size: TextSize.L
};

export const Title_Size_M = Template.bind({});
Title_Size_M.args = {
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    description: "Description lorem ipsum dolor sit amet",
    size: TextSize.M
};

export const Title_Size_S = Template.bind({});
Title_Size_S.args = {
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    description: "Description lorem ipsum dolor sit amet",
    size: TextSize.S
};

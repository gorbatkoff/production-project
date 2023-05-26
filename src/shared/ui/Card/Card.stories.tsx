import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";

import {Card} from "./Card";
import {Text} from "shared/ui/Text/Text";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {OutlineDark} from "shared/ui/Button/Button.stories";

export default {
    title: "shared/Card",
    component: Card,
    argTypes: {
        backgroundColor: {control: "color"},
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: <Text title="Заголовок" description="Описание заголовка"/>
};

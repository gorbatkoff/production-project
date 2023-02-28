import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";

import {Modal} from "shared/ui/Modal/Modal";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

export default {
    title: "shared/Modal",
    component: Modal,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalLight = Template.bind({});
ModalLight.args = {
    children: "Lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet.",
    isOpen: true
};

export const ModalDark = Template.bind({});
ModalDark.args = {
    children: "Lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet.",
    isOpen: true,
};
ModalDark.decorators = [ThemeDecorator(Theme.DARK)];
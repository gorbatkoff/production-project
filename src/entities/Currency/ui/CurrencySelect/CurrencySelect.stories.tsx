import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {CurrencySelect} from "./CurrencySelect";

export default {
    title: "entities/Select",
    component: CurrencySelect,
    argTypes: {
        backgroundColor: {control: "color"},
    },
    arg: {
        to: "/"
    }
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    readonly: true
};
Primary.parameters = {loki: {skip: true}}


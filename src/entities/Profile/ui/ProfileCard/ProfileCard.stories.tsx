import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ProfileCard} from "./ProfileCard";
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";
import Avatar from 'shared/assets/tests/img.png';

export default {
    title: "entities/ProfileCard",
    component: ProfileCard,
    argTypes: {
        backgroundColor: {control: "color"},
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const ProfileCardDefault = Template.bind({});
ProfileCardDefault.args = {
    data: {
        username: "admin",
        age: 22,
        country: Country.Ukraine,
        lastname: "Gorbatkov",
        first: "Artem",
        city: "Rostov on Don",
        currency: Currency.EUR,
        avatar: Avatar
    }
};

export const withError = Template.bind({});
withError.args = {
    error: "Error"
};

export const isLoading = Template.bind({});
isLoading.args = {
    isLoading: true
};


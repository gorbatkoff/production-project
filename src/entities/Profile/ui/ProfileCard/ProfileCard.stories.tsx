import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ProfileCard} from "./ProfileCard";
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";
import {Primary} from "shared/ui/Select/Select.stories";

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
        first: "asd",
        city: "asf",
        currency: Currency.USD,
        avatar: "https://yt3.ggpht.com/ytc/AMLnZu_KRgmmelcXZd7TMpWDrgHUWUQL4gxDbYFTqp9q=s900-c-k-c0x00ffffff-no-rj"
    },
};
ProfileCardDefault.parameters = {loki: {skip: true}}

export const withError = Template.bind({});
withError.args = {
    error: "Error"
};

export const isLoading = Template.bind({});
isLoading.args = {
    isLoading: true
};


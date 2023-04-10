import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import ProfilePage from "pages/ProfilePage/ui/ProfilePage";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

export default {
    title: "pages/ProfilePage",
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    profile: {
        form: {
            username: "admin",
            age: 22,
            country: Country.Ukraine,
            lastname: "Gorbatkov",
            first: "asd",
            city: "asf",
            currency: Currency.USD,
            avatar: "https://yt3.ggpht.com/ytc/AMLnZu_KRgmmelcXZd7TMpWDrgHUWUQL4gxDbYFTqp9q=s900-c-k-c0x00ffffff-no-rj"
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            username: "admin",
            age: 22,
            country: Country.Ukraine,
            lastname: "Gorbatkov",
            first: "asd",
            city: "asf",
            currency: Currency.USD,
            avatar: "https://yt3.ggpht.com/ytc/AMLnZu_KRgmmelcXZd7TMpWDrgHUWUQL4gxDbYFTqp9q=s900-c-k-c0x00ffffff-no-rj"
        },
    },
})];

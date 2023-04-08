import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import ProfilePage from "./ProfilePage";
import {StoreDecorator} from "shared/config/storybook/StoreDecorator/StoreDecorator";
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";

export default {
    title: "pages/ProfilePage",
    component: ProfilePage,
    argTypes: {
        backgroundColor: {control: "color"},
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage/>;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    profile: {
        form: {
            username: "admin",
            age: 22,
            country: Country.Ukraine,
            lastname: "Gorbatkov",
            first: "Artem",
            city: "Rostov on Don",
            currency: Currency.EUR,
            avatar: "https://i.pinimg.com/564x/07/c6/5b/07c65b6f0add6e05a8804473da844bff.jpg"
        }
    }
})]


export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            username: "admin",
            age: 22,
            country: Country.Ukraine,
            lastname: "Gorbatkov",
            first: "Artem",
            city: "Rostov on Don",
            currency: Currency.EUR,
            avatar: "https://i.pinimg.com/564x/07/c6/5b/07c65b6f0add6e05a8804473da844bff.jpg"
        }
    }
})]

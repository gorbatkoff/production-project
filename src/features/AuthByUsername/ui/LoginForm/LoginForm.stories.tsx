import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";

import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {LoginForm} from "./LoginForm";
import {StoreDecorator} from "shared/config/storybook/StoreDecorator/StoreDecorator";


export default {
    title: "features/LoginForm",
    component: LoginForm,
    argTypes: {
        backgroundColor: {control: "color"},
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const LoginFormLight = Template.bind({});
LoginFormLight.args = {};
LoginFormLight.decorators = [StoreDecorator({
    loginForm: {username: "123", password: "qwerty",}
})]

export const LoginFormDark = Template.bind({});
LoginFormDark.args = {};
LoginFormDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: {username: "123", password: "qwerty",}
})];

export const LoginFormWithError = Template.bind({});
LoginFormWithError.args = {};
LoginFormWithError.decorators = [StoreDecorator({
    loginForm: {username: "123", password: "qwerty", error: "Неверный логин или пароль"}
})]

export const LoginFormWithErrorDark = Template.bind({});
LoginFormWithErrorDark.args = {};
LoginFormWithErrorDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: {username: "123", password: "qwerty", error: "Неверный логин или пароль"}
})];

export const WithLoading = Template.bind({});
WithLoading.args = {};
WithLoading.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: {isLoading: true}
})];

import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {CommentCard} from "./CommentCard";

export default {
    title: "entities/CommentCard",
    component: CommentCard,
    argTypes: {
        backgroundColor: {control: "color"},
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comment: {
        text: "Hello, World!",
        user: {
            avatar: "https://i.pinimg.com/564x/40/e4/f2/40e4f222740a74b3a284a900e3fdeead.jpg",
            username: "Levi Akerman",
            id: "1"
        },
        id: "1"
    }
};
export const CardIsLoading = Template.bind({});
CardIsLoading.args = {
    isLoading: true,
};

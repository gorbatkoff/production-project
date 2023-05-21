import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {CommentList} from "./CommentList";

export default {
    title: "entities/CommentList",
    component: CommentList,
    argTypes: {
        backgroundColor: {control: "color"},
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: "1",
            user: {
                id: "1",
                username: "Levi Akerman",
                avatar: "https://i.pinimg.com/564x/40/e4/f2/40e4f222740a74b3a284a900e3fdeead.jpg"
            },
            text: "Hello, Ervin! What's going on?"
        },
        {
            id: "2",
            user: {
                id: "2",
                username: "Ervin Smith",
                avatar: "https://i.pinimg.com/564x/31/86/2f/31862fccd438663cb841ae7449d90f9e.jpg"
            },
            text: "IDK Levi! I heard Titans destroyed Sina Wall"
        },
        {
            id: "3",
            user: {
                id: "1",
                username: "Levi Akerman",
                avatar: "https://i.pinimg.com/564x/40/e4/f2/40e4f222740a74b3a284a900e3fdeead.jpg"
            },
            text: "Damn, we should go there and kill them!"
        },
    ]
};


export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};
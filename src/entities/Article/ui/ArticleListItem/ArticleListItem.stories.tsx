import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";

import {ArticleListItem} from "./ArticleListItem";
import {ArticleView} from "entities/Article";
import { article } from "../ArticleList/ArticleList.stories";

export default {
    title: "entities/ArticleListItem",
    component: ArticleListItem,
    argTypes: {
        backgroundColor: {control: "color"},
    },
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;

export const ListFormat = Template.bind({});
ListFormat.args = {
    view: ArticleView.LIST,
    article,
};

export const TilesFormat = Template.bind({});
TilesFormat.args = {
    view: ArticleView.TILE,
    article,
};

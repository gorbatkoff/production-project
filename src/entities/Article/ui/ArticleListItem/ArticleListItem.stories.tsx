import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";

import {ArticleListItem} from "./ArticleListItem";
import {Article, ArticleView} from "../../model/types/article";
import { article } from "shared/mockedData/article/article";

export default {
    title: "entities/Article/ArticleListItem",
    component: ArticleListItem,
    argTypes: {
        backgroundColor: {control: "color"},
    },
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;

export const ListFormat = Template.bind({});
ListFormat.args = {
    view: ArticleView.LIST,
    article: article as Article
};

export const TilesFormat = Template.bind({});
TilesFormat.args = {
    view: ArticleView.TILE,
    article: article as Article
};

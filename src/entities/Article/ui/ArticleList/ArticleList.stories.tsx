import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";

import {ArticleList} from "./ArticleList";
import {ArticleView} from "entities/Article";
import {article} from "shared/mockedData/article/article";


export default {
    title: "entities/Article/ArticleList",
    component: ArticleList,
    argTypes: {
        backgroundColor: {control: "color"},
    },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;



export const TilesArticles = Template.bind({});
TilesArticles.args = {
    view: ArticleView.TILE,
    articles: new Array(9).fill(article),
};

export const ListOfArticles = Template.bind({});
ListOfArticles.args = {
    view: ArticleView.LIST,
    articles: new Array(9).fill(article),
};

export const TilesArticlesIsLoading = Template.bind({});
TilesArticlesIsLoading.args = {
    view: ArticleView.TILE,
    isLoading: true,
    articles: new Array(9).fill(article),
};

export const ListOfArticlesIsLoading = Template.bind({});
ListOfArticlesIsLoading.args = {
    view: ArticleView.LIST,
    isLoading: true,
    articles: new Array(9).fill(article),
};

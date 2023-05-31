import {combineReducers} from "@reduxjs/toolkit";
import {ArticlesDetailsPageSchema} from "../types/index";
import {articleDetailsPageRecommendationsReducer} from "../slices/ArticleDetailsPageRecommendationsSlice";
import {articleDetailsCommentsReducer} from "../slices/ArticleDetailsCommentsSlice";

export const articleDetailsPageReducer = combineReducers<ArticlesDetailsPageSchema>({
    recommendations: articleDetailsPageRecommendationsReducer,
    comments: articleDetailsCommentsReducer
})
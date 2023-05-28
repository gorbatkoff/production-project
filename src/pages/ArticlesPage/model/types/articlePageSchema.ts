import {EntityState} from "@reduxjs/toolkit";
import {Article, ArticleView} from "entities/Article";

export interface ArticlePageSchema extends EntityState<Article> {
    isLoading?: boolean,
    error?: string,
    view: ArticleView,
    // Pagination
    page: number,
    limit?: number,
    hasMore: boolean
}
import {EntityState} from "@reduxjs/toolkit";
import {Article, ArticleView} from "entities/Article";
import {SortOrder} from "shared/types";
import {ArticleSortField, ArticleTypes} from "entities/Article";

export interface ArticlePageSchema extends EntityState<Article> {
    isLoading?: boolean,
    error?: string,
    // Pagination
    page: number,
    limit: number,
    hasMore: boolean,

    //filters
    view: ArticleView,
    order: SortOrder,
    sort: ArticleSortField; // То, по чему мы можем сортировать дата, название, просмотры
    search: string,
    type: ArticleTypes

    _inited: boolean,
}
import {StateSchema} from "app/providers/StoreProvider";
import {ArticleView} from "entities/Article";

export const getArticlePageError = (state: StateSchema) => state.articlePage?.error
export const getArticlePageIsLoading = (state: StateSchema) => state.articlePage?.isLoading || false
export const getArticlePageView = (state: StateSchema) => state.articlePage?.view || ArticleView.TILE
export const getArticlePageNum = (state: StateSchema) => state.articlePage?.page || 1;
export const getArticlePageHasMore = (state: StateSchema) => state.articlePage?.hasMore;
export const getArticlePageLimit = (state: StateSchema) => state.articlePage?.limit || 9
export const getArticlePageInited = (state: StateSchema) => state.articlePage?._inited || false;
